import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Share2, RotateCcw, Home } from 'lucide-react'
import { useQuizStore } from '@/store/quizStore'
import { MODULES } from '@/data'
import { getConnaissanceLevel, getCompatibiliteProfile } from '@/utils/score'
import { shareResults } from '@/utils/share'
import AdSenseBlock from '@/components/ui/AdSenseBlock'

export default function Resultats() {
  const { moduleId } = useParams()
  const module = MODULES[moduleId]
  const { scoreConnaissance, scoreCompatibilite, estTermine, reset } = useQuizStore()

  if (!module || !estTermine) {
    return <Navigate to="/" replace />
  }

  const connaissanceLevel = getConnaissanceLevel(scoreConnaissance, 5)
  const compatProfile = getCompatibiliteProfile(scoreCompatibilite, 3)

  const handleShare = () => {
    shareResults({ nom: 'Ami(e)', score: scoreConnaissance, module: module.titre })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-nura-bg px-4 py-12"
    >
      <Helmet>
        <title>Résultats : {module.titre} — Nura</title>
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-nura shadow-nura p-8 text-center border-t-4 border-emerald-primary mb-8">
          <h1 className="text-3xl font-bold text-emerald-dark mb-2">Alhamdulillah !</h1>
          <p className="text-nura-muted mb-8">Vous avez terminé le module "{module.titre}"</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-light/50 p-6 rounded-nura">
              <div className="text-sm font-medium text-emerald-primary uppercase tracking-wider mb-2">Connaissance</div>
              <div className="text-4xl font-bold text-emerald-dark mb-2">{scoreConnaissance} <span className="text-xl text-nura-muted font-normal">pts</span></div>
              <div className={`font-medium flex items-center justify-center gap-2 ${connaissanceLevel.color}`}>
                <span>{connaissanceLevel.emoji}</span> {connaissanceLevel.label}
              </div>
            </div>
            
            <div className="bg-gold-light/30 p-6 rounded-nura border border-gold-light">
              <div className="text-sm font-medium text-gold-dark uppercase tracking-wider mb-2">Profil Compatibilité</div>
              <div className="text-4xl font-bold text-gold-dark mb-2">{scoreCompatibilite} <span className="text-xl text-nura-muted font-normal">pts</span></div>
              <div className="font-medium text-emerald-dark">
                {compatProfile.label}
              </div>
              <p className="text-xs text-nura-muted mt-2">{compatProfile.description}</p>
            </div>
          </div>

          <AdSenseBlock slot="result-middle" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button 
              onClick={handleShare}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold text-emerald-dark font-medium px-6 py-3 rounded-nura shadow-gold hover:bg-gold-light transition-all"
            >
              <Share2 size={20} /> Partager mon score
            </button>
            <Link 
              to={`/quiz/${moduleId}`}
              onClick={reset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-light text-emerald-primary font-medium px-6 py-3 rounded-nura hover:bg-emerald-surface transition-all"
            >
              <RotateCcw size={20} /> Refaire le quiz
            </Link>
            <Link 
              to="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-nura-border text-nura-muted font-medium px-6 py-3 rounded-nura hover:bg-nura-border transition-all"
            >
              <Home size={20} /> Accueil
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
