import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Lock, Unlock, Eye, EyeOff, Users, Activity, LayoutTemplate } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function AdminPanel() {
  const [email, setEmail] = useState('rahmaneking@gmail.com')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Statistiques mockées en attendant la BDD
  const [stats, setStats] = useState({
    totalVisits: 0,
    activeUsers: 0
  })

  useEffect(() => {
    // Vérifier la session actuelle
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session)
      setLoading(false)
    })

    // Écouter les changements d'auth
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Mode demo sans vraie BDD ou vraie connexion
    if (!import.meta.env.VITE_SUPABASE_URL) {
      alert("La base de données Supabase n'est pas encore connectée. Contactez le développeur pour finaliser la création du projet.")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError("Identifiants incorrects ou compte inexistant.")
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setPassword('')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-nura-bg flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-nura-bg flex items-center justify-center px-4 relative overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-emerald-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-gold-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
        
        <Helmet><title>Admin — Nura</title></Helmet>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-nura max-w-sm w-full text-center border border-white z-10 relative"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-primary to-emerald-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold shadow-lg shadow-emerald-primary/30 transform -rotate-6">
            <Lock size={32} />
          </div>
          
          <h1 className="text-2xl font-bold text-emerald-dark mb-2 font-sans">Accès Sécurisé</h1>
          <p className="text-sm text-nura-muted mb-8">Connectez-vous à l'interface d'administration de Nura.</p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-5 text-left">
            <div>
              <label className="text-xs font-semibold text-nura-muted uppercase tracking-wider mb-2 block ml-1">Email Administrateur</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border border-nura-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-primary focus:border-transparent transition-all"
                required
              />
            </div>
            
            <div>
              <label className="text-xs font-semibold text-nura-muted uppercase tracking-wider mb-2 block ml-1">Mot de passe</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 bg-white/50 border border-nura-border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-nura-muted hover:text-emerald-primary transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-lg">{error}</p>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="mt-2 bg-gradient-to-r from-emerald-primary to-emerald-dark text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-primary/20 hover:shadow-emerald-primary/40 hover:-translate-y-1 transition-all active:translate-y-0 disabled:opacity-70 flex justify-center"
            >
              {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> : 'Se connecter'}
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-nura-bg px-4 py-8 pb-24">
      <Helmet><title>Dashboard Admin — Nura</title></Helmet>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-nura-border">
          <div>
            <h1 className="text-2xl font-bold text-emerald-dark">Dashboard NURA</h1>
            <p className="text-sm text-nura-muted">Connecté en tant que {email}</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-lg transition-all font-medium border border-red-200 hover:border-transparent">
            <Unlock size={16} /> Déconnexion
          </button>
        </div>
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-nura-border flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-light text-emerald-primary rounded-xl flex items-center justify-center">
              <Users size={28} />
            </div>
            <div>
              <p className="text-sm font-semibold text-nura-muted uppercase tracking-wider">Visites Totales</p>
              <h2 className="text-3xl font-bold text-emerald-dark">{stats.totalVisits}</h2>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-emerald-primary p-6 rounded-2xl shadow-nura flex items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-10 -translate-y-10" />
            <div className="w-14 h-14 bg-white/20 text-white rounded-xl flex items-center justify-center backdrop-blur-sm relative z-10">
              <Activity size={28} />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-emerald-light uppercase tracking-wider">Visiteurs en Direct</p>
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                {stats.activeUsers}
                <span className="flex w-3 h-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* AD MANAGEMENT */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-nura-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gold-light text-gold-dark rounded-lg flex items-center justify-center">
              <LayoutTemplate size={24} />
            </div>
            <h2 className="text-xl font-bold text-emerald-dark">Gestion des Publicités (AdSense)</h2>
          </div>
          
          <p className="text-sm text-nura-muted mb-6">
            Contrôlez où les publicités s'affichent sur le site pour ne pas gêner la lecture des utilisateurs.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <h3 className="font-semibold text-emerald-dark">Publicité Page d'Accueil</h3>
                <p className="text-xs text-nura-muted">Sous le bouton "Commencer".</p>
              </div>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-not-allowed opacity-50">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <h3 className="font-semibold text-emerald-dark">Publicité Quiz</h3>
                <p className="text-xs text-nura-muted">Entre chaque question.</p>
              </div>
              <div className="w-12 h-6 bg-emerald-primary rounded-full relative cursor-not-allowed opacity-50">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 text-yellow-800 rounded-xl text-sm border border-yellow-200">
            <strong>Attention :</strong> La base de données Supabase n'étant pas encore connectée, ces interrupteurs sont pour l'instant désactivés.
          </div>
        </motion.div>

      </div>
    </div>
  )
}
