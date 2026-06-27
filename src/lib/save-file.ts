// Session-scoped "save to a file you choose".
//
// When the browser supports the File System Access API we let the user pick
// where to write the backup via the native dialog and overwrite that one file.
// We deliberately do NOT persist the returned FileSystemFileHandle (no IndexedDB,
// no background sync): a stored handle is a pointer to a location on the user's
// disk, which contradicts this zero-trace privacy tool. The user re-picks every
// time, so nothing about their filesystem is remembered across sessions.
//
// Zero network, no new deps.

// Minimal local typings for the slice of the File System Access API we use —
// avoids `any` and avoids depending on lib.dom typings that may not include it.
interface SaveFileWritable {
  write(data: Blob): Promise<void>
  close(): Promise<void>
}

interface SaveFileHandle {
  createWritable(): Promise<SaveFileWritable>
}

interface SaveFilePickerOptions {
  suggestedName?: string
  types?: { description: string; accept: Record<string, string[]> }[]
}

interface SaveFilePickerWindow {
  showSaveFilePicker(options: SaveFilePickerOptions): Promise<SaveFileHandle>
}

function pickerWindow(): SaveFilePickerWindow | null {
  if (typeof window !== 'undefined' && 'showSaveFilePicker' in window) {
    return window as unknown as SaveFilePickerWindow
  }
  return null
}

/**
 * Save `blob` to disk. Returns `true` when written, `false` when the user
 * cancelled the native picker. Re-throws any non-cancel error.
 */
export async function saveBlob(blob: Blob, suggestedName: string): Promise<boolean> {
  const fsa = pickerWindow()

  if (fsa) {
    try {
      const handle = await fsa.showSaveFilePicker({
        suggestedName,
        types: [
          {
            description: 'Vanish backup',
            accept: { 'application/octet-stream': ['.vanish'] },
          },
        ],
      })
      const writable = await handle.createWritable()
      await writable.write(blob)
      await writable.close()
      return true
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        return false // user cancelled the picker
      }
      throw e
    }
  }

  // Fallback: classic anchor-download. No way to detect cancel here, so `true`.
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = suggestedName
  a.click()
  URL.revokeObjectURL(url)
  return true
}
