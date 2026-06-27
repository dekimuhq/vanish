import type { AppState } from './types'

// File layout: MAGIC(7) | salt(16) | iv(12) | AES-GCM ciphertext.
const MAGIC = 'VANISH1'
const ITERATIONS = 210_000
const SALT_LEN = 16
const IV_LEN = 12

/** Thrown for every recoverable backup failure (bad passphrase, corrupt file,
 *  missing passphrase) so callers can show a friendly message. */
export class BackupError extends Error {}

// TextEncoder always returns an ArrayBuffer-backed view; the narrower type keeps
// it assignable to BufferSource under TS 5.7+ (Uint8Array<ArrayBufferLike>).
const encode = (s: string): Uint8Array<ArrayBuffer> =>
  new TextEncoder().encode(s) as Uint8Array<ArrayBuffer>

async function deriveKey(passphrase: string, salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey('raw', encode(passphrase), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    base,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  )
}

/** Encrypt the app state into a passphrase-protected `.vanish` blob. */
export async function encryptBackup(state: AppState, passphrase: string): Promise<Blob> {
  if (!passphrase) throw new BackupError('A passphrase is required.')
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN))
  const iv = crypto.getRandomValues(new Uint8Array(IV_LEN))
  const key = await deriveKey(passphrase, salt)
  const ct = new Uint8Array(
    await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encode(JSON.stringify(state))),
  )
  const magic = encode(MAGIC)
  const out = new Uint8Array(magic.length + salt.length + iv.length + ct.length)
  out.set(magic, 0)
  out.set(salt, magic.length)
  out.set(iv, magic.length + salt.length)
  out.set(ct, magic.length + salt.length + iv.length)
  return new Blob([out], { type: 'application/octet-stream' })
}

/** Decrypt a `.vanish` blob. Returns the raw parsed object — callers MUST pipe
 *  it through the store's `sanitize()` before use. Throws BackupError on a
 *  wrong passphrase or corrupt input. */
export async function decryptBackup(blob: Blob, passphrase: string): Promise<unknown> {
  const buf = new Uint8Array(await blob.arrayBuffer())
  const magic = new TextDecoder().decode(buf.slice(0, MAGIC.length))
  if (magic !== MAGIC) throw new BackupError('Not a Vanish backup file.')
  const salt = buf.slice(MAGIC.length, MAGIC.length + SALT_LEN)
  const iv = buf.slice(MAGIC.length + SALT_LEN, MAGIC.length + SALT_LEN + IV_LEN)
  const ct = buf.slice(MAGIC.length + SALT_LEN + IV_LEN)
  const key = await deriveKey(passphrase, salt)
  try {
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct)
    return JSON.parse(new TextDecoder().decode(pt))
  } catch {
    throw new BackupError('Wrong passphrase or corrupted file.')
  }
}
