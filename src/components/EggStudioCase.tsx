import { Reveal } from './Reveal'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

export function EggStudioCase() {
  return (
    <div className="egg-case bg-[#191919] text-white">
      <section className="relative min-h-[58vh] px-6 py-20 md:px-16 flex flex-col items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_70%_55%_at_50%_72%,#efb03e_0%,#a8762a_32%,#2a1e0c_68%,#121212_100%)]">
        <Reveal>
          <div className="mx-auto w-[94px] h-[118px] rounded-[50%_50%_44%_44%/58%_58%_42%_42%] border-2 border-white relative after:absolute after:inset-5 after:rounded-[50%_50%_44%_44%/58%_58%_42%_42%] after:border after:border-white/40" />
          <h2 className="mt-7 text-4xl md:text-6xl font-medium tracking-[.12em]">EGG STUDIO</h2>
          <p className="mt-4 text-[10px] uppercase tracking-[.34em] text-white/60">Brand Identity · 2019</p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-[1.35fr_.65fr] border-y border-white/10">
        <Reveal className="px-6 py-14 md:px-16 md:py-16 flex items-center">
          <div>
            <p className="max-w-[34ch] text-2xl md:text-3xl leading-[1.45] font-light">
              Every design begins as an egg — conceived, protected, and patiently nurtured until it breaks through the shell.
            </p>
            <p className="mt-6 max-w-[58ch] text-xs leading-7 text-white/45">
              每個作品都從一顆尚未成形的想法開始，在構思與等待中慢慢孵化。
            </p>
          </div>
        </Reveal>
        <Reveal className="px-6 py-12 md:px-10 md:py-16 flex items-center justify-center text-center bg-[#efb03e] text-[#1a1a1a]">
          <div>
            <p className="text-xl md:text-2xl leading-snug">Level up your life,<br />one egg at a time.</p>
            <p className="mt-4 text-[10px] tracking-[.16em] text-black/55">讓每一顆想法，慢慢孵化成形</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#2e2e2e]">
        <div className="px-6 py-12 md:px-16">
          <p className="text-[10px] tracking-[.28em] text-white/35">01</p>
          <h3 className="mt-3 text-xs uppercase tracking-[.2em]">Process</h3>
          <p className="mt-2 text-xs tracking-[.16em] text-white/35">從草圖到識別概念</p>
        </div>
        <Reveal>
          <img src={assetUrl('egg-studio/process.jpg')} alt="Egg Studio hand-sketched logo exploration" className="block w-full h-auto" />
        </Reveal>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-28 bg-[#262626]">
        <p className="text-[10px] tracking-[.28em] text-white/35">02</p>
        <h3 className="mt-3 text-xs uppercase tracking-[.2em]">Logo Construction</h3>
        <Reveal>
          <div className="mt-12 aspect-video relative overflow-hidden border border-white/10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:32px_32px] flex items-center justify-center">
            <div className="w-32 h-40 md:w-44 md:h-56 rounded-[50%_50%_44%_44%/58%_58%_42%_42%] border-2 border-white relative after:absolute after:inset-7 after:border after:border-[#efb03e]/60 after:rounded-[50%_50%_44%_44%/58%_58%_42%_42%]" />
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-28 bg-[#f5efe2] text-[#1a1a1a]">
        <p className="text-[10px] tracking-[.28em] text-black/35">03</p>
        <h3 className="mt-3 text-xs uppercase tracking-[.2em]">Bilingual Lock-up</h3>
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          <div className="bg-[#f5efe2] p-10 md:p-14 flex items-center justify-center">
            <p className="font-display text-3xl md:text-5xl tracking-[.08em]">EGG STUDIO</p>
          </div>
          <div className="bg-[#f5efe2] p-10 md:p-14 flex items-center justify-center">
            <p className="text-4xl md:text-6xl font-medium tracking-[.18em]">蛋設計</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-24 bg-white text-[#1a1a1a]">
        <p className="text-[10px] tracking-[.28em] text-black/35">04</p>
        <h3 className="mt-3 text-xs uppercase tracking-[.2em]">Colour System</h3>
        <div className="mt-12 grid sm:grid-cols-3 gap-px bg-black/10">
          {[['Yolk', '#EFB03E'], ['Warm Shell', '#F5EFE2'], ['Studio Ink', '#1A1A1A']].map(([name, color]) => (
            <div key={name}>
              <div className="aspect-square p-5 flex items-end" style={{ backgroundColor: color }}>
                <span className={`text-[10px] tracking-[.14em] ${color === '#1A1A1A' ? 'text-white' : ''}`}>{color}</span>
              </div>
              <p className="py-4 text-xs font-medium">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 md:py-20 bg-[#111111] text-white border-y border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[10px] tracking-[.28em] text-white/35">05</p>
          <h3 className="mt-4 text-sm uppercase tracking-[.24em]">Typography</h3>
          <p className="mt-3 text-xs tracking-[.16em] text-white/35">品牌字型</p>

          <div className="mt-14 grid gap-10 md:grid-cols-[1.55fr_1fr] md:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[.22em] text-[#efb03e]">Primary · Latin</p>
              <p className="mt-5 text-5xl md:text-6xl font-medium leading-none">Poppins</p>
              <p className="mt-5 text-xs leading-6 text-white/38">Geometric sans with round bowls — echoes the egg form.<br />用於所有英文標題、標語與內文。</p>
            </div>
            <div className="space-y-1 text-2xl md:text-3xl leading-tight text-white/75">
              <p className="font-light">Light</p>
              <p className="font-normal">Regular</p>
              <p className="font-medium">Medium</p>
              <p className="font-semibold text-white">SemiBold</p>
            </div>
          </div>

          <div className="mt-14 pt-14 border-t border-white/10 grid gap-10 md:grid-cols-[1.55fr_1fr] md:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[.22em] text-[#efb03e]">Secondary · Chinese</p>
              <p className="mt-5 text-3xl md:text-5xl font-normal leading-tight">台北黑體 Taipei Sans TC</p>
              <p className="mt-5 text-xs leading-6 text-white/38">Humanist gothic — softened forms, high legibility.<br />人文感黑體，略帶柔和但不圓，長文可讀性最佳。<br />圓體僅保留給 logo 與大標，避免整體過於可愛。</p>
            </div>
            <div className="space-y-1 text-2xl md:text-3xl leading-tight text-white/75">
              <p className="font-light">纖細 Light</p>
              <p className="font-normal">標準 Regular</p>
              <p className="font-medium">中黑 Medium</p>
              <p className="font-bold text-white">粗體 Bold</p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-white/10 py-10 md:grid-cols-4">
            {[
              ['Poppins Light', 'font-light'],
              ['Poppins Regular', 'font-normal'],
              ['Poppins Medium', 'font-medium'],
              ['Poppins Semibold', 'font-semibold'],
            ].map(([label, weight]) => (
              <div key={label}>
                <p className="text-[9px] uppercase tracking-[.16em] text-[#efb03e]">{label}</p>
                <p className={`mt-5 text-sm leading-7 text-white/65 ${weight}`}>AaBbCcDdEe<br />FfGgHhIiJj<br />0123456789</p>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <p className="text-2xl md:text-4xl font-normal">Level up your life, one egg at a time.</p>
            <p className="mt-5 text-lg md:text-xl text-[#efb03e]">蛋設計，為你的生活加蛋升級</p>
            <p className="mt-5 text-[9px] uppercase leading-5 tracking-[.15em] text-white/30">Headline Poppins Medium&nbsp;&nbsp;|&nbsp;&nbsp;Body Poppins Light&nbsp;&nbsp;|&nbsp;&nbsp;中文 台北黑體 Regular<br />網站預覽以 Noto Sans TC 代理，正式稿請安裝台北黑體或源柔黑體</p>
          </div>
        </div>
      </section>

      <section className="bg-[#191919]">
        <div className="px-6 py-12 md:px-16">
          <p className="text-[10px] tracking-[.28em] text-white/35">06</p>
          <h3 className="mt-3 text-xs uppercase tracking-[.2em]">Signage</h3>
          <p className="mt-2 text-xs tracking-[.16em] text-white/35">招牌應用</p>
        </div>
        <Reveal>
          <img src={assetUrl('egg-studio/signage.png')} alt="Egg Studio signage application" className="block w-full h-auto" />
        </Reveal>
      </section>

      <section className="px-6 py-28 md:px-16 md:py-36 text-center bg-[#f5efe2] text-[#1a1a1a]">
        <p className="font-display text-2xl md:text-4xl">Every idea begins as an egg.</p>
        <p className="mt-4 text-xs tracking-[.22em] text-black/40">EGG STUDIO · BRAND IDENTITY</p>
      </section>
    </div>
  )
}
