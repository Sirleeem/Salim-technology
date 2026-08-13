import { useEffect, useRef, useState } from 'react'
import './nav.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How we work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const menuOpenRef = useRef(false)

  const toggleMenu = (v) => {
    menuOpenRef.current = v
    setMenuOpen(v)
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)

      // Auto-hide the header when scrolling down past it; reveal on scroll up.
      // Never hide while the mobile menu is open.
      const pastHeader = y > 64
      const scrollingDown = y > lastY.current
      setHidden(pastHeader && scrollingDown && !menuOpenRef.current)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${hidden ? 'nav-hidden' : ''} ${menuOpen ? 'nav-menu-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => toggleMenu(false)}>
          <img src="/assets/salim-icon.svg" alt="" className="nav-brand-icon" />
          <span className="nav-brand-name">SALIM<span className="nav-brand-tech">TECHNOLOGY</span></span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a href={l.href} key={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">Start a project</a>
        </div>
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => toggleMenu(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a href={l.href} key={l.href} className="nav-mobile-link" onClick={() => toggleMenu(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary nav-mobile-cta" onClick={() => toggleMenu(false)}>Start a project</a>
      </div>
    </nav>
  )
}
