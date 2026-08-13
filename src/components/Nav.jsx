import { useEffect, useRef, useState } from 'react'
import './nav.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)

      // Auto-hide the header when scrolling down past it; reveal on scroll up.
      const pastHeader = y > 72
      const scrollingDown = y > lastY.current
      setHidden(pastHeader && scrollingDown)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
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
