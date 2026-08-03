import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { projectsByCategory, type Project } from '../lib/projects'

const CATEGORY_CODES: Record<string, string> = {
  'brand-identity': 'BD',
  'ui-ux-awards': 'UX',
  'exhibitions-events': 'EX',
  'editorial-print': 'EP',
  'product-visuals': 'PV',
}

export function ProjectCard({ project, size = 'md' }: { project: Project; size?: 'lg' | 'md' }) {
  const code = CATEGORY_CODES[project.category] ?? 'PJ'
  const indexInCategory = projectsByCategory(project.category).findIndex((p) => p.slug === project.slug) + 1
  const tag = `${code}${String(indexInCategory).padStart(3, '0')}`

  return (
    <Link to={`/project/${project.slug}`} className="group block">
      <div
        className={`relative overflow-hidden ${
          project.coverTreatment === 'emboss' ? 'bg-[#1c1d21]' : 'bg-bg-alt'
        } ${size === 'lg' ? 'aspect-[3/2]' : 'aspect-[3/2]'}`}
      >
        {project.coverTreatment === 'emboss' && project.coverMark ? (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                'radial-gradient(120% 120% at 30% 20%, #2a2b30 0%, #1c1d21 55%, #131316 100%)',
            }}
          >
            <img
              src={project.coverMark}
              alt={project.title}
              className="w-[46%] h-auto transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              style={{
                filter:
                  'drop-shadow(0 1px 0 rgba(255,255,255,0.15)) drop-shadow(0 -2px 3px rgba(0,0,0,0.7)) drop-shadow(0 6px 14px rgba(0,0,0,0.55))',
              }}
            />
            <div className="grain-overlay grain-overlay-dark" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)' }}
            />
          </div>
        ) : (
          <>
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
            />
            <div className="grain-overlay" />
          </>
        )}

        <span
          className={`absolute top-3 left-3 font-mono text-[10px] tracking-[0.08em] px-2 py-1 rounded-full backdrop-blur ${
            project.coverTreatment === 'emboss'
              ? 'bg-white/10 text-white/70'
              : 'bg-bg/80 text-ink-faint'
          }`}
        >
          {tag}
        </span>

        <div
          className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${
            project.coverTreatment === 'emboss' ? 'bg-white/15 text-white' : 'bg-bg/90'
          }`}
        >
          <ArrowUpRight size={16} weight="bold" />
        </div>
      </div>
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-medium tracking-tight">{project.title}</h3>
          <p className="text-sm text-ink-soft mt-1 max-w-[42ch]">{project.subtitle}</p>
        </div>
        <span className="text-xs text-ink-faint whitespace-nowrap pt-1">{project.year}</span>
      </div>
    </Link>
  )
}
