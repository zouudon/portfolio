import { Link } from 'react-router-dom'
import { EnvelopeSimple, InstagramLogo, LinkSimple } from '@phosphor-icons/react'
const capabilities = ['Branding', 'Exhibition', 'Marketing', 'Product Communication', 'UI / Digital']

export function Footer() {
  return (
    <footer
      className="text-bg"
      style={{ background: 'linear-gradient(125deg, #15161a 0%, #15161a 58%, #19235a 100%)' }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 text-sm">
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
