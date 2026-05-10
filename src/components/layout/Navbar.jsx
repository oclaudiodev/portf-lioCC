import React, { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'Início',      id: 'home' },
  { label: 'Disciplina',  id: 'disciplina' },
  { label: 'Evolução',    id: 'evolucao' },
  { label: 'Sistemas',    id: 'sistemas' },
  { label: 'Numeração',   id: 'numeracao' },
  { label: 'Booleana',    id: 'booleana' },
  { label: 'Arquitetura', id: 'arquitetura' },
  { label: 'Tendências',  id: 'tendencias' },
  { label: 'Quiz',        id: 'quiz' },
  { label: 'Portfólio',   id: 'portfolio' },
]

export default function Navbar({ active, onNav }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (id) => {
    onNav(id)
    setOpen(false)
  }

  return (
    <nav className={styles.nav} ref={menuRef}>
      <button className={styles.logo} onClick={() => handleNav('home')}>
        ⬡ CC
      </button>
      <p><span>Feito por: </span>José Claudio</p>
      <div className={styles.links}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`${styles.link} ${active === item.id ? styles.active : ''}`}
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        className={`${styles.hamburger} ${open ? styles.ham_open : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

      <div className={`${styles.drawer} ${open ? styles.drawer_open : ''}`}>
        <div className={styles.drawer_header}>
          <span className={styles.drawer_logo}>⬡ Conceitos de Computação</span>
          <button className={styles.close_btn} onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className={styles.drawer_items}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              className={`${styles.drawer_link} ${active === item.id ? styles.drawer_active : ''}`}
              onClick={() => handleNav(item.id)}
              style={{ animationDelay: open ? `${i * 35}ms` : '0ms' }}
            >
              <span className={styles.drawer_dot} />
              {item.label}
              {active === item.id && <span className={styles.drawer_arrow}>→</span>}
            </button>
          ))}
        </div>
        <div className={styles.drawer_footer}>Prof. Fabio Brussolo · 2025</div>
      </div>
    </nav>
  )
}
