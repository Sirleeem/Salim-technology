import './services.css'

const services = [
  {
    title: 'AI & Automation',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.6-6.6-2.1 2.1M8.5 14.5l-2.1 2.1m10.2 0-2.1-2.1M8.5 9.5 6.4 7.4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    desc: 'Intelligent systems, workflow automation, and AI agents that remove repetitive work and put decisions back in your hands.',
  },
  {
    title: 'Software Development',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-5-16-2 20" />
      </svg>
    ),
    desc: 'Web apps, tools, and custom builds. Designed clean, built fast, and engineered to scale with how your business actually works.',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.6A4 4 0 0 0 7 19h10.5Z" />
      </svg>
    ),
    desc: 'Deployment, hosting, and infrastructure that stays up. We make sure your systems are fast, secure, and ready to grow.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <p className="section-label">Services</p>
        <h2>Built for the work that moves your business.</h2>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
