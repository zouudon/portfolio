import { Link } from 'react-router-dom'
import { ArrowUpRight, EnvelopeSimple, InstagramLogo, LinkSimple } from '@phosphor-icons/react'
const capabilities = ['Branding', 'Exhibition', 'Marketing', 'Product Communication', 'UI / Digital']

export function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-24 pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">Get in touch</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight max-w-xl leading-[1.05]">
              Let&rsquo;s build a brand people remember.
            </h2>
          </div>
          <Link
            to="/contact"
            className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-bg text-ink pl-6 pr-2 py-2 font-medium w-max"
          >
            Contact
            <span className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} weight="bold" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 text-sm">
          <div>
            <p className="font-display text-lg mb-4">Zou Lin</p>
            <p className="text-white/50 max-w-[22ch]">Brand &amp; Marketing Designer based in Taiwan.</p>
          </div>
          <div>
            <p className="text-white/50 mb-4 uppercase tracking-[0.15em] text-xs">Work</p>
            <ul className="space-y-2.5">
              {capabilities.map((capability) => (
                <li key={capability}>
                  <Link to="/work" className="hover:text-accent transition-colors">
                    {capability}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/50 mb-4 uppercase tracking-[0.15em] text-xs">Site</p>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white/50 mb-4 uppercase tracking-[0.15em] text-xs">Elsewhere</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:dorakiki0324@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <EnvelopeSimple size={16} weight="light" /> Email
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zouyabe/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <InstagramLogo size={16} weight="light" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/dorakiki03de6b" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <LinkSimple size={16} weight="light" /> Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Zou Lin. All rights reserved.</p>
          <p>Designed &amp; built in Hsinchu.</p>
        </div>
      </div>
    </footer>
  )
}
