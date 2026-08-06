const yellow = '#f5c400'
const zoolerAsset = (file: string) => `${import.meta.env.BASE_URL}assets/zooler/sections/${file}`

type CaseImageProps = {
  file: string
  alt: string
  className?: string
  eager?: boolean
}

function CaseImage({ file, alt, className = '', eager = false }: CaseImageProps) {
  const stem = file.replace(/\.(png|jpe?g)$/i, '')
  const isResponsive = !file.startsWith('behance-2')
  const responsiveExtension = file.toLowerCase().endsWith('.png') ? 'webp' : 'jpg'

  return (
    <img
      src={isResponsive ? zoolerAsset(`${stem}-2200.${responsiveExtension}`) : zoolerAsset(file)}
      srcSet={isResponsive ? `${zoolerAsset(`${stem}-1200.${responsiveExtension}`)} 1200w, ${zoolerAsset(`${stem}-2200.${responsiveExtension}`)} 2200w` : undefined}
      sizes={isResponsive ? '100vw' : undefined}
      alt={alt}
      className={`block w-full h-auto ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
    />
  )
}

type ProductCopyProps = {
  title: string
  subtitle: string
  chinese: string
  englishTitle: string
  english: string
  diagramFile: string
  diagramAlt: string
}

function ProductCopy({ title, subtitle, chinese, englishTitle, english, diagramFile, diagramAlt }: ProductCopyProps) {
  return (
    <section className="bg-bg px-[6%] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 text-[#737479] md:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.75fr)] md:gap-16 lg:gap-24">
        <div className="min-w-0">
          <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="zooler-zh-title text-[24px] leading-tight md:text-[28px]" style={{ color: yellow }}>{title}</h3>
            <span className="text-[16px] font-light text-[#aaa]" aria-hidden="true">｜</span>
            <p className="zooler-zh text-[14px] font-medium text-[#303136] md:text-[15px]">{subtitle}</p>
          </div>
          <p className="zooler-zh max-w-[780px] text-[13px] leading-[2] text-[#737479] md:text-[14px]">{chinese}</p>

          <div className="mt-12 md:mt-14">
            <h4 className="mb-3 text-[15px] font-medium leading-[1.5] text-[#26272b] md:text-[16px]">{englishTitle}</h4>
            <p className="max-w-[780px] text-[13px] leading-[1.85] text-[#737479] md:text-[14px]">{english}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[460px]">
          <CaseImage file={diagramFile} alt={diagramAlt} className="object-contain" />
          <div className="mx-auto mt-7 h-px w-[78%] bg-[#d5d5d2]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

const factTypes = [
  ['動物的速度', "Animals’ Speed", 'behance-25.png'],
  ['動物的身高', "Animals’ Height", 'behance-24.png'],
  ['動物的跳躍能力', "Animals’ Jump Ability", 'behance-23.png'],
  ['動物的視野角度', "Animals’ Angle of View", 'behance-22.png'],
  ['鳥類的飛行高度', 'Animals in the Sky', 'behance-21.png'],
  ['海洋生物的分佈', 'Animals in the Sea', 'behance-20.png'],
]

export function ZoolerCase() {
  return (
    <div className="zooler-case bg-bg text-[#666] overflow-hidden">
      <CaseImage file="behance-19.png" alt="Zooler 尺組、包裝與動物科普手冊完整展示" eager />

      <section className="px-[8%] py-20 md:py-28 bg-bg">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-24 items-center">
          <div className="relative min-h-[220px] md:min-h-[300px] flex flex-col justify-center">
            <span className="absolute left-0 top-0 size-3 md:size-4 rounded-full" style={{ background: yellow }} aria-hidden="true" />
            <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap">
              <p className="zooler-zh-title text-[54px] md:text-[68px] leading-none text-[#202126]">尺</p>
              <span className="text-[22px] md:text-[26px] font-light text-[#929297]">×</span>
              <p className="zooler-zh-title text-[54px] md:text-[68px] leading-none text-[#202126]">動物</p>
            </div>
            <p className="mt-8 text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[#929297]">Ruler × Animal</p>
          </div>

          <div>
            <p className="mb-7 text-[10px] tracking-[0.2em] uppercase text-[#929297]">Design concept</p>
            <h2 className="zooler-zh-title text-[26px] md:text-[34px] leading-[1.45] text-[#202126]">
              把抽象的測量，<br />變成看得懂的動物知識。
            </h2>
            <p className="zooler-zh mt-7 max-w-[520px] text-[14px] md:text-[15px] leading-[2] text-[#696a70]">
              將互動結構加入孩子熟悉的尺，並把身高、速度、跳躍能力與視野等動物知識轉化為容易理解的比較方式。
            </p>
            <p className="mt-5 max-w-[500px] text-[13px] md:text-[14px] leading-[1.85] text-[#8a8b90]">
              Interactive rulers turn abstract measurements into animal knowledge children can compare and understand.
            </p>
          </div>
        </div>
      </section>

      <CaseImage file="攝影照-07.png" alt="孩童操作 Zooler 全圓量角器與閱讀動物科普手冊" />

      <section className="px-[6%] py-12 md:py-20 bg-bg">
        <div className="max-w-[1120px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
          {factTypes.map(([zh, en, image]) => (
            <div key={en} className="text-center">
              <div className="mx-auto mb-4 h-20 md:h-24 flex items-center justify-center">
                <CaseImage file={image} alt={`${zh}圖示`} className="max-h-full max-w-full object-contain !w-auto" />
              </div>
              <p className="text-xs md:text-sm leading-tight text-[#666]">{zh}</p>
              <p className="mt-1 text-xs md:text-sm leading-tight text-[#777]">{en}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[2fr_1fr] items-stretch bg-bg">
        <CaseImage
          file="攝影照-05.png"
          alt="孩童轉動 Zooler 動物速度量角器的操作細節"
          className="h-full object-contain"
        />
        <CaseImage
          file="攝影照-06.png"
          alt="孩童使用 Zooler 三角尺進行測量"
          className="h-full object-contain"
        />
      </section>

      <section className="px-[7%] py-12 md:py-16 bg-bg">
        <div className="max-w-[1080px] mx-auto text-xs md:text-sm leading-[1.9]">
          <p>我們將動物結合科普知識，運用於「尺」上，幫助小朋友理解抽象的數理單位，並加入互動結構增加他們的學習樂趣。關於科普知識的數據皆以類比數值的結果來呈現，希望讓孩子們易於理解。以下是六支尺的設計說明：</p>
          <p className="mt-5">We combine “animal facts” and “interactive structure” to design six different rulers. The animal facts are simplified in order to help it easy to understand. Instead of putting the exact numbers, we only estimate the position.</p>
        </div>
      </section>

      <CaseImage file="攝影照-08.png" alt="以動物跳躍高度為主題的 45–45–90 三角板" />
      <ProductCopy
        title="45–45–90 三角板"
        subtitle="動物比跳高"
        chinese="擅長跳躍的動物有袋鼠、跳羚、兔子等。跳躍的設計用以呈現動物跳躍高度的比較，並以互動結構增加使用時的趣味。"
        englishTitle="Set Square I - Animals’ Jump Ability"
        english="These animal, such as rabbits, frog, are good at jumping, so we use the vaulting box to represent their jumping ability."
        diagramFile="zooler-ruler-1-transparent.png"
        diagramAlt="45–45–90 三角板展開與立體互動結構示意"
      />

      <CaseImage file="攝影照-09.png" alt="以動物身高為主題的 30–60–90 三角板" />
      <ProductCopy
        title="30–60–90 三角板"
        subtitle="動物比身高"
        chinese="此三角板的身高尺標排列，會在每隻動物身高的位置依序停留一下，更有量身高的感覺。"
        englishTitle="Set Square II - Animals’ Height"
        english="This set square is like an apparatus for measuring animals’ height. As you can see, the giraffe is the highest animal in the world."
        diagramFile="zooler-ruler-2-transparent.png"
        diagramAlt="30–60–90 三角板滑動式身高比較結構示意"
      />

      <CaseImage file="攝影照-10.png" alt="以鳥類飛行高度與海洋生物深度為主題的兩支直尺" />
      <ProductCopy
        title="直尺"
        subtitle="動物比飛翔｜動物比潛水"
        chinese="分別介紹鳥類飛行高度以及海洋生物在不同海洋深度的分佈。直尺能夠拆解成兩件，藉由相互滑動的結構，畫出不同間距的平行線。"
        englishTitle="Ruler I & II - Animals in the Sky & Sea"
        english="The ruler on the left is about the birds’ flight altitude. The ruler on the right is about the sea animals in the each level of the ocean depth. The ruler can be separate into two pieces. The upper ruler can slide on the under one. Then they can be used to draw various spacing lines along the ruler."
        diagramFile="zooler-ruler-3-transparent.png"
        diagramAlt="可拆解滑動並繪製平行線的直尺結構示意"
      />

      <CaseImage file="攝影照-11.png" alt="以儀表板呈現動物速度的半圓量角器" />
      <ProductCopy
        title="量角器"
        subtitle="動物比速度"
        chinese="使用儀表板的意象來介紹動物奔跑速度的比較。量角器上的角度對應到動物的時速，指針除比喻成儀表板，也用來對齊角度線。"
        englishTitle="Protractor I - Animals’ Speed"
        english="This protractor is designed to look like an instrument panel. The angles are also correspond to the animals’ highest speed."
        diagramFile="zooler-ruler-5-transparent.png"
        diagramAlt="半圓速度量角器指針旋轉結構示意"
      />

      <CaseImage file="攝影照-12.png" alt="以旋轉結構呈現動物視野角度的全圓量角器" />
      <ProductCopy
        title="全圓量角器"
        subtitle="動物比視角"
        chinese="可量 360 度的量角器，指針用來對齊刻度。我們設計指針上的動物對應到不同顏色的內圈角度，這些角度就是動物們的視野角度。"
        englishTitle="Protractor II - Animals’ Angle of View"
        english="This is another protractor for measuring 360 degrees. The four concentric angles represent four animals’ angle of view on the indicator."
        diagramFile="zooler-ruler-4-transparent.png"
        diagramAlt="全圓視野量角器指針旋轉結構示意"
      />

      <CaseImage file="攝影照-13.jpg" alt="Zooler 六支尺、說明小冊與包裝完整套組" />
      <section className="px-[7%] py-10 md:py-14 text-center bg-bg">
        <p className="text-xs md:text-sm">「動尺動尺」包含六支尺及一本說明小冊。</p>
        <p className="mt-2 text-xs md:text-sm">A set of Zooler contains six rulers and a booklet.</p>
      </section>

      <CaseImage file="攝影照-14.png" alt="Zooler 動物科普與使用說明小冊內頁" />
      <section className="px-[7%] py-10 md:py-14 text-center bg-bg">
        <p className="text-xs md:text-sm">每支尺的用法與主題不同，可透過說明小冊了解。</p>
        <p className="mt-2 text-xs md:text-sm">The booklet will be used to explain the animal facts and instructions.</p>
      </section>

      <CaseImage file="攝影照-15.png" alt="兩位孩童共同探索 Zooler 完整尺組" />

      <section className="px-[8%] py-20 md:py-24 text-center bg-bg min-h-[520px] md:min-h-[620px]">
        <div className="mx-auto flex justify-center items-end gap-3.5" aria-hidden="true">
          <span className="size-8 md:size-10" style={{ background: yellow }} />
          <span className="w-10 h-5 md:w-12 md:h-6 rounded-t-full bg-[#303a5d]" />
          <span className="size-8 md:size-10 rounded-full bg-[#b8dce2]" />
        </div>

        <blockquote className="max-w-[720px] mx-auto mt-5 md:mt-6">
          <div className="flex justify-center items-center gap-2 md:gap-3">
            <span className="text-[30px] md:text-[36px] leading-none font-semibold" style={{ color: yellow }} aria-hidden="true">“</span>
            <p className="zooler-zh text-[13px] md:text-[14px] leading-[1.9] text-[#707177]">孩子能透過尺組設計更親近這個文具，也更了解我們美麗多姿的大自然</p>
            <span className="text-[30px] md:text-[36px] leading-none font-semibold" style={{ color: yellow }} aria-hidden="true">”</span>
          </div>
          <p className="mt-7 max-w-[580px] mx-auto text-[14px] md:text-[16px] leading-[1.8] text-[#6f7076]">
            Children will not only enjoy using the rulers, but also know<br className="hidden md:block" /> more about the diverse species of animals on earth.
          </p>
        </blockquote>

        <div className="mt-24 md:mt-28 mx-auto w-fit text-[12px] md:text-[14px] leading-[2] text-[#707177]">
          <div className="grid grid-cols-[auto_18px_minmax(0,1fr)] gap-x-4 text-left">
            <p className="text-right">設計製作 Designers</p>
            <span className="text-center" aria-hidden="true">｜</span>
            <p>林芷歆 Lin, Zhi-Xin ＆ 陳品樺 Chen, Pin-Hua</p>
            <p className="text-right">指導教授 Project Advisor</p>
            <span className="text-center" aria-hidden="true">｜</span>
            <p>鄭司維 Cheng, Szu-Wei ＆ 施皇旭 Shih, Huang-Hsu</p>
          </div>
        </div>
      </section>
    </div>
  )
}
