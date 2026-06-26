// Dependency-free PNG icon generator for the Vanish PWA.
// Draws the brand mark — a black cat's head (it's dark and vanishes; the domain
// is vanish.cat) defined by a teal rim-light + teal eyes so it reads on the
// near-black tile — and encodes a valid RGBA PNG using only Node's built-in
// zlib. No external deps = nothing extra in the supply chain, matching the
// app's privacy posture.
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const BG = [11, 13, 16, 255] // #0b0d10 page background (maskable full-bleed)
const TILE = [15, 18, 22, 255] // #0f1216 rounded tile
const CAT = [6, 8, 11, 255] // near-black cat, a touch darker than the tile
const RIM = [79, 209, 197, 255] // #4fd1c5 teal rim / outline
const EYE = [94, 234, 212, 255] // #5eead4 brighter teal eyes
const WHISK = [79, 209, 197, 170] // teal whiskers, semi-transparent

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

// ── tiny raster primitives (operate on an S×S RGBA buffer) ──────────────────
function painter(buf, S) {
  // alpha-composite a colour at an integer pixel
  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= S || y >= S) return
    const i = (y * S + x) * 4
    const a = c[3] / 255
    if (a >= 1) {
      buf[i] = c[0]; buf[i + 1] = c[1]; buf[i + 2] = c[2]; buf[i + 3] = 255
    } else {
      buf[i] = Math.round(c[0] * a + buf[i] * (1 - a))
      buf[i + 1] = Math.round(c[1] * a + buf[i + 1] * (1 - a))
      buf[i + 2] = Math.round(c[2] * a + buf[i + 2] * (1 - a))
      buf[i + 3] = Math.max(buf[i + 3], Math.round(255 * a))
    }
  }
  const fillEllipse = (cx, cy, rx, ry, c) => {
    for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++)
      for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
        const dx = (x - cx) / rx, dy = (y - cy) / ry
        if (dx * dx + dy * dy <= 1) set(x, y, c)
      }
  }
  const sign = (ax, ay, bx, by, px, py) => (px - bx) * (ay - by) - (ax - bx) * (py - by)
  const fillTri = (a, b, cc, col) => {
    const minX = Math.floor(Math.min(a[0], b[0], cc[0])), maxX = Math.ceil(Math.max(a[0], b[0], cc[0]))
    const minY = Math.floor(Math.min(a[1], b[1], cc[1])), maxY = Math.ceil(Math.max(a[1], b[1], cc[1]))
    for (let y = minY; y <= maxY; y++)
      for (let x = minX; x <= maxX; x++) {
        const d1 = sign(a[0], a[1], b[0], b[1], x, y)
        const d2 = sign(b[0], b[1], cc[0], cc[1], x, y)
        const d3 = sign(cc[0], cc[1], a[0], a[1], x, y)
        const neg = d1 < 0 || d2 < 0 || d3 < 0
        const pos = d1 > 0 || d2 > 0 || d3 > 0
        if (!(neg && pos)) set(x, y, col)
      }
  }
  const disc = (px, py, r, c) => {
    for (let dy = -Math.ceil(r); dy <= Math.ceil(r); dy++)
      for (let dx = -Math.ceil(r); dx <= Math.ceil(r); dx++)
        if (dx * dx + dy * dy <= r * r) set(Math.round(px + dx), Math.round(py + dy), c)
  }
  const seg = (x0, y0, x1, y1, w, c) => {
    const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 2) + 1
    for (let s = 0; s <= steps; s++) {
      const t = s / steps
      disc(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, w / 2, c)
    }
  }
  const strokeEllipse = (cx, cy, rx, ry, w, c) => {
    const steps = Math.ceil((rx + ry) * 4)
    for (let s = 0; s <= steps; s++) {
      const ang = (s / steps) * Math.PI * 2
      disc(cx + Math.cos(ang) * rx, cy + Math.sin(ang) * ry, w / 2, c)
    }
  }
  const strokeTri = (a, b, cc, w, c) => {
    seg(a[0], a[1], b[0], b[1], w, c)
    seg(b[0], b[1], cc[0], cc[1], w, c)
    seg(cc[0], cc[1], a[0], a[1], w, c)
  }
  return { set, fillEllipse, fillTri, strokeEllipse, strokeTri, seg }
}

