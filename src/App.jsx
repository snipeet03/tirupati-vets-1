import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MessageCircle, ChevronUp } from 'lucide-react'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import EmergencyPage from './pages/EmergencyPage'
import FacilitiesPage from './pages/FacilitiesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [showTop, setShowTop] = useState(false)

  // Triggered on location changes automatically via inside useScrollAnimation
  useScrollAnimation()

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') html.classList.add('dark')
    else html.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.add('theme-transition')
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    setTimeout(() => html.classList.remove('theme-transition'), 400)
  }

  return (
    <div className="font-body bg-bg-light dark:bg-bg-dark text-text-main dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col justify-between">
      <ScrollToTop />
      <div>
        <TopBar />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>

      <Footer />

      {/* WhatsApp Float */}
      <a href="https://wa.me/919717346793" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 left-6 z-40 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${showTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top">
        <ChevronUp className="w-5 h-5 text-text-main dark:text-slate-300" />
      </button>
    </div>
  )
}
