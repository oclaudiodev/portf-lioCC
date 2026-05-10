import React from 'react'
import GlassCard from '../ui/GlassCard'
import Converter from '../converter/Converter'
import styles from './Numeracao.module.css'

const BASES = [
  { base: '10', name: 'Decimal',      color: 'var(--neon-blue)',   border: 'rgba(0,212,255,.4)',   desc: 'Base 10 · Algarismos 0–9 · Uso cotidiano' },
  { base: '2',  name: 'Binário',      color: 'var(--neon-green)',  border: 'rgba(0,255,157,.4)',   desc: 'Base 2 · Bits 0/1 · Linguagem do hardware' },
  { base: '8',  name: 'Octal',        color: 'var(--neon-yellow)', border: 'rgba(255,200,0,.4)',   desc: 'Base 8 · Algarismos 0–7 · Compacto' },
  { base: '16', name: 'Hexadecimal',  color: 'var(--neon-purple)', border: 'rgba(180,77,255,.4)',  desc: 'Base 16 · 0–9 + A–F · Endereços de memória' },
]

export default function Numeracao() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Sistemas de Numeração</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>Decimal, Binário, Octal e Hexadecimal — as linguagens dos computadores</p>
      <div className="section-divider" />

      <div className="grid-4" style={{ marginBottom:'2rem' }}>
        {BASES.map(b => (
          <GlassCard key={b.name} className={styles.base_card} style={{ borderColor: b.border }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:900, color: b.color }}>{b.base}</div>
            <div style={{ fontWeight:700, margin:'.4rem 0' }}>{b.name}</div>
            <div style={{ fontSize:'.75rem', color:'var(--text-secondary)' }}>{b.desc}</div>
          </GlassCard>
        ))}
      </div>

      <Converter />
    </section>
  )
}
