import './services.css'

const services = [
  {
    title: 'AI & Automation',
    icon: 'AI',
    desc: 'Intelligent systems, workflow automation, and AI agents that remove repetitive work and put decisions back in your hands.',
  },
  {
    title: 'Software Development',
    icon: 'SD',
    desc: 'Web apps, tools, and custom builds — designed clean, built fast, and engineered to scale with how your business actually works.',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'CI',
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
