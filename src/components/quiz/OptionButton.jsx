import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

export default function OptionButton({ option, onClick, state, disabled }) {
  const variants = {
    idle: { scale: 1 },
    correct: { scale: 1, backgroundColor: '#E1F5EE', borderColor: '#0F6E56' },
    wrong: { scale: [1, 0.98, 1.02, 0.98, 1], backgroundColor: '#FCEBEB', borderColor: '#E24B4A' },
  }

  return (
    <motion.button
      variants={variants}
      animate={state}
      whileHover={!disabled ? { scale: 1.01, borderColor: '#0F6E56' } : {}}
      whileTap={!disabled ? { scale: 0.99 } : {}}
      onClick={() => !disabled && onClick(option)}
      disabled={disabled}
      className={`
        w-full text-left px-5 py-4 rounded-nura border-1.5 bg-white
        font-sans text-base transition-colors duration-200
        flex items-center justify-between gap-3
        ${state === 'correct' ? 'border-emerald-primary text-emerald-dark font-medium' : ''}
        ${state === 'wrong' ? 'border-red-400 text-red-800' : ''}
        ${state === 'idle' && !disabled ? 'border-nura-border hover:border-emerald-primary cursor-pointer' : ''}
        ${disabled && state === 'idle' ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <span>{option.texte}</span>
      {state === 'correct' && <CheckCircle className="shrink-0 text-emerald-primary" size={20} />}
      {state === 'wrong' && <XCircle className="shrink-0 text-red-500" size={20} />}
    </motion.button>
  )
}
