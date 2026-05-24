import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const Landing = lazy(() => import('@/pages/Landing'))
const Quiz = lazy(() => import('@/pages/Quiz'))
const Resultats = lazy(() => import('@/pages/Resultats'))

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Suspense fallback={
            <div className="flex-1 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-emerald-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/quiz/:moduleId" element={<Quiz />} />
                <Route path="/resultats/:moduleId" element={<Resultats />} />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </div>
        <Toaster position="top-center" toastOptions={{ style: { background: '#085041', color: 'white', fontFamily: 'Poppins' } }} />
      </BrowserRouter>
    </HelmetProvider>
  )
}
