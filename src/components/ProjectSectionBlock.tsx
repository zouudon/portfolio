import { Reveal } from './Reveal'
import type { ProjectSection } from '../lib/projects'

function imageGridClass(layout: ProjectSection['imageLayout'], count: number) {
  const effective = layout ?? (count >= 3 ? 'triple' : count === 2 ? 'pair' : 'full')
  if (effective === 'triple') return 'grid-cols-1 sm:grid-cols-3'
  if (effective === 'pair') return 'grid-cols-1 sm:grid-cols-2'
  return 'grid-cols-1'
}

export function ProjectSectionBlock({ section, index, title }: { section: ProjectSection; index: number; title: string }) {
  return (
    <div>
      <Reveal delay={Math.min(index * 0.04, 0.2)}>
        <div className="px-5 md:px-8 max-w-[70ch] mx-auto">
          {section.eyebrow && (
            <p className="text-xs uppercase tracking-[0.15em] text-ink-faint mb-3">{section.eyebrow}</p>
          )}
          <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-4">{section.heading}</h2>
          <div className="space-y-4">
            {section.text.map((p, i) => (
              <p key={i} className="text-sm text-ink-soft leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      {section.video && (
        <Reveal delay={Math.min(index * 0.04 + 0.08, 0.3)}>
          <div className="mt-6 md:mt-8">
            <video
              controls
              preload="metadata"
              className="w-full h-auto bg-ink"
              src={section.video}
              aria-label={`${title} — ${section.heading} video`}
            />
          </div>
        </Reveal>
      )}

      {section.images && section.images.length > 0 && (
        <div className={`mt-6 md:mt-8 grid gap-3 md:gap-4 ${imageGridClass(section.imageLayout, section.images.length)}`}>
          {section.images.map((src, i) => (
            <Reveal key={src} delay={Math.min(index * 0.04 + i * 0.03 + 0.1, 0.35)}>
              <img src={src} alt={`${title} — ${section.heading}`} className="w-full h-auto object-cover bg-bg-alt" />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
