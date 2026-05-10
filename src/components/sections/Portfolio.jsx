import React from 'react'
import GlassCard from '../ui/GlassCard'
import Quiz from '../quiz/Quiz'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Portfólio do Aluno</h2>
      <div className="section-divider" />

      <div className={styles.hero}>
        <div className={styles.hero_title}>CONCEITOS DE COMPUTAÇÃO — 2026</div>
        <div style={{ fontSize:'.88rem', marginTop:'.3rem' }}>Portfólio Acadêmico — Curso Técnico de Informática</div>
        <div style={{ fontSize:'.78rem', marginTop:'.2rem', opacity:.8 }}>Prof. Fabio Brussolo</div>
      </div>

      <div className="grid-3" style={{ marginBottom:'1.75rem' }}>
        {[
          { p:'P1', icon:'📝', color:'var(--neon-blue)',   border:'rgba(0,212,255,.4)',   desc:'Atividades formativas ao longo do semestre — exercícios e avaliações parciais.' },
          { p:'P2', icon:'🎯', color:'var(--neon-purple)', border:'rgba(180,77,255,.4)',  desc:'Pitch tecnológico em grupo — solução inovadora para problema real.' },
          { p:'P3', icon:'🔧', color:'var(--neon-green)',  border:'rgba(0,255,157,.4)',   desc:'Projeto Gambiarra — Instructables, montagem prática e análise de melhorias.' },
        ].map(e => (
          <GlassCard key={e.p} className={styles.eval_card} style={{ borderColor: e.border }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900, color: e.color }}>{e.p}</div>
            <div style={{ fontSize:'2rem', margin:'.5rem 0' }}>{e.icon}</div>
            <div style={{ fontSize:'.8rem', color:'var(--text-secondary)', lineHeight:1.5 }}>{e.desc}</div>
          </GlassCard>
        ))}
      </div>

      <div className={styles.formula}>
        <div style={{ fontSize:'.7rem', color:'var(--text-secondary)', marginBottom:'.4rem', letterSpacing:'.1em', fontFamily:'var(--font-mono)' }}>FÓRMULA DE APROVAÇÃO</div>
        <div style={{ fontSize:'1.1rem' }}>Média = (P1 + P2 + P3) ÷ 3</div>
        <div style={{ fontSize:'.72rem', color:'var(--text-secondary)', marginTop:'.4rem' }}>Mínimo para aprovação: 6,0</div>
      </div>

      {/* Quiz */}
      <h2 className="section-title" style={{ fontSize:'1.3rem', marginTop:'3rem' }}>Exercícios Interativos</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'.5rem' }}>Teste seus conhecimentos — conversões numéricas e sistemas</p>
      <div className="section-divider" />
      <Quiz />

      <div className={styles.footer}>
        <div style={{ color:'var(--neon-blue)', marginBottom:'.3rem' }}>⬡ CONCEITOS DE COMPUTAÇÃO — PORTFÓLIO ACADÊMICO 2026</div>
        Prof. Fabio Brussolo · React + Vite · TailwindCSS · Framer Motion
      </div>
    </section>
  )
}
