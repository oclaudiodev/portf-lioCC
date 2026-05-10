import React, { useState } from 'react'
import GlassCard from '../ui/GlassCard'
import { PROFESSOR, CRONOGRAMA } from '../../data'
import styles from './Disciplina.module.css'

const COLOR_MAP = {
  blue:   { border: 'rgba(0,212,255,.35)',  bg: 'rgba(0,212,255,.07)',  text: '#00d4ff' },
  purple: { border: 'rgba(180,77,255,.35)', bg: 'rgba(180,77,255,.07)', text: '#b44dff' },
  green:  { border: 'rgba(0,255,157,.35)',  bg: 'rgba(0,255,157,.07)',  text: '#00ff9d' },
  pink:   { border: 'rgba(255,45,120,.35)', bg: 'rgba(255,45,120,.07)', text: '#ff2d78' },
  yellow: { border: 'rgba(255,200,0,.35)',  bg: 'rgba(255,200,0,.07)',  text: '#ffc800' },
}

function ProfAvatar() {
  const [imgError, setImgError] = useState(false)

  // Se a imagem carregar com sucesso, mostra ela
  // Se falhar (arquivo não existe), mostra o fallback emoji
  if (!imgError) {
    return (
      <div className={styles.avatar}>
        <img
          src="/fabioBrussolo.png"
          alt="Prof. Fabio Brussolo"
          className={styles.avatar_img}
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  // Fallback: avatar com iniciais
  return (
    <div className={`${styles.avatar} ${styles.avatar_fallback}`}>
      <span>FB</span>
    </div>
  )
}

export default function Disciplina() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Sobre a Disciplina</h2>
      <div className="section-divider" />

      {/* Professor */}
      <GlassCard className={styles.prof_card}>
        <div className={styles.prof_inner}>

          {/* Avatar com foto */}
          <ProfAvatar />

          <div style={{ flex: 1 }}>
            <div className={styles.prof_name}>{PROFESSOR.name}</div>
            <div className={styles.prof_title}>{PROFESSOR.title}</div>
            <div className={styles.badges}>
              {PROFESSOR.areas.map(a => (
                <span key={a} className="badge badge-blue">{a}</span>
              ))}
              {PROFESSOR.techs.map(t => (
                <span key={t} className="badge badge-green">{t}</span>
              ))}
            </div>
            <p className={styles.bio}>{PROFESSOR.bio}</p>
          </div>

        </div>
      </GlassCard>

      {/* Objetivos e Metodologia */}
      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <GlassCard>
          <div className={styles.card_heading} style={{ color: 'var(--neon-blue)' }}>🎯 OBJETIVOS</div>
          {[
            'Compreender a evolução histórica da computação',
            'Analisar impactos tecnológicos na sociedade',
            'Dominar o funcionamento interno do computador',
            'Dominar sistemas de numeração e álgebra booleana',
            'Conhecer aplicações computacionais modernas',
          ].map(o => (
            <div key={o} className={styles.list_item}>
              <span style={{ color: 'var(--neon-blue)', flexShrink: 0 }}>▸</span>
              {o}
            </div>
          ))}
        </GlassCard>

        <GlassCard>
          <div className={styles.card_heading} style={{ color: 'var(--neon-purple)' }}>📚 METODOLOGIA</div>
          {[
            'Modelo presencial com sala invertida',
            'Aprendizagem baseada em problemas',
            'Pitch tecnológico em grupo',
            'Plataforma Blackboard para material complementar',
            'Projeto Gambiarra (Instructables)',
          ].map(m => (
            <div key={m} className={styles.list_item}>
              <span style={{ color: 'var(--neon-purple)', flexShrink: 0 }}>▸</span>
              {m}
            </div>
          ))}
        </GlassCard>
      </div>

      {/* Cronograma */}
      <h2 className="section-title" style={{ fontSize: '1.3rem' }}>Cronograma 2026</h2>
      <div className="section-divider" />
      <div className={styles.cron_grid}>
        {CRONOGRAMA.map(mes => {
          const c = COLOR_MAP[mes.cor]
          return (
            <div
              key={mes.mes}
              className={styles.mes_card}
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <div className={styles.mes_name} style={{ color: c.text }}>{mes.mes}</div>
              {mes.topics.map(t => (
                <div key={t} className={styles.topic}>
                  <span className={styles.dot} style={{ background: c.text }} />
                  {t}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
