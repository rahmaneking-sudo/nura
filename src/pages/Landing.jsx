import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ParticlesCanvas from '@/components/landing/ParticlesCanvas'
import TestimonialsCarousel from '@/components/landing/TestimonialsCarousel'
import AdSenseBlock from '@/components/ui/AdSenseBlock'
import { MODULES } from '@/data'

export default function Landing() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 4000)
    return () => clearTimeout(t)
  }, [])

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
        <ParticlesCanvas />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,200,66,0.2)_0%,_transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="relative z-10 text-center"
        >
          <div className="text-gold font-arabic text-4xl md:text-5xl leading-relaxed mb-6 px-4">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <div className="w-16 h-16 bg-emerald-primary text-gold rounded-full flex items-center justify-center font-arabic text-3xl shadow-gold mx-auto mb-4">ن</div>
            <h1 className="text-white font-sans text-2xl tracking-widest uppercase">Nura</h1>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>Nura — Quiz islamique malékite pour couples au Sénégal</title>
        <meta name="description" content="210 questions islamiques selon l'école malékite. Sourcées du Coran, du Muwatta d'Imam Malik et de la Sunna. En français et en wolof. Gratuit." />
      </Helmet>
      
      <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-emerald-dark text-white">
        <ParticlesCanvas />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans text-white leading-tight"
            >
              Découvre ta <span className="text-gold block mt-2">compatibilité islamique</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-emerald-light mb-10 max-w-xl mx-auto md:mx-0"
            >
              Quiz sérieux selon l'école malékite · En français et en wolof. 
              Découvrez si vous partagez les mêmes valeurs spirituelles avant de vous engager.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#modules" className="inline-block bg-gold text-emerald-dark font-semibold px-8 py-4 rounded-nura shadow-gold hover:bg-gold-light transition-all transform hover:scale-105">
                Commencer le quiz
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 hidden md:block"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-[3rem] overflow-hidden shadow-[0_0_40px_rgba(245,200,66,0.3)] animate-float border-4 border-emerald-primary/30">
              <img src="/illustration.png" alt="Couples musulmans" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <AdSenseBlock slot="hero-bottom" />

      <section id="modules" className="py-16 px-4 bg-nura-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-dark mb-4">Les 7 modules d'apprentissage</h2>
            <p className="text-nura-muted max-w-2xl mx-auto">Chaque module est conçu pour tester vos connaissances et votre compatibilité sur un aspect crucial du mariage islamique.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(MODULES).map((mod, i) => (
              <motion.div 
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-nura p-6 shadow-nura border border-nura-border hover:border-emerald-primary transition-colors flex flex-col"
              >
                <h3 className="text-xl font-semibold text-emerald-primary mb-2">{mod.titre}</h3>
                <p className="text-nura-muted text-sm mb-6 flex-1">{mod.description}</p>
                <Link to={`/quiz/${mod.id}`} className="block text-center w-full bg-emerald-light text-emerald-primary font-medium py-2 rounded-nura-sm hover:bg-emerald-primary hover:text-white transition-colors">
                  Démarrer
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-emerald-light/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-emerald-dark mb-12">Ce qu'en disent les couples</h2>
          <TestimonialsCarousel />
        </div>
      </section>

    </motion.div>
  )
}
