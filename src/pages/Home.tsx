import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '../components/Reveal'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

const eras = [
  {
    id: 'tron-future',
    period: '2021–2026',
    title: 'Tron Future Tech',
    note: 'Professional Experience · Technology Industry',
    projects: [
      {
        title: 'International Exhibitions',
        zh: '國際展覽與品牌體驗',
        tags: ['Exhibition', 'Brand Experience'],
        slug: 'international-exhibitions',
        cover: assetUrl('exhibitions-events/international-exhibitions-cover.jpg'),
      },
      { title: 'Brand Identity & Applications', zh: '品牌識別與延伸應用', tags: ['Branding', 'CIS'], slug: 'brand-identity-system' },
      {
        title: 'Digital & Product Experience',
        zh: '數位與產品體驗',
        tags: ['Digital / UI', 'Award'],
        slug: 'award-submissions',
        cover: assetUrl('ui-ux-awards/tmeta-cover.jpg'),
      },
      { title: 'Packaging & Product Graphics', zh: '包裝與產品圖像', tags: ['Packaging', 'Product'], slug: 'packaging-design' },
      {
        title: 'Product & Technical Communication',
        zh: '產品型錄、操作手冊與技術資訊系統',
        tags: ['Product DM', 'User Manual', 'Information Design'],
        slug: 'product-catalog',
        cover: assetUrl('editorial-print/catalog-cover.png'),
      },
      { title: 'Brand Culture & Internal Campaigns', zh: '品牌文化與內部活動', tags: ['Brand Culture', 'Campaign'], slug: 'internship-campaign', cover: assetUrl('brand-culture/fit-challenge.jpg') },
    ],
  },
  {
    id: 'graduation',
    period: '2021',
    title: 'Graduation Project',
    note: 'Award-winning Product Design',
    projects: [
      {
        title: 'Zooler',
        zh: '動尺動尺——教育產品與視覺系統',
        tags: ['Product', 'Packaging', 'Award'],
        slug: 'zooler-ruler-set',
        cover: assetUrl('zooler/cover.jpg'),
      },
      {
        title: 'Power Hardware Internship',
        zh: '東鐵五金——手冊與廣告文宣設計',
        tags: ['Editorial', 'Advertising'],
        slug: 'power-hardware-internship',
        cover: assetUrl('cover-updates/power-hardware.png'),
      },
    ],
  },
  {
    id: 'creative',
    period: '2018–2021',
    title: 'Creative Projects',
    note: 'Selected Editorial, Identity & Packaging Work',
    projects: [
      { title: 'Architecture Graduation Publication', zh: '台科建築系畢業刊物設計', tags: ['Editorial', 'Publication'], slug: '' },
      { title: 'Sun Moon Lake Swim Identity', zh: '泳渡日月潭概念識別', tags: ['Branding', 'Event Identity'], slug: 'sunmoon-lake-swim-identity' },
      {
        title: 'Taipei Riverside Music Festival',
        zh: '台北河岸音樂季主視覺',
        tags: ['Campaign', 'Illustration'],
        slug: 'taipei-riverside-music-festival',
        cover: assetUrl('cover-updates/taipei-riverside.jpg'),
      },
      { title: 'Egg Design Studio', zh: '蛋設計品牌識別', tags: ['Branding', 'Identity'], slug: 'egg-design-studio' },
      {
        title: 'Guogan Fang Packaging',
        zh: '菓甘坊果乾包裝',
        tags: ['Packaging', 'Illustration'],
        slug: 'guogan-fang-packaging',
        cover: assetUrl('cover-updates/guogan-fang.jpeg'),
      },
      {
        title: 'I Look Cereal Packaging',
        zh: '路可有機脆麥片包裝',
        tags: ['Packaging', 'Branding'],
        slug: 'ilook-cereal-packaging',
        cover: assetUrl('cover-updates/ilook-cereal.png'),
      },
    ],
  },
]

