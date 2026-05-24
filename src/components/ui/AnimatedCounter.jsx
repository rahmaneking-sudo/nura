import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useAnimatedCounter(target, duration, inView)
  return <span ref={ref}>{prefix}{count}{suffix}</span>
}
