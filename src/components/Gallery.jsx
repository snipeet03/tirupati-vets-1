import { useState, useEffect } from 'react'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { thumb: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&q=80', full: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&q=80', alt: 'Happy dog' },
  { thumb: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&q=80', full: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80', alt: 'Cat' },
  { thumb: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500&q=80', full: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=1200&q=80', alt: 'Puppy' },
  { thumb: 'https://images.unsplash.com/photo-1450778869180-e12d8520f945?w=500&q=80', full: 'https://images.unsplash.com/photo-1450778869180-e12d8520f945?w=1200&q=80', alt: 'Cat close-up' },
  { thumb: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&q=80', full: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&q=80', alt: 'Dog running' },
  { thumb: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=500&q=80', full: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=1200&q=80', alt: 'Rabbit' },
  { thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&q=80', full: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80', alt: 'Vet with pet' },
  { thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80', full: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80', alt: 'Golden Retriever' },
]

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8']

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((p) => (p + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((p) => (p - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex])

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto anim-up">
          <span className="inline-block text-primary dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">Gallery</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white">Happy Moments</h2>
          <p className="text-text-muted dark:text-slate-400 text-lg mt-4">A glimpse into the care, joy, and trust we share with our patients and their families.</p>
        </div>

        <div className="masonry mt-14">
          {images.map((img, i) => (
            <div key={i}
              className={`masonry-item anim-scale ${staggerClasses[i]} relative rounded-2xl overflow-hidden cursor-pointer group`}
              onClick={() => setLightboxIndex(i)}>
              <img src={img.thumb} alt={img.alt} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <img
            src={images[lightboxIndex].full}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
