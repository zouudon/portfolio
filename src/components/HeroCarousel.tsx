import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, CaretLeft, CaretRight } from '@phosphor-icons/react'
import type { Project } from '../lib/projects'

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroCarousel({ items }: { items: Project[] }) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const project = items[index]

  return (
    <section className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.img
          key={project.slug}
          src={project.cover}
          alt={project.title}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-[1400px] w-full mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-4">Selected Work</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Link to={`/project/${project.slug}`} className="group inline-block">
                <h1 className="font-display text-white text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight max-w-3xl leading-[1.02]">
                  {project.title}
                </h1>
                <p className="text-white/70 mt-4 max-w-lg text-sm md:text-base">{project.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  View project
                  <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-12">
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {items.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${p.title}`}
                  className="relative h-1 rounded-full bg-white/25 overflow-hidden transition-all"
                  style={{ width: i === index ? 32 : 16 }}
                >
                  {i === index && (
                    <motion.span
                      key={project.slug}
                      className="absolute inset-0 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5.5, ease: 'linear' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
