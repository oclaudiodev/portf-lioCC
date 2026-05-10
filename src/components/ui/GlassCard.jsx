import React from 'react'
import styles from './GlassCard.module.css'

export default function GlassCard({ children, className = '', style = {}, onClick }) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
