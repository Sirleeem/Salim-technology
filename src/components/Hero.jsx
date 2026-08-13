import './hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <img src="/assets/salim-icon.svg" alt="" className="hero-icon" />
        <img src="/assets/wordmark-v3.svg" alt="SALIM TECHNOLOGY" className="hero-wordmark" />
        <h1 className="hero-headline">Intelligent systems. Engineered for scale.</h1>
        <p className="hero-tagline">
          We design and build AI-powered software and cloud infrastructure that help businesses operate with greater speed, clarity, and control.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Start a project</a>
          <a href="#services" className="btn btn-outline">View services</a>
        </div>
      </div>
    </header>
  )
}
