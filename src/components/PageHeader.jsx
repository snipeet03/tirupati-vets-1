import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative bg-slate-900 dark:bg-black py-16 md:py-24 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-purple-900/50 dark:from-primary/90 dark:via-slate-900/90 dark:to-purple-950/60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-35" />
      </div>
      
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-100/80 text-sm md:text-base mt-3 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <nav className="flex justify-center items-center gap-2 mt-6 text-sm text-blue-200/70 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-blue-300/50" />
          <span className="text-white">{title}</span>
        </nav>
      </div>
    </div>
  )
}
