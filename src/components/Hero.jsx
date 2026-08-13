import './hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <img src="/assets/salim-icon.svg" alt="Salim Technology" className="hero-icon" />
        <img src="/assets/wordmark.svg" alt="SALIM TECHNOLOGY" className="hero-wordmark" />
        <p className="hero-tagline">
          AI, software, and cloud infrastructure. Engineered to move your business forward.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Start a project</a>
          <a href="#services" className="btn btn-outline">Our services</a>
        </div>
      </div>
    </header>
  )
}
