import { ArrowUpRight, EnvelopeSimple, InstagramLogo, LinkSimple } from '@phosphor-icons/react'
import { Reveal } from '../components/Reveal'

const links = [
  {
    label: 'Email',
    value: 'dorakiki0324@gmail.com',
    href: 'mailto:dorakiki0324@gmail.com',
    icon: EnvelopeSimple,
  },
  {
    label: 'Behance',
    value: 'behance.net/dorakiki03de6b',
    href: 'https://www.behance.net/dorakiki03de6b',
    icon: LinkSimple,
  },
  {
    label: 'Instagram',
    value: '@zouyabe',
    href: 'https://www.instagram.com/zouyabe/',
    icon: InstagramLogo,
  },
]

export function Contact() {
  return (
    <div className="pt-40 pb-28 md:pb-36 min-h-[80vh]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-ink-faint mb-6">Contact</p>
          <h1 className="font-display text-4xl md:text-7xl font-medium tracking-tight max-w-3xl leading-[1.03]">
            Let&rsquo;s create something clear, useful, and memorable.
          </h1>
          <p className="text-ink-soft text-lg mt-6 max-w-[56ch] leading-relaxed">
            I&rsquo;m a Brand &amp; Marketing Designer based in Taiwan, open to opportunities with technology brands
            across branding, international exhibitions, and product communication.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 md:mt-20">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.06}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group block rounded-2xl border border-line p-6 hover:border-ink/30 transition-colors bg-surface"
              >
                <div className="flex items-center justify-between">
                  <l.icon size={22} weight="light" />
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>
                <p className="mt-8 text-xs uppercase tracking-[0.15em] text-ink-faint">{l.label}</p>
                <p className="font-display text-lg font-medium mt-1 break-words">{l.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
