import './services.css'

const services = [
  {
    title: 'Custom Software',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-5-16-2 20" />
      </svg>
    ),
    desc: 'Custom platforms and applications designed around real operational needs. Built for performance, clarity, and long-term maintainability.',
  },
  {
    title: 'AI & Automation',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.6-6.6-2.1 2.1M8.5 14.5l-2.1 2.1m10.2 0-2.1-2.1M8.5 9.5 6.4 7.4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    desc: 'Practical AI integration and intelligent workflows that reduce friction, automate the repetitive, and surface better decisions.',
  },
  {
    title: 'Cloud Infrastructure',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.6A4 4 0 0 0 7 19h10.5Z" />
      </svg>
    ),
    desc: 'Scalable architecture and reliable DevOps foundations engineered for speed, resilience, and growth.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <p className="section-label reveal">Services</p>
        <h2 className="reveal">What we build</h2>
        <p className="section-intro reveal">Focused capabilities. Clear outcomes.</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <article className="service-card reveal" key={s.title} style={{ transitionDelay: `${i * 70}ms` }}>
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
