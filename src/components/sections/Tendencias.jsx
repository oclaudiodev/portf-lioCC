import React from 'react'
import BarChart from '../charts/BarChart'
import { TRENDS, POPULATION_DATA, LIFE_EXPECTANCY_DATA } from '../../data'
import styles from './Tendencias.module.css'

const T_COLORS = {
  blue:   { bg:'rgba(0,212,255,.08)',   border:'rgba(0,212,255,.25)',   text:'var(--neon-blue)' },
  purple: { bg:'rgba(180,77,255,.08)',  border:'rgba(180,77,255,.25)',  text:'var(--neon-purple)' },
  green:  { bg:'rgba(0,255,157,.08)',   border:'rgba(0,255,157,.25)',   text:'var(--neon-green)' },
  pink:   { bg:'rgba(255,45,120,.08)',  border:'rgba(255,45,120,.25)',  text:'var(--neon-pink)' },
  yellow: { bg:'rgba(255,200,0,.08)',   border:'rgba(255,200,0,.25)',   text:'var(--neon-yellow)' },
}

export default function Tendencias() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Tendências Tecnológicas</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>As 10 tendências que estão moldando o futuro digital — 2025</p>
      <div className="section-divider" />

      <div className="grid-3" style={{ marginBottom:'3rem' }}>
        {TRENDS.map(t => {
          const c = T_COLORS[t.color] || T_COLORS.blue
          return (
            <div key={t.name} className={styles.t_card} style={{ background: c.bg, border:`1px solid ${c.border}` }}>
              <div style={{ fontSize:'1.7rem', marginBottom:'.5rem' }}>{t.icon}</div>
              <div style={{ fontWeight:700, fontSize:'.88rem', color: c.text, marginBottom:'.3rem' }}>{t.name}</div>
              <div style={{ fontSize:'.77rem', color:'var(--text-secondary)', lineHeight:1.45 }}>{t.desc}</div>
            </div>
          )
        })}
      </div>

      <h2 className="section-title" style={{ fontSize:'1.2rem' }}>Crescimento & Impacto</h2>
      <div className="section-divider" />
      <div className="grid-2">
        <BarChart data={POPULATION_DATA} title="POPULAÇÃO MUNDIAL (bilhões)" colorStart="#00d4ff" colorEnd="#b44dff" />
        <BarChart data={LIFE_EXPECTANCY_DATA} title="EXPECTATIVA DE VIDA (anos)" colorStart="#00ff9d" colorEnd="#00d4ff" />
      </div>
    </section>
  )
}
