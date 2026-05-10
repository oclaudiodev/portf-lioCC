import React from 'react'
import styles from './BarChart.module.css'

export default function BarChart({ data, title, colorStart, colorEnd }) {
  const max = Math.max(...data.map(d => d.v))
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.chart}>
        {data.map((d, i) => {
          const pct = (d.v / max) * 100
          return (
            <div key={i} className={styles.bar_wrap}>
              <span className={styles.val}>{d.v}</span>
              <div
                className={styles.bar}
                style={{
                  height: `${pct}%`,
                  background: `linear-gradient(to top, ${colorStart}, ${colorEnd})`,
                }}
              />
              <span className={styles.lbl}>{d.l}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
