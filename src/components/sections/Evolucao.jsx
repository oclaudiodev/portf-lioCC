import React from 'react'
import { HISTORY, IMPACTS } from '../../data'
import styles from './Evolucao.module.css'

const GEN_COLORS = {
  blue:   { bg: 'rgba(0,212,255,.15)',  text: '#00d4ff', border: 'rgba(0,212,255,.2)' },
  purple: { bg: 'rgba(180,77,255,.15)', text: '#b44dff', border: 'rgba(180,77,255,.2)' },
  green:  { bg: 'rgba(0,255,157,.15)',  text: '#00ff9d', border: 'rgba(0,255,157,.2)' },
  pink:   { bg: 'rgba(255,45,120,.15)', text: '#ff2d78', border: 'rgba(255,45,120,.2)' },
  yellow: { bg: 'rgba(255,200,0,.15)',  text: '#ffc800', border: 'rgba(255,200,0,.2)' },
  orange: { bg: 'rgba(255,100,0,.15)',  text: '#ff6400', border: 'rgba(255,100,0,.2)' },
}

const IMPACT_COLORS = { blue:'var(--neon-blue)', purple:'var(--neon-purple)', green:'var(--neon-green)', pink:'var(--neon-pink)' }

export default function Evolucao() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Evolução da Computação</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>Da pré-história ao futuro — a jornada completa do processamento da informação</p>
      <div className="section-divider" />

      <div className={styles.hist_grid}>
        {HISTORY.map((h, i) => {
          const c = GEN_COLORS[h.color]
          return (
            <div key={i} className={styles.h_card} style={{ borderColor: c.border }}>
              <span className={styles.gen_tag} style={{ background: c.bg, color: c.text }}>{h.gen}</span>
              <div className={styles.era}>{h.era}</div>
              <div className={styles.name}>{h.name}</div>
              <div className={styles.desc}>{h.desc}</div>
            </div>
          )
        })}
      </div>

      <h2 className="section-title" style={{ fontSize: '1.3rem', marginTop: '3rem' }}>Impactos Tecnológicos</h2>
      <div className="section-divider" />
      <div className="grid-3">
        {IMPACTS.map(imp => (
          <div key={imp.name} className={styles.impact_card} style={{ borderColor: `rgba(${imp.color === 'blue' ? '0,212,255' : imp.color === 'purple' ? '180,77,255' : imp.color === 'green' ? '0,255,157' : '255,45,120'},.3)` }}>
            <div className={styles.imp_icon}>{imp.icon}</div>
            <div className={styles.imp_name} style={{ color: IMPACT_COLORS[imp.color] || 'var(--neon-blue)' }}>{imp.name}</div>
            <div className={styles.imp_desc}>{imp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
