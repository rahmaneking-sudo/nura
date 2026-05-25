import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { i18n } = useTranslation()
  
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'wo' : 'fr')
  }

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-nura-border px-4 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-primary text-gold rounded-full flex items-center justify-center font-arabic text-xl shadow-gold">ن</div>
          <span className="font-sans font-semibold text-emerald-dark tracking-wide">Nura</span>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang} 
            className="text-xs font-bold text-emerald-primary bg-emerald-light px-3 py-1 rounded-full uppercase hover:bg-emerald-primary hover:text-white transition-colors"
          >
            {i18n.language === 'fr' ? 'WO' : 'FR'}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
