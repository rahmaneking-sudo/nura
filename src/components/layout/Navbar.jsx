import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/authStore'
import { signInWithGoogle, signOutUser } from '@/firebase/auth'

export default function Navbar() {
  const user = useAuthStore(s => s.user)
  const setUser = useAuthStore(s => s.setUser)

  const handleLogin = async () => {
    try {
      const u = await signInWithGoogle()
      setUser(u)
    } catch (e) { console.error(e) }
  }
  const handleLogout = async () => {
    await signOutUser()
    setUser(null)
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
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-emerald-dark hidden md:block">{user.displayName}</span>
              <button onClick={handleLogout} className="text-sm text-nura-muted hover:text-emerald-primary transition-colors">Déconnexion</button>
            </div>
          ) : (
            <button onClick={handleLogin} className="text-sm bg-emerald-primary text-white px-4 py-2 rounded-nura shadow-nura hover:bg-emerald-dark transition-all">Connexion</button>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
