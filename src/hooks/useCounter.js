import { useState, useEffect, useRef } from 'react'

export function useCounter(target, duration = 1800, startOnMount = true) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  const start = () => {
    if (started.current) return
    started.current = true
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.round(current))
      }
    }, 16)
  }

  useEffect(() => {
    if (startOnMount) {
      const t = setTimeout(start, 400)
      return () => clearTimeout(t)
    }
  }, [])

  return { count, start }
}

export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}
