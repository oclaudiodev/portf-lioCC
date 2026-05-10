import React from 'react'
import GlassCard from '../ui/GlassCard'
import styles from './Arquitetura.module.css'

export default function Arquitetura() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Arquitetura de Computadores</h2>
      <p style={{ color:'var(--text-secondary)', marginBottom:'0.5rem' }}>Os componentes fundamentais que fazem o computador funcionar</p>
      <div className="section-divider" />

      <div className={styles.arq_box}>
        <div className={styles.bus_lbl}>BARRAMENTO DE DADOS / ENDEREÇO / CONTROLE</div>
        <div className={styles.bus} />
        <div className={styles.row}><div className={`${styles.box} ${styles.cpu}`}>CPU<br/><span>Unidade Central</span></div></div>
        <div className={styles.row} style={{ marginTop:'.4rem' }}>
          {['ULA/Aritmética','UC/Controle','REG/Registradores','CLOCK/Sincronismo'].map(b => {
            const [name,sub] = b.split('/')
            return <div key={name} className={styles.box}>{name}<br/><span>{sub}</span></div>
          })}
        </div>
        <div className={styles.bus} />
        <div className={styles.row}>
          {['RAM/Principal','ROM/Leitura','Cache/L1·L2·L3','HD-SSD/Storage'].map(b => {
            const [name,sub] = b.split('/')
            return <div key={name} className={`${styles.box} ${styles.mem}`}>{name}<br/><span>{sub}</span></div>
          })}
        </div>
        <div className={styles.bus} />
        <div className={styles.row}>
          {['Teclado/Entrada','Mouse/Entrada','Monitor/Saída','Impressora/Saída','Rede/E·S'].map(b => {
            const [name,sub] = b.split('/')
            return <div key={name} className={`${styles.box} ${styles.io}`}>{name}<br/><span>{sub}</span></div>
          })}
        </div>
      </div>

      <div className="grid-3" style={{ marginTop:'2rem' }}>
        {[
          { icon:'🔩', name:'Hardware',       color:'var(--neon-blue)',   desc:'Processador, RAM, HD/SSD, placa-mãe, GPU, PSU, gabinete e periféricos.' },
          { icon:'💾', name:'Software',       color:'var(--neon-purple)', desc:'SO (Windows, Linux, macOS), aplicativos, utilitários e firmware.' },
          { icon:'🌐', name:'Infraestrutura', color:'var(--neon-green)',  desc:'Redes, servidores, datacenters, cloud e sistemas de comunicação.' },
        ].map(c => (
          <GlassCard key={c.name}>
            <div style={{ fontSize:'1.5rem', marginBottom:'.5rem' }}>{c.icon}</div>
            <div style={{ fontWeight:700, color: c.color, marginBottom:'.35rem' }}>{c.name}</div>
            <div style={{ fontSize:'.8rem', color:'var(--text-secondary)', lineHeight:1.55 }}>{c.desc}</div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
