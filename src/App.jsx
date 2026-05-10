import React, { useState } from 'react'
import ParticlesBackground from './components/ui/ParticlesBackground'
import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import Disciplina from './components/sections/Disciplina'
import Evolucao from './components/sections/Evolucao'
import Sistemas from './components/sections/Sistemas'
import Numeracao from './components/sections/Numeracao'
import Booleana from './components/sections/Booleana'
import Arquitetura from './components/sections/Arquitetura'
import Tendencias from './components/sections/Tendencias'
import Portfolio from './components/sections/Portfolio'

const SECTIONS = {
  home:         Home,
  disciplina:   Disciplina,
  evolucao:     Evolucao,
  sistemas:     Sistemas,
  numeracao:    Numeracao,
  booleana:     Booleana,
  arquitetura:  Arquitetura,
  tendencias:   Tendencias,
  quiz:         Portfolio,   // Quiz is embedded inside Portfolio
  portfolio:    Portfolio,
}

export default function App() {
  const [active, setActive] = useState('home')

  const handleNav = (id) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ActiveSection = SECTIONS[active] || Home

  return (
    <>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar active={active} onNav={handleNav} />
        <main>
          <ActiveSection onNav={handleNav} />
        </main>
      </div>
    </>
  )
}
