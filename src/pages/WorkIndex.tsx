import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { projects } from '../lib/projects'

const filters = [
  'All',
  'Exhibition',
  'Brand Identity',
  'Digital & Product',
  'Packaging',
  'Editorial',
  'Campaigns',
  'Creative Projects',
]

const projectsByFilter: Record<string, string[]> = {
  Exhibition: ['international-exhibitions'],
  'Brand Identity': ['brand-identity-system'],
  'Digital & Product': [
    'award-submissions',
    'technical-explainer-graphics',
    'efficiency-tools',
    'product-visuals-gallery',
  ],
  Packaging: ['packaging-design'],
  Editorial: ['product-catalog', 'power-hardware-internship'],
  Campaigns: ['internship-campaign', 'company-events'],
  'Creative Projects': [
    'zooler-ruler-set',
    'egg-design-studio',
    'taipei-riverside-music-festival',
    'guitar-camp-identity',
    'sunmoon-lake-swim-identity',
    'ilook-cereal-packaging',
    'guogan-fang-packaging',
    'one-kilogram-weight',
  ],
}

const eraGroups = [
  {
    id: 'professional',
    period: '2021–2026',
    title: 'Tron Future Tech',
    slugs: [
      'award-submissions', 'technical-explainer-graphics', 'brand-identity-system',
      'efficiency-tools', 'international-exhibitions', 'internship-campaign',
      'company-events', 'product-catalog', 'packaging-design', 'product-visuals-gallery',
    ],
  },
  {
    id: 'graduation',
    period: '2021',
    title: 'Graduation Project',
    slugs: ['zooler-ruler-set', 'power-hardware-internship'],
  },
  {
    id: 'creative',
    period: '2018–2021',
    title: 'Creative Projects',
    slugs: projectsByFilter['Creative Projects'].filter((slug) => slug !== 'zooler-ruler-set'),
  },
]

function matches(project: (typeof projects)[number], filter: string) {
  if (filter === 'All') return true
  return projectsByFilter[filter]?.includes(project.slug) ?? false
}

export function WorkIndex() {
  const [filter, setFilter] = useState('All')
  const [eraFilter, setEraFilter] = useState('professional')
  const visible = useMemo(() => projects.filter((project) => {
    const era = eraGroups.find((group) => group.id === eraFilter)
    return matches(project, filter) && (!era || era.slugs.includes(project.slug))
  }), [filter, eraFilter])

  return (
    <div className="pt-40 pb-28">
      <div className="max-w-[1800px] mx-auto px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[.22em] text-ink-faint mb-6">Case Studies &amp; Selected Work</p>
          <h1 className="font-display text-5xl md:text-8xl font-medium tracking-[-.045em] leading-[.95] max-w-5xl">
            Brand thinking,<br />made visible<span className="text-accent">.</span>
          </h1>
          <p className="text-ink-soft text-lg mt-8 max-w-[54ch] leading-relaxed">
            Work organized by capability — not by file type. Each project shows how a business need became a clear visual system.
          </p>
        </Reveal>

        <div className="grid xl:grid-cols-[190px_1fr] gap-0 mt-16 min-h-[calc(100vh-56px)]">
          <aside className="hidden xl:block self-stretch border-r border-line pr-5">
            <nav className="sticky top-[92px]" aria-label="Work timeline">
              <p className="case-label mb-7">Timeline</p>
              <div className="space-y-7">
                {eraGroups.map((era) => (
                  <button key={era.id} type="button" onClick={() => { setEraFilter(era.id); setFilter('All') }}
                    className={`w-full flex items-start gap-3 text-left ${eraFilter === era.id ? 'text-ink' : 'text-ink-faint'}`}>
                    <span className={`timeline-star mt-0.5 ${eraFilter === era.id ? 'is-active' : ''}`} aria-hidden="true"><i /><i /><i /><i /></span>
                    <span>
                      <span className="block font-display text-xs font-semibold tracking-[.04em]">{era.period}</span>
                      <span className="block text-xs mt-1">＋ {era.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="sticky top-[56px] z-30 bg-bg/95 backdrop-blur-md border-y border-line py-4 mb-14">
              <div className="flex gap-2 overflow-x-auto no-scrollbar pl-10">
                {filters.map((item) => (
                  <button key={item} onClick={() => { setFilter(item); setEraFilter('') }} aria-pressed={filter === item}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${filter === item && !eraFilter ? 'bg-ink text-bg' : 'border border-line hover:border-ink/40'}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16 pl-10">
              {visible.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * .05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
