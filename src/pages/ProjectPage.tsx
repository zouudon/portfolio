import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'
import { ProjectSectionBlock } from '../components/ProjectSectionBlock'
import { EggStudioCase } from '../components/EggStudioCase'
import { ILookCase } from '../components/ILookCase'
import { ZoolerCase } from '../components/ZoolerCase'
import { getProject, projects } from '../lib/projects'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/work" replace />

  const idx = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(idx + 1) % projects.length]
  const hasSections = Boolean(project.sections?.length)
  const isAwardSubmission = project.slug === 'award-submissions'
  const isEditorialSplit = project.sections?.every((section) => section.presentation === 'editorial-split')
  const isEggStudio = project.slug === 'egg-design-studio'
  const isZooler = project.slug === 'zooler-ruler-set'
  const isILook = project.slug === 'ilook-cereal-packaging'

  return (
    <article className="pt-[56px]">
      <div className="max-w-[1800px] mx-auto grid md:grid-cols-[360px_minmax(0,1fr)]">
        <main className="min-w-0 bg-bg md:col-start-2">
          {isEggStudio ? (
            <EggStudioCase />
          ) : isZooler ? (
            <ZoolerCase />
          ) : isILook ? (
            <ILookCase />
          ) : (
            <>
          {!isEditorialSplit && (
            <Reveal>
              <img
                src={project.cover}
                alt={project.title}
                className={isAwardSubmission
                  ? 'block w-full h-auto bg-bg-alt'
                  : 'w-full min-h-[52vh] max-h-[92vh] object-cover bg-bg-alt'}
              />
            </Reveal>
          )}

          <div className={isEditorialSplit ? '' : 'py-12 md:py-20'}>
            {hasSections ? (
              <div className={isEditorialSplit ? '' : 'space-y-24 md:space-y-32'}>
                {project.sections!.map((section, index) => (
                  <ProjectSectionBlock key={index} section={section} index={index} title={project.title} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {project.gallery.map((src, index) => (
                  <Reveal key={src} delay={Math.min(index * .04, .2)}>
                    <img
                      src={src}
                      alt={`${project.title} — work ${index + 1}`}
                      className="w-full h-auto object-cover bg-bg-alt"
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
            </>
          )}
        </main>

        <aside className="relative md:col-start-1 md:row-start-1 border-r border-line bg-bg">
          <div className="md:sticky md:top-[56px] md:max-h-[calc(100vh-56px)] md:overflow-y-auto no-scrollbar px-6 md:px-10 py-10 md:py-8">
            <Link to="/#selected-work" className="inline-flex items-center gap-2 text-xs text-ink-faint hover:text-ink mb-7">
              <ArrowLeft size={13} /> Back to work
            </Link>

            <h1 className="font-display text-xl md:text-[26px] font-semibold tracking-[-.03em] leading-[1.06]">
              {project.title}
            </h1>
            {!isAwardSubmission && (
              <p className="text-[11px] text-ink-soft leading-relaxed mt-3">{project.subtitle}</p>
            )}

            {isAwardSubmission && (
              <div className="grid grid-cols-2 gap-x-5 mt-7">
                <div>
                  <p className="case-label mb-3">Awards</p>
                  <div className="flex items-center gap-3">
                    <img src={assetUrl('logos/if-design.png')} alt="iF Design Award" className="h-7 w-auto" />
                    <img src={assetUrl('logos/reddot.png')} alt="Red Dot Design Award" className="h-7 w-auto" />
                    <img src={assetUrl('logos/golden-pin.png')} alt="Golden Pin Design Award" className="h-7 w-auto" />
                  </div>
                </div>
                <div>
                  <p className="case-label mb-3">Role</p>
                  <p className="text-[11px] text-ink-soft leading-[1.75]">{project.role}</p>
                </div>
              </div>
            )}

            {!isAwardSubmission && (
              <dl className="mt-7">
                <dt className="case-label">Role</dt>
                <dd className="text-[11px] text-ink-soft leading-[1.75] mt-1.5">{project.role}</dd>
              </dl>
            )}

            {!isAwardSubmission && (
              <div className="mt-7">
                <p className="case-label mb-3">Discipline</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 border border-line rounded-md text-[9px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7">
              <p className="case-label mb-3">Design Story</p>
              <p className="text-[11px] text-ink-soft leading-[1.75]">{project.body[0]}</p>
            </div>

            {(project.behanceUrl || project.awardUrl) && (
              <div className="mt-8 flex flex-col items-start gap-2">
                {project.behanceUrl && <a href={project.behanceUrl} target="_blank" rel="noreferrer" className="case-link">Extended project</a>}
                {project.awardUrl && <a href={project.awardUrl} target="_blank" rel="noreferrer" className="case-link">{project.awardLabel ?? 'Award listing'}</a>}
              </div>
            )}

            <Link to={`/project/${nextProject.slug}`} className="group flex items-end justify-between gap-5 mt-10 pt-7 border-t border-line">
              <div>
                <p className="case-label mb-2">Next project</p>
                <p className="font-display text-lg font-semibold leading-tight">{nextProject.title}</p>
              </div>
              <ArrowRight size={22} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  )
}