const projectAnchor = (eraId: string, title: string) =>
  `project-${eraId}-${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`

export function Home() {
  const [loading, setLoading] = useState(() => sessionStorage.getItem('zou-intro-seen') !== 'true')
  const [activeEra, setActiveEra] = useState(eras[0].id)
  const [expandedEra, setExpandedEra] = useState<string | null>(null)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  useEffect(() => {
    if (!loading) return
    const timer = window.setTimeout(() => setLoading(false), 3100)
    window.setTimeout(() => sessionStorage.setItem('zou-intro-seen', 'true'), 2200)
    return () => window.clearTimeout(timer)
  }, [loading])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveEra(visible.target.id.replace('era-', ''))
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, .2, .5] },
    )
    eras.forEach((era) => {
      const node = document.getElementById(`era-${era.id}`)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div className="fixed inset-0 z-[100] bg-[#f7f7f5] text-ink flex items-center justify-center overflow-hidden"
            exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: .85, ease: [0.76, 0, 0.24, 1] }}>
            <div className="zou-loader" role="status" aria-label="Loading Zou Lin portfolio">
              <div className="zou-morph-mark" aria-hidden="true">
                <span className="zou-stroke s1" /><span className="zou-stroke s2" />
                <span className="zou-stroke s3" /><span className="zou-stroke s4" />
                <span className="zou-stroke s5" /><span className="zou-stroke s6" />
                <span className="zou-stroke s7" /><span className="zou-stroke s8" />
                <span className="zou-stroke s9" /><span className="zou-stroke s10" />
                <span className="zou-wordmark">ZOU</span>
              </div>
              <p className="zou-loader-caption">Brand thinking in motion</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-white">
        <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={assetUrl('videos/tronfuture-brand-film.mp4')} aria-label="Zou Lin selected brand and exhibition work" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/10" />
        <div className="relative max-w-[1500px] mx-auto w-full px-6 md:px-12 pt-36 pb-16 md:pb-20">
          <div className="max-w-[430px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent mb-6">Zou Lin · Taiwan</p>
            <h1 className="font-mono text-[12vw] sm:text-[3.6rem] lg:text-[4.2rem] leading-[.9] font-bold tracking-[-.055em]">
              Brand &amp;<br />Marketing<br />Designer<span className="text-accent">.</span>
            </h1>
            <p className="text-base leading-relaxed max-w-[38ch] mt-12">Building visual experiences through branding, international exhibitions, and product communication.</p>
            <a href="#selected-work" className="inline-flex items-center gap-3 mt-8 text-xs font-semibold border-b border-accent pb-1">Selected work <ArrowDown size={13} className="text-accent" /></a>
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-t border-line py-20 md:py-28 scroll-mt-[56px]">
        <div className="max-w-[1800px] mx-auto px-5 md:px-8 grid xl:grid-cols-[190px_1fr] gap-8">
          <aside className="hidden xl:block border-r border-line pr-5">
            <nav className="sticky top-[92px] space-y-2" aria-label="Project timeline">
              <p className="text-[10px] uppercase tracking-[.2em] text-ink-faint mb-6">Timeline</p>
              {eras.map((era) => {
                const isOpen = expandedEra === era.id
                return (
                  <div key={era.id} className="timeline-group"
                    onMouseEnter={() => setExpandedEra(era.id)}
                    onMouseLeave={() => setExpandedEra(null)}
                    onFocus={() => setExpandedEra(era.id)}>
                    <button type="button"
                      onClick={() => {
                        setExpandedEra(isOpen ? null : era.id)
                        document.getElementById(`era-${era.id}`)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      aria-expanded={isOpen}
                      className={`w-full text-left py-3 transition-colors ${activeEra === era.id ? 'text-ink' : 'text-ink-faint hover:text-ink'}`}>
                      <span className="flex items-start gap-3">
                        <span className={`timeline-star ${activeEra === era.id ? 'is-active' : ''}`} aria-hidden="true">
                          <i /><i /><i /><i />
                        </span>
                        <span>
                          <span className="block font-display text-xs font-semibold tracking-[.04em]">{era.period}</span>
                          <span className="block text-xs mt-1">＋ {era.title}</span>
                        </span>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-8">
                          {era.projects.map((project) => (
                            <li key={project.title}>
                              <a href={`#${projectAnchor(era.id, project.title)}`}
                                onClick={() => setActiveProject(projectAnchor(era.id, project.title))}
                                className={`timeline-project-link block py-1.5 text-[12px] leading-snug hover:translate-x-1 transition-all ${
                                  activeProject === projectAnchor(era.id, project.title)
                                    ? 'is-active'
                                    : 'text-ink-soft hover:text-ink'
                                }`}>
                                {project.title}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>
          </aside>

          <div>
            <Reveal>
              <div className="flex items-end justify-between gap-8 mb-14">
                <div>
                  <p className="text-xs uppercase tracking-[.2em] text-ink-faint mb-4">Selected Case Studies</p>
                  <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">Work that builds brands.</h2>
                </div>
                <Link to="/work" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium border-b border-ink/30 pb-1">
                  All work <ArrowUpRight size={14} weight="bold" />
                </Link>
              </div>
            </Reveal>
            <div>
              {eras.map((era) => (
                <section key={era.id} id={`era-${era.id}`}
                  className="scroll-mt-28 py-20 first:pt-0 border-t border-line first:border-t-0">
                  <Reveal>
                    <div className="grid md:grid-cols-[180px_1fr] gap-5 md:gap-10 mb-12 items-end">
                      <p className="font-display text-3xl tracking-tight">{era.period}</p>
                      <div className="md:text-right">
                        <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">{era.title}</h3>
                        <p className="text-xs uppercase tracking-[.16em] text-ink-faint mt-2">{era.note}</p>
                      </div>
                    </div>
                  </Reveal>
                  <div className="grid md:grid-cols-2 gap-x-7 gap-y-16">
                    {era.projects.map((project, index) => (
                      <Reveal key={project.title} delay={(index % 2) * .08}>
                        <Link to={project.slug ? `/project/${project.slug}` : '#'} id={projectAnchor(era.id, project.title)}
                          className={`group block scroll-mt-28 ${project.slug ? '' : 'cursor-default'}`}
                          onClick={(event) => { if (!project.slug) event.preventDefault() }}>
                          <div className="placeholder-card aspect-[3/2] relative overflow-hidden">
                            {'cover' in project && project.cover ? (
                              <img
                                src={project.cover}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                              />
                            ) : (
                              <>
                                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[.12em] text-ink-faint">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[.16em] text-ink-faint">
                                  Image pending
                                </span>
                              </>
                            )}
                          </div>
                          <div className="pt-5">
                            <div className="flex items-start justify-between gap-5">
                              <div>
                                <h4 className="font-display text-xl md:text-2xl font-medium tracking-tight">{project.title}</h4>
                                <p className="text-sm text-ink-soft mt-1.5">{project.zh}</p>
                              </div>
                              <ArrowUpRight size={18} className="shrink-0 mt-1 text-ink-faint" />
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-line text-[10px] uppercase tracking-[.1em] text-ink-faint">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bg py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[.2em] text-white/45 mb-5">Approach</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] font-medium tracking-tight">
              Design is communication, not decoration.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/75 leading-relaxed max-w-[52ch]">
              I translate brand strategy and technical complexity into clear systems — from a booth experienced in person to a product story understood in seconds.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/15">
              <div><strong className="font-display text-4xl">5+</strong><p className="text-sm text-white/45 mt-2">Years in technology</p></div>
              <div><strong className="font-display text-4xl">3</strong><p className="text-sm text-white/45 mt-2">International awards</p></div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-sm border-b border-white/35 pb-1">
              About Zou <ArrowUpRight size={14} weight="bold" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
