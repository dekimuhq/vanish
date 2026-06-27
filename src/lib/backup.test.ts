// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { encryptBackup, decryptBackup, BackupError } from './backup'
import { initialState } from './types'
import { sanitize } from '../store/store'
import type { LetterRecord } from './types'

describe('backup encryption', () => {
  it('round-trips state through encrypt → decrypt', async () => {
    const state = { ...initialState(), onboarded: true, lastBackupAt: '2026-06-27T00:00:00.000Z' }
    const blob = await encryptBackup(state, 'correct horse')
    const restored = await decryptBackup(blob, 'correct horse')
    expect(restored).toEqual(state)
  })

  it('throws BackupError on the wrong passphrase', async () => {
    const blob = await encryptBackup(initialState(), 'right')
    await expect(decryptBackup(blob, 'wrong')).rejects.toBeInstanceOf(BackupError)
  })

  it('throws BackupError on a non-Vanish file', async () => {
    const junk = new Blob([new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])])
    await expect(decryptBackup(junk, 'x')).rejects.toBeInstanceOf(BackupError)
  })

  it('requires a passphrase to encrypt', async () => {
    await expect(encryptBackup(initialState(), '')).rejects.toBeInstanceOf(BackupError)
  })

  it('a populated letters map survives encrypt → decrypt → sanitize', async () => {
    const letter: LetterRecord = {
      id: 'L1', kind: 'erasure', recipient: 'Spokeo',
      sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent',
    }
    const state = { ...initialState(), onboarded: true, letters: { L1: letter } }
    const blob = await encryptBackup(state, 'pw')
    const restored = sanitize(await decryptBackup(blob, 'pw'))
    expect(restored.letters.L1).toEqual(letter)
  })
})
