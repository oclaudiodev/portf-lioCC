import React from 'react'
import GlassCard from '../ui/GlassCard'
import GateSimulator from '../gates/GateSimulator'
import { LOGIC_GATES } from '../../data'
import styles from './Booleana.module.css'

const GATE_COLORS = {
  blue:   { border: 'rgba(0,212,255,.3)',  bg: 'rgba(0,212,255,.07)',  text: '#00d4ff' },
  purple: { border: 'rgba(180,77,255,.3)', bg: 'rgba(180,77,255,.07)', text: '#b44dff' },
  green:  { border: 'rgba(0,255,157,.3)',  bg: 'rgba(0,255,157,.07)',  text: '#00ff9d' },
  pink:   { border: 'rgba(255,45,120,.3)', bg: 'rgba(255,45,120,.07)', text: '#ff2d78' },
  yellow: { border: 'rgba(255,200,0,.3)',  bg: 'rgba(255,200,0,.07)',  text: '#ffc800' },
}

export default function Booleana() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Álgebra Booleana</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>George Boole (1815–1864) — a matemática que governa os circuitos digitais</p>
      <div className="section-divider" />

      <GlassCard style={{ marginBottom:'2rem' }}>
        <div className="grid-3">
          {[
            { icon:'📐', name:'Álgebra Booleana', color:'var(--neon-blue)',   desc:'Sistema com dois valores: 0 (falso) e 1 (verdadeiro). George Boole, 1854.' },
            { icon:'⚡', name:'Circuitos Digitais', color:'var(--neon-purple)', desc:'Implementa operações booleanas em hardware eletrônico.' },
            { icon:'💡', name:'Sistema Binário',   color:'var(--neon-green)',  desc:'Ligado/desligado · Verdadeiro/falso · 5V/0V' },
          ].map(b => (
            <div key={b.name} style={{ textAlign:'center' }}>
              <div style={{ fontSize:'1.5rem', marginBottom:'.4rem' }}>{b.icon}</div>
              <div style={{ fontWeight:700, color: b.color, marginBottom:'.25rem' }}>{b.name}</div>
              <div style={{ fontSize:'.78rem', color:'var(--text-secondary)' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <h2 className="section-title" style={{ fontSize:'1.2rem' }}>Portas Lógicas</h2>
      <div className="section-divider" />

      <div className={styles.gates_grid}>
        {LOGIC_GATES.map(gate => {
          const c = GATE_COLORS[gate.color] || GATE_COLORS.blue
          return (
            <div key={gate.name} className={styles.gate_card} style={{ background: c.bg, border:`1px solid ${c.border}` }}>
              <div className={styles.gate_header}>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:900, color: c.text }}>{gate.name}</span>
                <span style={{ fontSize:'.75rem', color: c.text, opacity:.8 }}>{gate.symbol}</span>
              </div>
              <div style={{ fontSize:'.77rem', color:'var(--text-secondary)', marginBottom:'.75rem', lineHeight:1.45 }}>{gate.desc}</div>
              <table className={styles.tt}>
                <thead>
                  <tr>{gate.headers.map(h => <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {gate.table.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ color: cell === '1' ? 'var(--neon-green)' : 'var(--neon-pink)', fontWeight:700 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>

      <GateSimulator />
    </section>
  )
}
