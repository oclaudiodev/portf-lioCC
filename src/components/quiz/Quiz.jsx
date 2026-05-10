import React, { useState } from 'react'
import { QUIZ_QUESTIONS } from '../../data'
import styles from './Quiz.module.css'

export default function Quiz() {
  const [answered, setAnswered] = useState({})
  const [score, setScore] = useState(0)

  const answer = (qi, oi) => {
    if (answered[qi] !== undefined) return
    const correct = QUIZ_QUESTIONS[qi].ans === oi
    setAnswered(prev => ({ ...prev, [qi]: oi }))
    if (correct) setScore(s => s + 1)
  }

  const reset = () => { setAnswered({}); setScore(0) }

  return (
    <div>
      <div className={styles.scorebar}>
        <div className={styles.score_box}>
          <div className={styles.score_label}>PONTUAÇÃO</div>
          <div className={styles.score_num}>
            <span className="grad-text">{score}</span>
            <span style={{color:'var(--text-secondary)'}}>/{QUIZ_QUESTIONS.length}</span>
          </div>
        </div>
        <button className="btn-outline" onClick={reset}>↺ Reiniciar</button>
      </div>

      {QUIZ_QUESTIONS.map((q, qi) => {
        const ans = answered[qi]
        const done = ans !== undefined
        return (
          <div key={qi} className={styles.card}>
            <div className={styles.question}>{qi + 1}. {q.q}</div>
            <div className={styles.opts}>
              {q.opts.map((opt, oi) => {
                let cls = styles.opt
                if (done) {
                  if (oi === q.ans) cls = `${styles.opt} ${styles.correct}`
                  else if (oi === ans) cls = `${styles.opt} ${styles.wrong}`
                  else cls = `${styles.opt} ${styles.disabled}`
                }
                return (
                  <button key={oi} className={cls} onClick={() => answer(qi, oi)}>
                    {opt}
                  </button>
                )
              })}
            </div>
            {done && (
              <div className={`${styles.fb} ${ans === q.ans ? styles.fb_ok : styles.fb_bad}`}>
                {ans === q.ans ? '✓ Correto! ' : '✗ Incorreto. '}{q.exp}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
