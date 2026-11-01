const artwork = {
  'radar-carton': { width: 4530, height: 3123, alt: 'T.RADAR PRO 牛皮紙外箱與藍色產品，搭配白色產品字樣、線稿與橘色資訊標籤' },
  'edge-carton': { width: 2922, height: 4384, alt: 'T.META EDGE 牛皮紙外箱，以橘紅色品牌膠帶封箱的包裝應用示意' },
  structure: { width: 4773, height: 4906, alt: '三組包裝結構與取用示意，以九張圖呈現產品、內襯及外箱的組裝關係與取出方向' },
  'silver-pouches': { width: 5504, height: 3072, alt: '三款銀色線材包裝袋，呈現橘黑標籤的不同文字、圖示與版面配置' },
  'bubble-mailers': { width: 1672, height: 941, alt: '六款黑色氣泡袋包裝應用，搭配 TRON FUTURE 品牌字樣、產品線稿與橘色線材標籤' },
} as const

function PackagingImage({ name, eager = false }: { name: keyof typeof artwork; eager?: boolean }) {
  const { width, height, alt } = artwork[name]
  const base = `${import.meta.env.BASE_URL}assets/packaging-product/${name}`
  return (
    <a className="packaging-artwork" href={`${base}.webp`} target="_blank" rel="noreferrer" aria-label={`查看完整圖片：${alt}`}>
      <img src={`${base}.webp`} srcSet={`${base}-1600.webp 1600w, ${base}.webp ${width}w`}
        sizes="(min-width: 1800px) 1440px, (min-width: 768px) calc(100vw - 360px), 100vw"
        width={width} height={height} style={{ aspectRatio: `${width} / ${height}`, objectFit: 'contain' }} alt={alt} loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
    </a>
  )
}

export function PackagingCase() {
  return (
    <div className="packaging-case">
      <section className="packaging-hero" aria-label="Product shipping cartons">
        <PackagingImage name="radar-carton" eager />
        <PackagingImage name="edge-carton" eager />
      </section>

      <section className="packaging-structure" aria-labelledby="packaging-structure-heading">
        <PackagingImage name="structure" />
        <div className="packaging-copy">
          <p className="packaging-label">Packaging &amp; Product Graphics</p>
          <h2 id="packaging-structure-heading" lang="zh-Hant">從外箱到配件，<br />整理產品資訊。</h2>
          <p lang="zh-Hant">以結構示意呈現產品、內襯與外箱的組裝關係，將品牌字樣、產品線稿與搬運標示整合於紙箱。橘黑配色延伸至線材標籤與配件包裝，串起不同尺寸與材質的視覺系統。</p>
          <p className="packaging-english">A consistent graphic language across product cartons, cable labels, and accessory pouches. Structural illustrations communicate how the product and its packaging fit together.</p>
        </div>
      </section>

      <section aria-label="Cable pouch label designs">
        <PackagingImage name="silver-pouches" />
      </section>
      <section aria-label="Bubble mailer packaging graphics">
        <PackagingImage name="bubble-mailers" />
      </section>
    </div>
  )
}
