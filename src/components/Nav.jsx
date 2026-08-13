import { useEffect, useState } from 'react'
import './nav.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <img src="/assets/salim-icon.svg" alt="" className="nav-brand-icon" />
          <span className="nav-brand-name">SALIM<span className="nav-brand-tech">TECHNOLOGY</span></span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a href={l.href} key={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">Start a project</a>
        </div>
      </div>
    </nav>
  )
}
