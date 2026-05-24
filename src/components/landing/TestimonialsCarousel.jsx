import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { initiales: 'FD', nom: 'Fatou D.', age: 26, ville: 'Dakar', texte: 'Ce quiz m\'a aidée à mieux connaître mes valeurs islamiques avant le mariage. Mashallah !' },
  { initiales: 'MS', nom: 'Mamadou S.', age: 31, ville: 'Thiès', texte: 'Les questions sont vraiment sourcées du Coran et du Muwatta. J\'ai appris énormément.' },
  { initiales: 'AN', nom: 'Aïssatou N.', age: 24, ville: 'Saint-Louis', texte: 'Enfin un outil islamique sérieux pour les couples sénégalais. Je l\'ai partagé à toutes mes amies.' },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[current]

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-nura shadow-nura p-8 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-light flex items-center justify-center text-emerald-primary font-semibold mx-auto mb-4">
            {t.initiales}
          </div>
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="#F5C842" className="text-gold" />)}
          </div>
          <p className="text-nura-text text-base leading-relaxed mb-4 italic">"{t.texte}"</p>
          <p className="text-emerald-primary font-medium text-sm">{t.nom}, {t.age} ans — {t.ville}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-emerald-primary' : 'bg-emerald-light'}`}
          />
        ))}
      </div>
    </div>
  )
}
