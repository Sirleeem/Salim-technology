import './about.css'

const values = [
  { name: 'Precision', desc: 'Built with intent. No fluff, no shortcuts. Every detail serves the outcome.' },
  { name: 'Automation', desc: 'If a machine can do it, it should. We design systems that run themselves.' },
  { name: 'Scalability', desc: 'Built to grow. Your infrastructure and software scale with your ambition.' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-statement">
          <p className="section-label">Why Salim Technology</p>
          <h2>Technology is only useful when it ships.</h2>
          <p className="about-lead">
            We build AI, software, and cloud systems that are practical, reliable, and
            built for the real work of your business. From first build to long-term operation.
          </p>
        </div>
        <div className="values">
          {values.map((v) => (
            <div className="value" key={v.name}>
              <span className="value-name">{v.name}</span>
              <span className="value-desc">{v.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
