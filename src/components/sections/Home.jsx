import React, { useEffect, useState } from 'react'
import GlassCard from '../ui/GlassCard'
import { STATS, SUBJECTS } from '../../data'
import styles from './Home.module.css'

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.round(current))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return <>{count.toLocaleString()}</>
}

export default function Home({ onNav }) {
  return (
    <section className={styles.section}>
      <div className={styles.badge}>● CURSO TÉCNICO DE INFORMÁTICA — 2026</div>

      <h1 className={styles.title}>
        <span className="grad-text">Conceitos de<br />Computação</span>
        <span className={styles.subtitle}>Prof. Fabio Brussolo</span>
      </h1>

      <p className={styles.desc}>
        Da evolução histórica à computação quântica — fundamentos que moldam o mundo digital.
      </p>

      <div className={styles.btns}>
        <button className="btn-primary" onClick={() => onNav('evolucao')}>Explorar Conteúdo</button>
        <button className="btn-outline" onClick={() => onNav('quiz')}>Exercícios Interativos</button>
      </div>

      <div className={styles.stats}>
        {STATS.map(s => (
          <GlassCard key={s.id} className={styles.stat_card}>
            <div className={styles.stat_num}><AnimatedCounter target={s.target} /></div>
            <div className={styles.stat_label}>{s.label}</div>
          </GlassCard>
        ))}
      </div>

      <div className={styles.subj_grid}>
        {SUBJECTS.map(s => (
          <div key={s.section} className={styles.subj_card} onClick={() => onNav(s.section)}>
            <div className={styles.subj_icon}>{s.icon}</div>
            <div className={styles.subj_name}>{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
