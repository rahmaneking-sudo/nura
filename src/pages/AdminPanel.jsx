import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Lock, Unlock } from 'lucide-react'

export default function AdminPanel() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Auto check if already auth in session
  useEffect(() => {
    if (sessionStorage.getItem('nura_admin') === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('nura_admin', 'true')
    } else {
      alert("Mot de passe incorrect")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('nura_admin')
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-nura-bg flex items-center justify-center px-4">
        <Helmet><title>Admin — Nura</title></Helmet>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-nura shadow-nura max-w-sm w-full text-center border border-nura-border"
        >
          <div className="w-12 h-12 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-primary">
            <Lock size={24} />
          </div>
          <h1 className="text-xl font-semibold text-emerald-dark mb-6">Accès Administrateur</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="Mot de passe secret" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 border border-nura-border rounded-nura-sm focus:outline-none focus:border-emerald-primary"
            />
            <button type="submit" className="bg-emerald-primary text-white font-medium py-3 rounded-nura-sm hover:bg-emerald-dark transition-colors">
              Déverrouiller
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-nura-bg px-4 py-8">
      <Helmet><title>Dashboard Admin — Nura</title></Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-emerald-dark">Dashboard Admin</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 transition-colors">
            <Unlock size={16} /> Verrouiller
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-nura shadow-nura border-t-4 border-emerald-primary">
          <p className="text-nura-text mb-4">Bienvenue dans l'espace d'administration de Nura.</p>
          <p className="text-nura-muted text-sm italic">
            Ici, tu pourras brancher la base de données Firestore pour visualiser les statistiques générales des quiz complétés par les utilisateurs (lorsque la base sera activée).
          </p>
        </div>
      </div>
    </div>
  )
}
