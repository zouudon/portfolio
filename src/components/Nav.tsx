import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'

const links = [{ label: 'Work', to: '/work' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [overHomeHero, setOverHomeHero] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])
  useEffect(() => {
    const update = () => setOverHomeHero(location.pathname === '/' && window.scrollY < window.innerHeight * .72)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [location.pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 pointer-events-none border-b transition-colors duration-300 ${
      overHomeHero ? 'text-white bg-transparent border-white/25' : 'text-ink bg-bg/95 backdrop-blur-md border-line'
    }`}>
      <div className="h-[56px] px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="pointer-events-auto h-full min-w-28 flex items-center font-display font-semibold text-lg tracking-[.03em]">
          Zou Lin<span className="text-accent">.</span>
        </Link>
        <nav className="pointer-events-auto hidden md:flex h-full items-center gap-3">
          {links.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `h-full px-3 flex items-center text-sm font-medium transition-opacity ${isActive ? 'opacity-100 underline underline-offset-8' : 'opacity-70 hover:opacity-100'}`}>{item.label}</NavLink>)}
        </nav>
        <button className="pointer-events-auto md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-auto fixed inset-0 bg-bg text-ink pt-32 px-6">
          {links.map((item, i) => <motion.div key={item.to} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .06 }}>
            <Link to={item.to} className="block font-display text-4xl py-5 border-b border-line">{item.label}</Link>
          </motion.div>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  )
}
