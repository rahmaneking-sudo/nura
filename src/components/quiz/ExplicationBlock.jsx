import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ExplicationBlock({ question, visible, correct }) {
  const { t, i18n } = useTranslation()
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 rounded-nura border-l-4 border-emerald-primary bg-emerald-light p-4 overflow-hidden"
        >
          <div className={`text-sm font-medium mb-2 ${correct ? 'text-emerald-dark' : 'text-blue-700'}`}>
            {correct ? t('quiz.bonne') : t('quiz.mauvaise')}
          </div>
          <div className="flex items-center gap-2 text-emerald-primary text-xs font-medium mb-2">
            <BookOpen size={14} />
            <span>{question.source}</span>
          </div>
          <p className="text-sm text-nura-text leading-relaxed">
            {i18n.language === 'wo' && question.explicationWo ? question.explicationWo : question.explication}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
