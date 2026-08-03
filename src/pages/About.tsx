import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

const industryAwards = [
  {
    year: '2025',
    org: 'Red Dot Design Award',
    category: 'Interface & User Experience Design',
    project: 'T.Meta Anti-Drone System',
    url: 'https://www.red-dot.org/project/tmeta-anti-drone-system-85119',
    logo: assetUrl('logos/reddot.png'),
  },
  {
    year: '2025',
    org: 'iF Design Award',
    category: 'User Interface (UI) — Interfaces for Digital Media',
    project: 'T.Meta Anti-Drone System',
    url: 'https://ifdesign.com/en/winner-ranking/project/tmeta-anti-drone-system/703466',
    logo: assetUrl('logos/if-design.png'),
  },
  {
    year: '2024',
    org: 'Golden Pin Design Award',
    category: 'Communication Design — Application',
    project: 'T.Meta Anti-Drone System',
    url: 'https://goldenpin.org.tw/goldenpin/zh-TW/winners/2081',
    logo: assetUrl('logos/golden-pin.png'),
  },
]

const studentAwards = [
  { org: 'Red Dot Award: Design Concept (Germany)', result: 'Finalist' },
  {
    org: 'Golden Pin New Design Award — "Zooler"',
    result: 'Finalist',
    url: 'https://www2.goldenpin.org.tw/project/%E5%8B%95%E5%B0%BA%E5%8B%95%E5%B0%BA/',
  },
  { org: 'Copic Marker Competition', result: 'Honorable Mention' },
  { org: 'National Art Exhibition — Ink Painting, City Competition', result: '2nd Place' },
  { org: 'National Art Exhibition — Ink Painting, City Competition', result: '3rd Place' },
  { org: 'National Picture Book Competition', result: 'Honorable Mention' },
]

const experience = [
  {
    period: '2021 — Present',
    role: 'Commercial Visual Designer',
    org: 'Tron Future Tech Inc.',
    detail:
      'In-house designer for a defense & space technology company. Brand identity, exhibition design, product visualization, packaging, and internal tooling.',
  },
  {
    period: '2020 — 2021',
    role: 'Design Intern',
    org: 'Eastern Iron Enterprise Co., Ltd.',
    detail: 'Laid out multiple product catalogs and produced CIS collateral for a photography studio client.',
  },
  {
    period: '2017',
    role: 'Summer Visual Design Intern',
    org: 'Chun Kong Technology Co., Ltd.',
    detail: 'Exhibition planning and corporate identity design.',
  },
]

const skills = [
  { group: 'Graphic', tools: ['Photoshop', 'Illustrator', 'Clip Studio'] },
  { group: '3D', tools: ['Maya', 'ZBrush'] },
  { group: 'Motion', tools: ['Premiere', 'After Effects'] },
]

export function About() {
  return (
    <div className="pb-10">
      <section className="relative w-full h-[88dvh] min-h-[520px] max-h-[880px] overflow-hidden bg-[#e1e1e1]">
        <img
          src={assetUrl('profile/portrait-full.jpg')}
          alt="Portrait of Lin Chih-Hsin"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '68% center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #e1e1e1 0%, #e1e1e1 38%, rgba(225,225,225,0.75) 52%, rgba(225,225,225,0) 68%)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] w-full mx-auto px-5 md:px-8">
            <div className="max-w-sm md:max-w-md">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-faint mb-4 md:mb-6">Profile</p>
                <h1 className="font-display font-semibold tracking-tight leading-[0.9] text-[15vw] sm:text-[6rem] md:text-[7rem]">
                  Lin<span className="text-accent">.</span>
                </h1>
                <p className="text-ink-soft text-sm md:text-base max-w-[38ch] mt-4 md:mt-6 leading-relaxed">
                  A Brand &amp; Marketing Designer based in Taiwan. Over the past five years, I&rsquo;ve specialized
                  in branding, international exhibitions, marketing communication, and product documentation
                  within the technology industry.
                </p>
                <div className="hidden sm:flex flex-wrap gap-2.5 mt-7 max-w-sm">
                  {['Brand Identity', 'Exhibition Design', 'Product Visualization', 'Editorial Layout'].map((t) => (
                    <span key={t} className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section py-20 md:py-24 bg-accent text-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Experience</h2>
          </Reveal>
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <div className="grid sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 pb-10 border-b border-line last:border-0">
                  <p className="text-ink-faint text-sm">{e.period}</p>
                  <div>
                    <h3 className="font-display text-lg font-medium">{e.role}</h3>
                    <p className="text-sm text-ink-soft mt-0.5">{e.org}</p>
                    <p className="text-ink-soft mt-3 max-w-[60ch] leading-relaxed">{e.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Awards</h2>
            <p className="text-ink-soft mt-3 max-w-[40ch]">
              International recognition for T.Meta, plus earlier competition results from my design education.
            </p>
          </Reveal>
          <div>
            <div>
              {industryAwards.map((a, i) => (
                <Reveal key={a.url} delay={i * 0.06}>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-6 py-6 border-b border-line first:pt-0 last:border-0"
                  >
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-white flex items-center justify-center p-2 border border-line">
                      <img src={a.logo} alt={a.org} className="w-full h-full object-contain" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-faint">
                        {a.org} {a.year} &middot; {a.category}
                      </span>
                      <span className="block font-display text-lg md:text-xl font-medium tracking-tight mt-1">
                        {a.project}
                      </span>
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft border-b border-transparent group-hover:border-ink group-hover:text-ink transition-colors whitespace-nowrap">
                      View <ArrowUpRight size={14} weight="bold" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="text-xs uppercase tracking-[0.15em] text-ink-faint mt-12 mb-4">Student Competitions</p>
              <ul className="divide-y divide-line border-t border-line">
                {studentAwards.map((a) => (
                  <li key={a.org + a.result} className="flex items-center justify-between gap-4 py-3.5">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm border-b border-transparent hover:border-ink transition-colors"
                      >
                        {a.org}
                        <ArrowUpRight
                          size={12}
                          weight="bold"
                          className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                        />
                      </a>
                    ) : (
                      <span className="text-sm">{a.org}</span>
                    )}
                    <span className="text-sm text-ink-faint whitespace-nowrap">{a.result}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-bg-alt">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight">Education &amp; Tools</h2>
          </Reveal>
          <div className="space-y-12">
            <Reveal delay={0.05}>
              <div>
                <p className="text-ink-faint text-sm mb-1.5">2016 — 2021</p>
                <h3 className="font-display text-lg font-medium">B.A. in Commercial Design</h3>
                <p className="text-sm text-ink-soft mt-0.5">National Taiwan University of Science and Technology</p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-8">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={0.1 + i * 0.06}>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-faint mb-3">{s.group}</p>
                  <ul className="space-y-1.5">
                    {s.tools.map((t) => (
                      <li key={t} className="font-medium">{t}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-ink text-bg px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight max-w-xl leading-[1.1]">
                Open to new opportunities &amp; collaborations.
              </h2>
              <Link
                to="/contact"
                className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-bg text-ink pl-6 pr-2 py-2 font-medium w-max"
              >
                Get in touch
                <span className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
