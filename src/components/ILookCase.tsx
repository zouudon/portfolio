const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`

const image = (name: string) => assetUrl(`ilook/${name}`)

function ConceptCard({ src, title, zh, alt }: { src: string; title: string; zh: string; alt: string }) {
  return (
    <div>
      <img src={image(src)} alt={alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
      <p className="mt-3 text-[11px] font-medium text-[#303136] md:text-[12px]">{title}</p>
      <p className="zooler-zh mt-1 text-[10px] text-[#96979b] md:text-[11px]">{zh}</p>
    </div>
  )
}

function ProjectImage({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <img
      src={image(src)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`block h-auto w-full ${className}`}
    />
  )
}

export function ILookCase() {
  return (
    <div className="overflow-hidden bg-bg text-[#5f6065]">
      <ProjectImage src="hero.webp" alt="I Look organic cereal complete packaging system" className="bg-[#f4d99a]" priority />

      <section className="px-[6%] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <div className="max-w-[520px]">
            <p className="mb-5 text-[9px] font-medium tracking-[0.22em] text-[#a0a1a5] uppercase md:text-[10px]">Concept</p>
            <h2 className="max-w-[430px] text-[26px] font-medium leading-[1.22] text-[#242529] md:text-[34px]">
              A small opening<br />invites a closer look.
            </h2>
            <p className="mt-6 max-w-[500px] text-[13px] leading-[1.85] text-[#66676c] md:text-[14px]">
              Inspired by the sound of <span className="font-semibold text-[#25262a]">“look for,”</span> I Look turns curiosity into a packaging idea. Each character breaks through a paper surface, revealing a cereal flavour waiting to be discovered.
            </p>
            <p className="zooler-zh mt-4 max-w-[500px] text-[11px] leading-[1.85] text-[#999a9f] md:text-[12px]">
              「路可」取自 look for 的發音。以紙張破洞作為發現的入口，讓每位角色帶著不同口味從包裝中探出來。
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold tracking-[0.04em] text-[#303136] md:text-[12px]">Visual formula</p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:gap-3 md:gap-4">
              <ConceptCard src="concept-paper.jpg" title="Paper tear" zh="撕紙破洞" alt="Irregular opening torn through white paper" />
              <span aria-hidden="true" className="hidden pb-10 text-[20px] font-light text-[#9b7a43] sm:block">+</span>
              <ConceptCard src="concept-cereal.jpg" title="Cereal texture" zh="穀片質感" alt="Bowl of crisp cereal flakes with milk and a spoon" />
              <span aria-hidden="true" className="hidden pb-10 text-[20px] font-light text-[#9b7a43] sm:block">+</span>
              <ConceptCard src="concept-collage.jpg" title="Hand collage" zh="手作拼貼" alt="Child's hands arranging a tactile torn-paper collage" />
            </div>
          </div>
        </div>
      </section>

      <ProjectImage src="system.webp" alt="I Look brand line and four cereal package characters" />

      <section className="px-[6%] py-16 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-6 text-[10px] font-medium tracking-[0.22em] text-[#a0a1a5] uppercase">Character-led flavours</p>
              <h2 className="text-[25px] font-medium leading-[1.25] text-[#242529] md:text-[30px]">Four flavours.<br />Four personalities.</h2>
            </div>
            <div className="lg:pt-8">
              <p className="max-w-[690px] text-[14px] leading-[1.9] md:text-[15px]">
                A consistent white package, torn-paper opening, and illustrated character create one recognisable family. Ingredient colours and character details distinguish each flavour without breaking the system.
              </p>
              <p className="zooler-zh mt-4 max-w-[690px] text-[12px] leading-[1.9] text-[#999a9f] md:text-[13px]">
                以白色包裝、破洞構圖與人物插畫建立系列感，再用食材色彩與角色細節區分四種口味。
              </p>
              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-4 text-[12px] text-[#35363a] sm:grid-cols-4">
                <span><b>01</b> Matcha Almond</span>
                <span><b>02</b> Cranberry Cocoa</span>
                <span><b>03</b> Strawberry Berry</span>
                <span><b>04</b> Sweet Honey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2">
        <ProjectImage src="cocoa.webp" alt="Cranberry cocoa cereal packaging detail" />
        <ProjectImage src="flavours.webp" alt="Four I Look cereal flavour packages" />
      </div>

      <section className="px-[6%] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-6 text-[10px] font-medium tracking-[0.22em] text-[#a0a1a5] uppercase">Packaging system</p>
            <h2 className="text-[25px] font-medium leading-[1.25] text-[#242529] md:text-[30px]">Designed as a set,<br />not a single pack.</h2>
          </div>
          <div className="lg:pt-8">
            <p className="max-w-[680px] text-[14px] leading-[1.9] md:text-[15px]">
              The visual language extends from individual cereal packs to a four-flavour gift box and carry bag. Oat imagery becomes a material-like surface, while the quieter outer box makes opening the set feel like a reveal.
            </p>
            <p className="zooler-zh mt-4 max-w-[680px] text-[12px] leading-[1.9] text-[#999a9f] md:text-[13px]">
              視覺延伸至四入禮盒與提袋；外包裝收斂圖像，讓開盒後的四款角色成為主角。
            </p>
          </div>
        </div>
      </section>

      <ProjectImage src="gift-set.webp" alt="I Look four-flavour gift box and individual packages" />

      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <ProjectImage src="bag-detail.webp" alt="I Look cereal carry bag material detail" className="h-full object-cover" />
        <ProjectImage src="individual-packs.webp" alt="I Look individual cereal packs with breakfast setting" className="h-full object-cover" />
      </div>

      <ProjectImage src="final-system.webp" alt="Complete I Look cereal packaging presentation" />
    </div>
  )
}