function roundedRect(x, y, x0, y0, x1, y1, r) {
  if (x < x0 || y < y0 || x >= x1 || y >= y1) return false
  const nearX = x < x0 + r ? 0 : x > x1 - r ? 1 : -1
  const nearY = y < y0 + r ? 0 : y > y1 - r ? 1 : -1
  if (nearX >= 0 && nearY >= 0) {
    const cxp = nearX === 0 ? x0 + r : x1 - r
    const cyp = nearY === 0 ? y0 + r : y1 - r
    return (x - cxp) ** 2 + (y - cyp) ** 2 <= r * r
  }
  return true
}

// Render the mark on a 64-unit design grid scaled to an S×S buffer, then the
// caller box-downsamples for anti-aliasing.
function render(S, { maskable = false } = {}) {
  const buf = Buffer.alloc(S * S * 4)
  const p = painter(buf, S)
  // maskable safe-zone: shrink the art toward centre so nothing is clipped.
  const scale = maskable ? 0.74 : 1
  const u = (S / 64) * scale
  const C = S / 2
  const X = (n) => C + (n - 32) * u
  const Y = (n) => C + (n - 32) * u
  const L = (n) => n * u

  // ── background tile ──
  const inset = maskable ? 0 : S * 0.055
  const radius = maskable ? 0 : S * 0.22
  for (let y = 0; y < S; y++)
    for (let x = 0; x < S; x++) {
      if (maskable) { p.set(x, y, BG); continue }
      if (roundedRect(x, y, inset, inset, S - inset, S - inset, radius)) p.set(x, y, TILE)
    }

  const ow = L(2.3) // outline weight
  const head = { cx: X(32), cy: Y(39), rx: L(18), ry: L(15.5) }

  // ── whiskers (behind the head, fading onto the tile) ──
  const wk = (x0, y0, x1, y1) => p.seg(X(x0), Y(y0), X(x1), Y(y1), L(1.1), WHISK)
  wk(21, 40, 8, 37); wk(21, 43, 7, 45)
  wk(43, 40, 56, 37); wk(43, 43, 57, 45)

  // ── ears (filled black, teal outline) — drawn first so the head overlaps
  //    their bases and they read as emerging from the skull ──
  const lEar = [[X(16), Y(10)], [X(29.5), Y(24)], [X(19), Y(28)]]
  const rEar = [[X(48), Y(10)], [X(34.5), Y(24)], [X(45), Y(28)]]
  p.fillTri(lEar[0], lEar[1], lEar[2], CAT)
  p.fillTri(rEar[0], rEar[1], rEar[2], CAT)
  p.strokeTri(lEar[0], lEar[1], lEar[2], ow, RIM)
  p.strokeTri(rEar[0], rEar[1], rEar[2], ow, RIM)

  // ── head (filled black, teal outline) ──
  p.fillEllipse(head.cx, head.cy, head.rx, head.ry, CAT)
  p.strokeEllipse(head.cx, head.cy, head.rx, head.ry, ow, RIM)

  // ── eyes (teal almonds) + vertical "vanishing" pupil slit ──
  for (const ex of [25.5, 38.5]) {
    p.fillEllipse(X(ex), Y(38), L(3), L(4.3), EYE)
    p.seg(X(ex), Y(34.4), X(ex), Y(41.6), L(1.5), CAT) // slit pupil
  }

  // ── nose (tiny teal triangle) ──
  p.fillTri([X(32), Y(44.5)], [X(30.4), Y(42.6)], [X(33.6), Y(42.6)], EYE)

  return buf
}

// supersample → box downsample for smooth edges
function draw(size, opts = {}) {
  const ss = 3
  const S = size * ss
  const hi = render(S, opts)
  const out = Buffer.alloc(size * size * 4)
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0
      for (let dy = 0; dy < ss; dy++)
        for (let dx = 0; dx < ss; dx++) {
          const i = ((y * ss + dy) * S + (x * ss + dx)) * 4
          r += hi[i]; g += hi[i + 1]; b += hi[i + 2]; a += hi[i + 3]
        }
      const n = ss * ss
      const o = (y * size + x) * 4
      out[o] = Math.round(r / n); out[o + 1] = Math.round(g / n)
      out[o + 2] = Math.round(b / n); out[o + 3] = Math.round(a / n)
    }
  return encodePNG(size, size, out)
}

const out = (path, buf) => {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, buf)
  console.log('wrote', path, buf.length, 'bytes')
}

out('public/icons/icon-192.png', draw(192))
out('public/icons/icon-512.png', draw(512))
out('public/icons/icon-512-maskable.png', draw(512, { maskable: true }))
