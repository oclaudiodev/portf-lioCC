import React from 'react'
import GlassCard from '../ui/GlassCard'
import { SI_TYPES } from '../../data'
import styles from './Sistemas.module.css'

const SI_COLOR = { blue:'var(--neon-blue)', purple:'var(--neon-purple)', green:'var(--neon-green)', pink:'var(--neon-pink)', yellow:'var(--neon-yellow)' }

export default function Sistemas() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Sistemas de Informação</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>Da coleta de dados à inteligência estratégica</p>
      <div className="section-divider" />

      {/* Dado → Informação → Conhecimento */}
      <GlassCard style={{ marginBottom:'1.75rem' }}>
        <div className={styles.flow_title}>DADO → INFORMAÇÃO → CONHECIMENTO</div>
        <div className={styles.flow}>
          <div className={styles.flow_box}>
            <div className={styles.flow_lbl}>DADOS</div>
            <div style={{ fontFamily:'var(--font-mono)', color:'var(--neon-blue)', fontSize:'.82rem', lineHeight:1.8 }}>AZUL<br/>CASA<br/>GRANDE</div>
            <div className={styles.flow_sub}>Sem contexto</div>
          </div>
          <div className={styles.flow_arr}>→</div>
          <div className={styles.flow_box} style={{ borderColor:'var(--neon-blue)' }}>
            <div className={styles.flow_lbl}>INFORMAÇÃO</div>
            <div style={{ fontSize:'.82rem' }}>"A casa azul é grande"</div>
            <div className={styles.flow_sub}>Com contexto</div>
          </div>
          <div className={styles.flow_arr}>→</div>
          <div className={styles.flow_box} style={{ borderColor:'rgba(0,255,157,.4)' }}>
            <div className={styles.flow_lbl} style={{ color:'var(--neon-green)' }}>CONHECIMENTO</div>
            <div style={{ fontSize:'.78rem' }}>Interpretação + valor estratégico</div>
            <div className={styles.flow_sub}>Base para decisões</div>
          </div>
        </div>
      </GlassCard>

      {/* Lava-Rápido */}
      <GlassCard style={{ marginBottom:'1.75rem' }}>
        <div className={styles.flow_title} style={{ color:'var(--neon-purple)' }}>MODELO DE SISTEMA — LAVA-RÁPIDO</div>
        <div className={styles.lava_grid}>
          {[
            { icon:'📥', label:'ENTRADA', color:'rgba(0,212,255,.3)', text:'var(--neon-blue)', desc:'Água · Energia · Carro sujo' },
            { icon:'⚙️', label:'PROCESSAMENTO', color:'rgba(180,77,255,.3)', text:'var(--neon-purple)', desc:'Lavagem · Espuma · Secagem' },
            { icon:'📤', label:'SAÍDA', color:'rgba(0,255,157,.3)', text:'var(--neon-green)', desc:'Carro limpo' },
            { icon:'🔄', label:'FEEDBACK', color:'rgba(255,200,0,.3)', text:'var(--neon-yellow)', desc:'Verificação da limpeza' },
          ].map(b => (
            <div key={b.label} className={styles.lava_box} style={{ borderColor: b.color }}>
              <div style={{ fontSize:'1.3rem', marginBottom:'.3rem' }}>{b.icon}</div>
              <div style={{ fontSize:'.62rem', color: b.text, fontWeight:700, letterSpacing:'.08em', marginBottom:'.3rem' }}>{b.label}</div>
              <div style={{ fontSize:'.75rem', color:'var(--text-secondary)' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Tipos de SI */}
      <h2 className="section-title" style={{ fontSize:'1.2rem' }}>Tipos de Sistemas de Informação</h2>
      <div className="section-divider" />
      <div className="grid-3">
        {SI_TYPES.map(si => (
          <GlassCard key={si.sigla}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'.9rem', fontWeight:900, color: SI_COLOR[si.color], marginBottom:'.3rem' }}>{si.sigla}</div>
            <div style={{ fontSize:'.8rem', fontWeight:600, marginBottom:'.25rem' }}>{si.name}</div>
            <div style={{ fontSize:'.77rem', color:'var(--text-secondary)', lineHeight:1.5 }}>{si.desc}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
