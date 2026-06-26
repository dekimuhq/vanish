// Dependency-free PNG icon generator for the Vanish PWA.
// Draws the brand mark (cyan progress ring + "V") onto a dark rounded tile and
// encodes a valid RGBA PNG using only Node's built-in zlib. No external deps =
// nothing extra in the supply chain, matching the app's privacy posture.
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const BG = [11, 13, 16, 255] // #0b0d10
const TILE = [15, 18, 22, 255] // #0f1216
const TRACK = [27, 33, 42, 255] // #1b212a
const RING = [79, 209, 197, 255] // #4fd1c5
const MARK = [94, 234, 212, 255] // #5eead4

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crc])
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type RGBA
  // 10,11,12 = compression/filter/interlace = 0
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride)
  }
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))])
}

function draw(size, { maskable = false } = {}) {
  const rgba = Buffer.alloc(size * size * 4)
  const cx = size / 2
  const cy = size / 2
  const pad = maskable ? size * 0.16 : size * 0.5 // maskable needs full-bleed bg
  const radius = maskable ? size : size * 0.22 // corner radius for the tile
  const ringR = size * (maskable ? 0.3 : 0.34)
  const ringW = size * 0.055
  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return
    const i = (y * size + x) * 4
    rgba[i] = c[0]
    rgba[i + 1] = c[1]
    rgba[i + 2] = c[2]
    rgba[i + 3] = c[3]
  }
  // rounded-tile background
  const inset = maskable ? 0 : size * 0.06
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inTile = roundedRect(x, y, inset, inset, size - inset, size - inset, radius)
      if (inTile) set(x, y, maskable ? BG : TILE)
      else set(x, y, [0, 0, 0, 0])
    }
  }
  // progress ring: track full circle, accent ~70% arc starting at top
  for (let a = 0; a < 360; a += 0.25) {
    const rad = (a - 90) * (Math.PI / 180)
    for (let r = ringR - ringW / 2; r <= ringR + ringW / 2; r += 0.5) {
      const x = Math.round(cx + Math.cos(rad) * r)
      const y = Math.round(cy + Math.sin(rad) * r)
      set(x, y, a <= 252 ? RING : TRACK)
    }
  }
  // "V" mark
  const vTop = cy - size * 0.13
  const vBot = cy + size * 0.16
  const vHalf = size * 0.16
  const lw = size * 0.06
  stroke(set, cx - vHalf, vTop, cx, vBot, lw, MARK, size)
  stroke(set, cx, vBot, cx + vHalf, vTop, lw, MARK, size)
  void pad
  return encodePNG(size, size, rgba)
}

function roundedRect(x, y, x0, y0, x1, y1, r) {
  if (x < x0 || y < y0 || x >= x1 || y >= y1) return false
  const corners = [
    [x0 + r, y0 + r],
    [x1 - r, y0 + r],
    [x0 + r, y1 - r],
    [x1 - r, y1 - r],
  ]
  const nearX = x < x0 + r ? 0 : x > x1 - r ? 1 : -1
  const nearY = y < y0 + r ? 0 : y > y1 - r ? 1 : -1
  if (nearX >= 0 && nearY >= 0) {
    const c = corners[nearY * 2 + nearX]
    return (x - c[0]) ** 2 + (y - c[1]) ** 2 <= r * r
  }
  return true
}

function stroke(set, x0, y0, x1, y1, w, c, size) {
  const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 2)
  for (let s = 0; s <= steps; s++) {
    const t = s / steps
    const px = x0 + (x1 - x0) * t
    const py = y0 + (y1 - y0) * t
    const rad = Math.ceil(w / 2)
    for (let dy = -rad; dy <= rad; dy++)
      for (let dx = -rad; dx <= rad; dx++)
        if (dx * dx + dy * dy <= rad * rad) set(Math.round(px + dx), Math.round(py + dy), c)
  }
  void size
}

const out = (p, buf) => {
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, buf)
  console.log('wrote', p, buf.length, 'bytes')
}

out('public/icons/icon-192.png', draw(192))
out('public/icons/icon-512.png', draw(512))
out('public/icons/icon-512-maskable.png', draw(512, { maskable: true }))
