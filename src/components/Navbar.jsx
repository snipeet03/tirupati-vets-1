import { useState, useEffect } from 'react'
import { HeartPulse, Sun, Moon, Menu, X } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/emergency', label: 'Emergency' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 bg-white/80 dark:bg-bg-dark/80 glass-nav border-b border-slate-200/50 dark:border-white/5 ${scrolled ? 'shadow-lg shadow-slate-200/30 dark:shadow-black/30' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-primary dark:text-white leading-none block">Tirupati Vets</span>
            <span className="text-[10px] text-text-muted dark:text-slate-400 tracking-wider uppercase">24×7 Pet Care</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary dark:text-blue-400 font-semibold' 
                    : 'text-text-muted dark:text-slate-400 hover:text-primary dark:hover:text-blue-400'
                }`
              }>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onToggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="w-4 h-4 text-slate-400" /> : <Moon className="w-4 h-4 text-slate-500" />}
          </button>
          <Link to="/contact"
            className="hidden md:inline-flex btn-shimmer bg-primary hover:bg-primary-light text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors">
            Book Appointment
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200/50 dark:border-white/5 bg-white dark:bg-bg-dark">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary/10 text-primary dark:bg-blue-500/10 dark:text-blue-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-white/5 text-text-main dark:text-slate-200'
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}
              className="block text-center bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-xl mt-2">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
