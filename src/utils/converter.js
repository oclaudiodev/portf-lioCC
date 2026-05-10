const HEX_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }

export function decToBin(value) {
  const n = parseInt(value, 10)
  if (isNaN(n) || n < 0) return null
  const bin = n.toString(2)
  const steps = []
  let tmp = n
  while (tmp > 0) {
    steps.push(`${tmp} ÷ 2 = ${Math.floor(tmp / 2)} (resto: ${tmp % 2})`)
    tmp = Math.floor(tmp / 2)
  }
  return {
    result: bin + ' ₂',
    steps: `Decimal ${n} → Binário\n${steps.join('\n')}\nLer de baixo para cima: ${bin}`,
  }
}

export function binToDec(value) {
  if (!/^[01]+$/.test(value)) return null
  const n = parseInt(value, 2)
  const bits = value.split('')
  const lines = bits.map((b, i) => `${b} × 2^${bits.length - 1 - i} = ${b * Math.pow(2, bits.length - 1 - i)}`)
  return {
    result: n + ' ₁₀',
    steps: `Binário ${value} → Decimal\n${lines.join('\n')}\nSoma = ${n}`,
  }
}

export function decToHex(value) {
  const n = parseInt(value, 10)
  if (isNaN(n) || n < 0) return null
  const hex = n.toString(16).toUpperCase()
  const steps = []
  let tmp = n
  const hm = '0123456789ABCDEF'
  while (tmp > 0) {
    const r = tmp % 16
    steps.push(`${tmp} ÷ 16 = ${Math.floor(tmp / 16)} (resto: ${r} → ${hm[r]})`)
    tmp = Math.floor(tmp / 16)
  }
  return {
    result: hex + ' ₁₆',
    steps: `Decimal ${n} → Hexadecimal\n${steps.join('\n')}\nLer de baixo para cima: ${hex}`,
  }
}

export function hexToDec(value) {
  const v = value.toUpperCase()
  if (!/^[0-9A-F]+$/.test(v)) return null
  const n = parseInt(v, 16)
  const chars = v.split('')
  const lines = chars.map((c, i) => {
    const dv = isNaN(parseInt(c)) ? HEX_MAP[c] : parseInt(c)
    return `${c}(${dv}) × 16^${chars.length - 1 - i} = ${dv * Math.pow(16, chars.length - 1 - i)}`
  })
  return {
    result: n + ' ₁₀',
    steps: `Hexadecimal ${v} → Decimal\n${lines.join('\n')}\nSoma = ${n}`,
  }
}

export function binToOct(value) {
  if (!/^[01]+$/.test(value)) return null
  const n = parseInt(value, 2)
  const oct = n.toString(8)
  const padded = value.padStart(Math.ceil(value.length / 3) * 3, '0')
  const groups = padded.match(/.{1,3}/g) || []
  return {
    result: oct + ' ₈',
    steps: `Binário ${value} → Octal\nAgrupar em trios (direita → esquerda):\n${groups.map(g => `${g} = ${parseInt(g, 2)}`).join(' | ')}\n= ${oct}`,
  }
}

export function binToAll(value) {
  if (!/^[01]+$/.test(value)) return null
  const n = parseInt(value, 2)
  return {
    result: `Dec: ${n}  |  Hex: ${n.toString(16).toUpperCase()}  |  Oct: ${n.toString(8)}`,
    steps: `Binário ${value}:\n→ Decimal: ${n}\n→ Hexadecimal: ${n.toString(16).toUpperCase()}₁₆\n→ Octal: ${n.toString(8)}₈`,
  }
}

export const CONVERTERS = {
  'dec-bin': { label: 'DECIMAL', fn: decToBin },
  'bin-dec': { label: 'BINÁRIO', fn: binToDec },
  'dec-hex': { label: 'DECIMAL', fn: decToHex },
  'hex-dec': { label: 'HEXADECIMAL', fn: hexToDec },
  'bin-oct': { label: 'BINÁRIO', fn: binToOct },
  'all':     { label: 'BINÁRIO', fn: binToAll },
}
