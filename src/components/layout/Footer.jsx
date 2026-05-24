import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-emerald-dark text-emerald-light py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-arabic text-2xl text-gold mb-1">نورا</h3>
          <p className="text-sm opacity-80">Quiz islamique malékite pour couples au Sénégal</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
          <a href="#" className="hover:text-gold transition-colors">À propos</a>
          <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-emerald-primary text-center text-xs opacity-60">
        © 2026 Nura — نورا. Tous droits réservés.
      </div>
    </footer>
  )
}
