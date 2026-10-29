const dimensions: Record<string, readonly [number, number]> = {
  'billboard': [1558, 1009],
  'bottles': [2200, 1975],
  'bus-shelter': [1536, 1024],
  'guide': [2200, 670],
  'identity-system': [2000, 1705],
  'key-visual': [2200, 1442],
  'logo-construction': [2000, 375],
  'passes': [1608, 978],
  'poster-mockup': [1536, 1024],
  'stage': [1518, 1036],
  'street-flags': [1277, 1232],
  'tickets': [1809, 1345],
  'tshirts': [2200, 1136],
}

const image = (name: string) => `${import.meta.env.BASE_URL}assets/taipei-riverside/${name}.webp`

function Artwork({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  // Keep each artwork's natural proportions, including portrait posters and flags.
  const [width, height] = dimensions[name]
  return (
    <a href={image(name)} target="_blank" rel="noreferrer" aria-label={`Open full-size artwork: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
      <img src={image(name)} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" className="block h-auto w-full" />
    </a>
  )
}

function Introduction({ number, title, chinese, children }: { number: string; title: string; chinese: string; children: string }) {
  return (
    <div className="riverside-intro">
      <div>
        <p className="riverside-label">{number} / {title}</p>
        <h2 lang="zh-Hant">{chinese}</h2>
      </div>
      <p>{children}</p>
    </div>
  )
}

export function RiversideCase() {
  return (
    <div className="riverside-case">
      <Artwork name="key-visual" alt="台北河岸音樂季主視覺：樂手、樂器與河流般的波浪交織，搭配擋不住的夏日戀曲標語" eager />

      <section className="riverside-opening">
        <p className="riverside-label">Taipei Riverside Music Festival · 2019</p>
        <h2>Sound from the River</h2>
        <p className="riverside-chinese" lang="zh-Hant">擋不住的夏日戀曲</p>
        <div className="riverside-opening-copy">
          <p>A summer by the water, filled with live music, markets, and the character of Dadaocheng. This student concept brings the riverside festival to life through a flowing visual language, from its identity to its printed and spatial applications.</p>
          <p lang="zh-Hant">以大稻埕河岸的夏日音樂、市集與人文風景為起點，將水流、樂聲與演奏者的姿態融入活動識別。透過層疊色塊與帶有顆粒感的筆觸，延伸出一套充滿節奏的視覺系統。</p>
        </div>
        <p className="riverside-note">Student concept project · Application mockups</p>
      </section>

      <section>
        <Introduction number="01" title="Identity system" chinese="讓河流，成為音樂的形狀">The character 北 meets the rhythm of flowing water. The resulting mark, custom Chinese lettering, and wave patterns connect the festival’s name to its riverside setting.</Introduction>
        <Artwork name="logo-construction" alt="標誌構成：北字結合河流波紋，形成台北河岸音樂季識別標誌" />
        <Artwork name="identity-system" alt="原版識別規範：橫式與直式標準字、深藍黃藍桃紅標準色、波浪輔助圖形與字體配置" />
      </section>

      <section className="riverside-paper">
        <Introduction number="02" title="Key visual & poster" chinese="把夏日的聲音，畫進海報裡">Layered instruments, performers, and sweeping waves turn the poster into a composition of sound and movement. Warm coral and yellow sit against river blues, with textured edges giving the illustration a tactile finish.</Introduction>
        <Artwork name="poster-mockup" alt="台北河岸音樂季直式主視覺海報於淺灰牆面上的展示模型" />
      </section>

      <section>
        <Introduction number="03" title="In the city" chinese="從街道，到河岸舞台">The illustration expands across different scales and formats: a building billboard, a bus shelter, street flags, and a stage backdrop. Each application carries the same flowing rhythm into a different setting.</Introduction>
        <Artwork name="billboard" alt="建築外牆大型橫式看板的活動視覺應用模型" />
        <div className="riverside-street-grid">
          <figure><Artwork name="bus-shelter" alt="公車候車亭直式音樂季海報應用模型" /><figcaption>Bus shelter / 候車亭海報</figcaption></figure>
          <figure><Artwork name="street-flags" alt="雙面路燈旗：中文音樂季主視覺與英文 Sound from the River 字樣" /><figcaption>Street flags / 路燈旗</figcaption></figure>
        </div>
        <Artwork name="stage" alt="河岸戶外演出舞台背板的主視覺合成示意圖" />
      </section>

      <section className="riverside-paper">
        <Introduction number="04" title="Print & wayfinding" chinese="帶著音樂，走進活動現場">A fold-out guide brings the map and event information together. Tickets and identification passes extend the visual system into the smaller details of a festival visit.</Introduction>
        <div className="riverside-guide"><Artwork name="guide" alt="音樂季五折導覽摺頁展開圖，包含場地地圖與活動資訊" /></div>
        <div className="riverside-print-grid">
          <figure><Artwork name="tickets" alt="三款配色的長形音樂季票券設計" /><figcaption>Tickets / 票券設計</figcaption></figure>
          <figure><Artwork name="passes" alt="記者證、貴賓證與工作證掛繩識別證應用模型" /><figcaption>Event passes / 活動識別證</figcaption></figure>
        </div>
      </section>

      <section>
        <Introduction number="05" title="Festival merchandise" chinese="把河岸的夏天，帶回日常">A small instrument motif becomes a T-shirt detail, while the full illustration wraps around bottle labels. The same visual vocabulary shifts from a large public canvas to objects held and worn.</Introduction>
        <Artwork name="tshirts" alt="白色與深藍色音樂季紀念上衣的圖案應用模型" />
        <Artwork name="bottles" alt="音樂季彩色插畫延伸至兩款瓶身標籤的周邊設計模型" />
      </section>
      <div className="riverside-closing">
        <p className="riverside-label">Sound from the River</p>
        <p lang="zh-Hant">河岸・音樂・市集</p>
        <span>Event identity / Illustration / Print & applications</span>
      </div>
    </div>
  )
}
