import React, { useState } from 'react'
import { LOGIC_GATES } from '../../data'
import styles from './GateSimulator.module.css'

export default function GateSimulator() {
  const [gateIdx, setGateIdx] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const gate = LOGIC_GATES[gateIdx]
  const output = gate.single ? gate.calc(a) : gate.calc(a, b)

  return (
    <div className={styles.sim}>
      <div className={styles.heading}>⚡ SIMULADOR DE PORTAS LÓGICAS</div>

      <div className={styles.selector}>
        {LOGIC_GATES.map((g, i) => (
          <button
            key={g.name}
            className={`${styles.sel_btn} ${gateIdx === i ? styles.active : ''}`}
            onClick={() => { setGateIdx(i); setA(0); setB(0) }}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div className={styles.display}>
        <div className={styles.switch_wrap}>
          <div className={styles.sw_label}>A = <strong>{a}</strong></div>
          <div
            className={`${styles.sw} ${a ? styles.on : ''}`}
            onClick={() => setA(a ? 0 : 1)}
          >
            <div className={styles.knob} />
          </div>
        </div>

        {!gate.single && (
          <div className={styles.switch_wrap}>
            <div className={styles.sw_label}>B = <strong>{b}</strong></div>
            <div
              className={`${styles.sw} ${b ? styles.on : ''}`}
              onClick={() => setB(b ? 0 : 1)}
            >
              <div className={styles.knob} />
            </div>
          </div>
        )}

        <div className={styles.gate_sym}>{gate.name}</div>

        <div className={styles.output_wrap}>
          <div className={`${styles.led} ${output ? styles.led_on : styles.led_off}`} />
          <div className={styles.out_label}>S = <strong>{output}</strong></div>
        </div>
      </div>
    </div>
  )
}
