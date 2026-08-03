import { Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { getCategory, projectsByCategory } from '../lib/projects'

export function CategoryPage() {
  const { slug } = useParams()
  const category = slug ? getCategory(slug) : undefined

  if (!category) return <Navigate to="/work" replace />

  const items = projectsByCategory(category.slug)

  return (
    <div className="pt-40 pb-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-faint mb-5">Work</p>
          <h1 className="font-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl leading-[1.05]">
            {category.title}
          </h1>
          <p className="text-ink-soft mt-6 max-w-[62ch] text-lg leading-relaxed">{category.description}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
          {items.map((p, j) => (
            <Reveal key={p.slug} delay={j * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
