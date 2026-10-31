import type { CSSProperties } from 'react'

const dimensions: Record<string, readonly [number, number]> = {
  'billboard': [1558, 1009],
  'bottles': [3540, 3178],
  'bus-shelter': [1536, 1024],
  'guide': [3682, 1121],
  'identity-system': [850.39398, 727.16],
  'key-visual': [3543, 2322],
  'logo-construction': [850.28, 159.53],
  'passes': [1608, 978],
  'poster-mockup': [6144, 4096],
  'stage': [1518, 1036],
  'street-flags': [1277, 1232],
  'tickets': [1809, 1345],
  'tshirts': [3597, 1858],
}

const vectorArtwork = new Set(['logo-construction', 'identity-system'])
const image = (name: string) => `${import.meta.env.BASE_URL}assets/taipei-riverside/${name}.${vectorArtwork.has(name) ? 'svg' : 'webp'}?v=20261031-layout`

function Artwork({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  const [width, height] = dimensions[name]
  const srcSet = !vectorArtwork.has(name) && width > 2400
    ? `${image(`${name}-1600`)} 1600w, ${image(name)} ${width}w`
    : undefined
  return (
    <a href={image(name)} target="_blank" rel="noreferrer" aria-label={`Open full-size artwork: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
      <img src={image(name)} srcSet={srcSet} sizes={srcSet ? '(min-width: 768px) 78vw, 100vw' : undefined} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" className="block h-auto w-full" />
    </a>
  )
}

function ArtworkPair({ items }: { items: { name: string; alt: string }[] }) {
  // Match heights using the original aspect ratios, with no cropping or stretching.
  const columns = items.map(({ name }) => {
    const [width, height] = dimensions[name]
    return `${width / height}fr`
  }).join(' ')

  return (
    <div className="riverside-artwork-pair" style={{ '--artwork-columns': columns } as CSSProperties}>
      {items.map(({ name, alt }) => <figure key={name}><Artwork name={name} alt={alt} /></figure>)}
    </div>
  )
}

export function RiversideCase() {
  return (
    <div className="riverside-case">
      <Artwork name="poster-mockup" alt="台北河岸音樂季直式海報：以樂手、樂器與波浪交織的插畫呈現夏日音樂，展示於淺灰牆面" eager />

      <section className="riverside-editorial riverside-editorial-billboard" aria-labelledby="river-city-heading">
        <div className="riverside-editorial-copy">
          <p className="riverside-label">Sound from the River</p>
          <h2 id="river-city-heading" lang="zh-Hant">把河岸的節奏，<br />帶進城市。</h2>
          <p lang="zh-Hant">以水流、樂聲與演奏者的姿態，交織出夏日音樂季的主視覺。插畫從海報延伸至城市街景，讓不同尺寸的載體共享同一份流動感。</p>
          <p className="riverside-english">A flowing visual identity, from a festival poster to the city’s streets.</p>
        </div>
        <Artwork name="billboard" alt="音樂季主視覺應用於晴天下的大樓外牆橫式看板" />
      </section>

      <section aria-label="Street applications">
        <ArtworkPair items={[
          { name: 'bus-shelter', alt: '公車候車亭直式音樂季海報應用模型' },
          { name: 'street-flags', alt: '雙面音樂季路燈旗，搭配中文主視覺與 Sound from the River 字樣' },
        ]} />
      </section>

      <section className="riverside-festival-details" aria-labelledby="river-details-heading">
        <h2 id="river-details-heading" className="sr-only">Print, merchandise and festival guide</h2>
        <ArtworkPair items={[
          { name: 'tickets', alt: '藍色、橘色與紫色三款音樂季票券' },
          { name: 'passes', alt: '記者證、貴賓證與工作證的掛繩識別證設計' },
        ]} />
        <div className="riverside-merchandise-grid">
          <Artwork name="bottles" alt="兩款音樂季瓶身標籤，以彩色樂器插畫延伸活動視覺" />
          <div className="riverside-merchandise-stack">
            <Artwork name="tshirts" alt="白色與深藍色音樂季紀念上衣，分別以樂器與演奏者圖案點綴" />
            <div className="riverside-guide-panel"><Artwork name="guide" alt="音樂季五折導覽摺頁展開，包含場地地圖與活動資訊" /></div>
          </div>
        </div>
      </section>

      <section className="riverside-editorial riverside-editorial-stage" aria-labelledby="river-stage-heading">
        <Artwork name="stage" alt="河岸舞台的音樂季主視覺背板合成，呈現樂團演奏與觀眾的活動情境" />
        <div className="riverside-editorial-copy">
          <p className="riverside-label">From print to place</p>
          <h2 id="river-stage-heading" lang="zh-Hant">讓音樂，<br />回到河岸。</h2>
          <p lang="zh-Hant">從票券、識別證到日常周邊，再延伸至河岸舞台。透過一致的色彩與插畫語彙，串起音樂季的每一個接觸點。</p>
          <p className="riverside-english">One visual language across print, objects, and the riverside stage.</p>
          <p className="riverside-project-note">Student concept · Application mockups</p>
        </div>
      </section>
    </div>
  )
}
