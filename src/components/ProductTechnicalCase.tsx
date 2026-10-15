import { Reveal } from './Reveal'

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/editorial-print/${file}`

const systems = [
  ['01', 'Information hierarchy', '資訊層級', 'Cover, overview, specifications, workflows, and operating notes.'],
  ['02', 'Technical diagrams', '技術圖解', 'Complex product relationships translated into diagrams that can be scanned quickly.'],
  ['03', 'Multilingual layout', '多語系排版', 'Flexible grids accommodate Chinese, English, and Japanese without losing hierarchy.'],
  ['04', 'Template consistency', '版型一致性', 'Repeatable rules keep a growing product family recognisable and efficient to maintain.'],
]

const publications = [
  ['catalog-spread-tsar.jpg', 'T.SAR', 'Product DM · System overview'],
  ['catalog-spread-system.jpg', 'Anti-drone system', 'Product DM · Technical communication'],
  ['catalog-spread-smallsat.jpg', 'T.SmallSat', 'Product brochure · Product specifications'],
]

const radarManualPages = [
  { src: 'tradar-er-user-manual-cover.png', label: 'Cover' },
  ...[2, 3, ...Array.from({ length: 29 }, (_, index) => index + 5)].map((page) => ({
    src: `tradar-er-manual-p${String(page).padStart(2, '0')}.jpg`,
    label: `Page ${String(page).padStart(2, '0')}`,
  })),
]

const documentGroups = [
  {
    id: 'dm',
    eyebrow: '01 · Product communication',
    title: 'Product DM & Catalogs',
    titleZh: '產品 DM 與型錄',
    description: 'Product positioning, key features, system diagrams, specifications, and sales-ready information for different product lines.',
    count: 12,
  },
  {
    id: 'manual',
    eyebrow: '02 · Operational communication',
    title: 'User Manuals',
    titleZh: '產品操作手冊',
    description: 'Installation, setup, operating procedures, troubleshooting, and safety information structured for clear day-to-day use.',
    count: 12,
  },
]

export function ProductTechnicalCase() {
  return (
    <div className="product-technical-case bg-bg">
      <section className="px-6 py-16 sm:px-10 md:px-[clamp(3rem,6vw,7rem)] md:py-24 border-b border-line">
        <Reveal>
          <p className="case-label text-accent mb-5">Product documentation system</p>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] xl:items-end">
            <h2 className="font-display text-[clamp(2.4rem,5.2vw,5.5rem)] font-medium tracking-[-.045em] leading-[.96] max-w-[12ch]">
              Making complex products clear.
            </h2>
            <div className="max-w-[48ch] xl:pb-1">
              <p className="text-sm md:text-base leading-[1.8] text-ink-soft">
                Over five years, I developed and maintained product brochures and user manuals across multiple technology product lines—turning specifications, workflows, and operating instructions into clear, consistent communication.
              </p>
              <p className="mt-4 text-xs md:text-sm leading-[1.8] text-ink-faint">
                五年間持續負責多項科技產品的型錄與操作手冊，將規格、操作流程及產品資訊轉化為清楚且一致的溝通內容。
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 md:mt-20 grid grid-cols-3 border-y border-line">
            {[
              ['5 YEARS', 'Ongoing ownership'],
              ['MULTIPLE', 'Product lines'],
              ['PRINT + DIGITAL', 'Formats'],
            ].map(([value, label]) => (
              <div key={value} className="py-5 md:py-7 px-3 first:pl-0 last:pr-0 border-r last:border-r-0 border-line">
                <p className="font-display text-sm md:text-xl font-semibold">{value}</p>
                <p className="mt-1 text-[9px] md:text-[11px] text-ink-faint">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-[.78fr_1.22fr] min-h-[70vh] border-b border-line">
        <Reveal className="p-6 sm:p-10 md:p-[clamp(3rem,6vw,7rem)] flex flex-col justify-center">
          <p className="case-label mb-4">Scope</p>
          <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-.03em] leading-tight max-w-[13ch]">
            One system across a growing product portfolio.
          </h3>
          <p className="mt-6 text-sm leading-[1.8] text-ink-soft max-w-[42ch]">
            Rather than treating every publication as a separate layout, I built a shared structure that could adapt to different product families, levels of technical detail, languages, and sales contexts.
          </p>
        </Reveal>
        <Reveal className="min-h-[420px] bg-bg-alt flex items-center justify-center p-10 md:p-16" delay={0.08}>
          <img src={asset('catalog-cover.png')} alt="Tron Future product catalog cover" className="block max-h-[68vh] w-auto max-w-full object-contain shadow-[0_24px_60px_rgba(21,22,26,.12)]" />
        </Reveal>
      </section>

      <section className="px-6 py-16 sm:px-10 md:px-[clamp(3rem,6vw,7rem)] md:py-24 border-b border-line">
        <Reveal>
          <p className="case-label mb-4">Communication system</p>
          <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-.03em]">Designed to stay consistent as content grows.</h3>
        </Reveal>
        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 xl:grid-cols-4 border-l border-t border-line">
          {systems.map(([number, title, zh, text], index) => (
            <Reveal key={number} delay={index * 0.04} className="border-r border-b border-line p-6 md:p-8 min-h-[250px] flex flex-col">
              <p className="text-[10px] tracking-[.16em] text-ink-faint">{number}</p>
              <div className="mt-auto pt-12">
                <h4 className="font-display text-lg font-semibold">{title}</h4>
                <p className="text-xs text-ink-faint mt-1">{zh}</p>
                <p className="text-xs leading-[1.7] text-ink-soft mt-5">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-line">
        <Reveal className="px-6 sm:px-10 md:px-[clamp(3rem,6vw,7rem)] mb-10 md:mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="case-label mb-4">Selected product communication</p>
            <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-.03em]">Product DMs & catalogs.</h3>
          </div>
          <p className="text-xs text-ink-faint">Representative selection · More content to be added</p>
        </Reveal>
        <div className="grid md:grid-cols-3">
          {publications.map(([src, title, meta], index) => (
            <Reveal key={src} delay={index * 0.05} className="border-y md:border-y-0 md:border-r last:border-r-0 border-line">
              <div className="aspect-[4/5] bg-bg-alt p-5 md:p-8 flex items-center justify-center">
                <img src={asset(src)} alt={`${title} publication spread`} className="block max-w-full max-h-full object-contain shadow-[0_16px_40px_rgba(21,22,26,.1)]" />
              </div>
              <div className="px-6 py-5">
                <h4 className="font-display font-semibold">{title}</h4>
                <p className="mt-1 text-[10px] text-ink-faint uppercase tracking-[.1em]">{meta}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="px-6 pt-16 sm:px-10 md:px-[clamp(3rem,6vw,7rem)] md:pt-24">
          <div className="grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(0,.7fr)_minmax(300px,1.3fr)] md:items-end">
            <div>
              <p className="case-label mb-4">Publication archive</p>
              <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-.03em] max-w-[15ch]">
                Two publication systems, built over five years.
              </h3>
            </div>
            <div className="max-w-[58ch] md:justify-self-end">
              <p className="text-sm leading-[1.8] text-ink-soft">
                Product DMs communicate value and technical capability, while user manuals guide operation. Separating the archive by purpose makes both the volume and the communication thinking easier to understand.
              </p>
              <p className="mt-3 text-xs leading-[1.8] text-ink-faint">
                將產品型錄與操作手冊依溝通目的分開呈現，讓五年間累積的文件規模與資訊設計邏輯更容易被理解。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {documentGroups.map((group) => (
            <section key={group.id} aria-labelledby={`${group.id}-archive-title`}>
              <Reveal className="px-6 sm:px-10 md:px-[clamp(3rem,6vw,7rem)]">
                <div className="grid gap-5 md:grid-cols-[minmax(240px,.75fr)_minmax(320px,1.25fr)] md:items-end">
                  <div>
                    <p className="case-label mb-3">{group.eyebrow}</p>
                    <h4 id={`${group.id}-archive-title`} className="font-display text-xl font-semibold tracking-[-.02em] md:text-3xl">
                      {group.title}
                    </h4>
                    <p className="mt-1 text-xs text-ink-faint">{group.titleZh}</p>
                  </div>
                  <p className="max-w-[60ch] text-xs leading-[1.75] text-ink-soft md:justify-self-end md:text-sm">
                    {group.description}
                  </p>
                </div>
              </Reveal>

              {group.id === 'manual' && (
                <Reveal className="mt-7">
                  <div className="grid grid-cols-3 border-t border-line bg-bg-alt sm:grid-cols-4 lg:grid-cols-6">
                    {radarManualPages.map(({ src, label }, index) => (
                      <figure key={src} className="min-w-0 border-r border-b border-line">
                        <div className="aspect-[210/297] overflow-hidden bg-[#efeeeb]">
                          <img
                            src={asset(src)}
                            alt={index === 0 ? 'T.RADAR ER user manual cover' : `T.RADAR ER user manual — ${label}`}
                            className="block h-full w-full object-contain"
                            loading={index < 6 ? 'eager' : 'lazy'}
                          />
                        </div>
                        <figcaption className="flex items-center justify-between gap-2 px-3 py-3 text-[8px] uppercase tracking-[.11em] text-ink-faint sm:text-[9px]">
                          <span className="truncate">{index === 0 ? 'T.RADAR ER' : 'USER MANUAL'}</span>
                          <span>{String(index + 1).padStart(2, '0')}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </Reveal>
              )}

              {group.id !== 'manual' && <div className="mt-7 grid grid-cols-3 border-l border-t border-line sm:grid-cols-4 lg:grid-cols-6">
                {Array.from({ length: group.count }, (_, index) => (
                  <Reveal
                    key={`${group.id}-${index}`}
                    delay={(index % 6) * 0.025}
                    className="min-w-0 border-r border-b border-line bg-bg-alt p-3 sm:p-4"
                  >
                    <div className={`relative overflow-hidden border border-line bg-[#dededb] ${group.id === 'manual' ? 'aspect-[3/4]' : index % 4 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
                      <span className="absolute left-3 top-3 text-[9px] tracking-[.14em] text-ink-faint">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="absolute inset-x-3 bottom-3 space-y-1.5 opacity-50">
                        <span className="block h-px w-full bg-ink-faint" />
                        <span className="block h-px w-3/4 bg-ink-faint" />
                        <span className="block h-px w-1/2 bg-ink-faint" />
                      </div>
                    </div>
                    <p className="mt-3 truncate text-[8px] font-medium tracking-[.12em] text-ink-faint sm:text-[9px]">
                      {group.id === 'manual'
                          ? 'USER MANUAL'
                          : index % 2 === 0
                            ? 'PRODUCT DM'
                            : 'PRODUCT CATALOG'}
                    </p>
                  </Reveal>
                ))}
              </div>}
            </section>
          ))}
        </div>
        <p className="px-6 pt-5 text-[9px] uppercase tracking-[.14em] text-ink-faint sm:px-10 md:px-[clamp(3rem,6vw,7rem)]">
          Grey covers are placeholders for additional DMs, catalogs, and manuals
        </p>
      </section>

      <section className="px-6 py-16 sm:px-10 md:px-[clamp(3rem,6vw,7rem)] md:py-24">
        <Reveal>
          <p className="case-label mb-4">From complexity to clarity</p>
          <h3 className="font-display text-2xl md:text-4xl font-medium tracking-[-.03em] max-w-[18ch]">A repeatable communication workflow.</h3>
        </Reveal>
        <div className="mt-10 md:mt-14 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ['01', 'Raw information', 'Product specifications, engineering notes, and source files'],
            ['02', 'Content structure', 'Audience, hierarchy, chapters, and reading sequence'],
            ['03', 'Visual translation', 'Diagrams, tables, typography, and reusable page rules'],
            ['04', 'Final publication', 'Print-ready and digital documents across product lines'],
          ].map(([number, title, description]) => (
            <div key={number} className="bg-bg-alt min-h-[280px] p-6 flex flex-col justify-between border border-line">
              <span className="text-[10px] tracking-[.16em] text-ink-faint">{number}</span>
              <div>
                <p className="font-display text-lg font-semibold">{title}</p>
                <p className="mt-3 text-xs leading-[1.7] text-ink-soft">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[.14em] text-ink-faint">Grey panels indicate process imagery to be added</p>
      </section>
    </div>
  )
}
