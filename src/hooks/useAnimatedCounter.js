import { useEffect, useState } from 'react'

export const useAnimatedCounter = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, shouldStart])
  return count
}
