import { useCallback, useRef } from 'react'

export const useVoiceSpeech = () => {
  const utteranceRef = useRef(null)
  const speak = useCallback((text, lang = 'fr-FR') => {
    if (!window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    u.rate = 0.85
    u.pitch = 1
    utteranceRef.current = u
    window.speechSynthesis.speak(u)
  }, [])
  const stop = useCallback(() => window.speechSynthesis?.cancel(), [])
  return { speak, stop }
}
