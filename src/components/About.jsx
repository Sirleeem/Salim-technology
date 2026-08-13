import './about.css'

const values = [
  { name: 'Precision', desc: 'Built with intent. No fluff, no shortcuts. Every detail serves the outcome.' },
  { name: 'Automation', desc: 'If a machine can do it, it should. We design systems that run themselves.' },
  { name: 'Scalability', desc: 'Built to grow. Your infrastructure and software scale with your ambition.' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label reveal">Why Salim Technology</p>
        <h2 className="reveal">About Salim Technology</h2>
        <div className="about-body reveal">
          <p className="about-lead">
            Salim Technology is an engineering-focused practice that designs and builds intelligent software systems and cloud infrastructure.
          </p>
          <p>
            We believe the best technology feels invisible — it simply works, scales, and compounds over time.
            We build for teams that want systems that keep performing long after launch.
          </p>
        </div>
        <div className="about-values">
          {values.map((v, i) => (
            <div className="value reveal" key={v.name} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="value-name">{v.name}</span>
              <span className="value-desc">{v.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
