import React, { useState } from 'react'
import { CONVERTERS } from '../../utils/converter'
import styles from './Converter.module.css'

const MODES = [
  { key: 'dec-bin', label: 'Dec → Bin' },
  { key: 'bin-dec', label: 'Bin → Dec' },
  { key: 'dec-hex', label: 'Dec → Hex' },
  { key: 'hex-dec', label: 'Hex → Dec' },
  { key: 'bin-oct', label: 'Bin → Oct' },
  { key: 'all',     label: 'Completo'  },
]

const EXAMPLES = [
  { value: '11001110', mode: 'bin-dec', label: <><span style={{color:'#00ff9d'}}>11001110</span><span style={{color:'#94a3b8'}}>₂ = </span><span style={{color:'#00d4ff'}}>206</span><span style={{color:'#94a3b8'}}>₁₀</span></> },
  { value: '03CF',     mode: 'hex-dec', label: <><span style={{color:'#b44dff'}}>03CF</span><span style={{color:'#94a3b8'}}>₁₆ = </span><span style={{color:'#00d4ff'}}>975</span><span style={{color:'#94a3b8'}}>₁₀</span></> },
  { value: 'AB1',      mode: 'hex-dec', label: <><span style={{color:'#b44dff'}}>AB1</span><span style={{color:'#94a3b8'}}>₁₆ = </span><span style={{color:'#00d4ff'}}>2737</span><span style={{color:'#94a3b8'}}>₁₀</span></> },
  { value: '1011100',  mode: 'all',     label: <><span style={{color:'#00ff9d'}}>1011100</span><span style={{color:'#94a3b8'}}>₂ = </span><span style={{color:'#00d4ff'}}>92₁₀</span><span style={{color:'#94a3b8'}}> = </span><span style={{color:'#b44dff'}}>5C₁₆</span><span style={{color:'#94a3b8'}}> = </span><span style={{color:'#ffc800'}}>134₈</span></> },
]

export default function Converter() {
  const [mode, setMode] = useState('dec-bin')
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  const convert = (val, m) => {
    const v = (val || input).trim().toUpperCase()
    if (!v) { setResult(null); return }
    const conv = CONVERTERS[m || mode]
    const res = conv.fn(v)
    setResult(res)
  }

  const handleMode = (m) => {
    setMode(m)
    setInput('')
    setResult(null)
  }

  const loadExample = (ex) => {
    setMode(ex.mode)
    setInput(ex.value)
    convert(ex.value, ex.mode)
  }

  return (
    <div className={styles.box}>
      <div className={styles.heading}>⚡ CONVERSOR INTERATIVO</div>

      <div className={styles.tabs}>
        {MODES.map(m => (
          <button
            key={m.key}
            className={`${styles.tab} ${mode === m.key ? styles.active : ''}`}
            onClick={() => handleMode(m.key)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className={styles.input_wrap}>
        <label className={styles.label}>{CONVERTERS[mode].label}</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o número..."
          value={input}
          onChange={e => { setInput(e.target.value); convert(e.target.value) }}
        />
      </div>

      {result && (
        <div className={styles.result}>
          <div className={styles.result_main}>{result.result}</div>
          <pre className={styles.result_steps}>{result.steps}</pre>
        </div>
      )}

      <div className={styles.examples_wrap}>
        <div className={styles.examples_label}>EXEMPLOS CLÁSSICOS (clique para calcular):</div>
        <div className={styles.examples_grid}>
          {EXAMPLES.map((ex, i) => (
            <div key={i} className={styles.ex_card} onClick={() => loadExample(ex)}>
              {ex.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
