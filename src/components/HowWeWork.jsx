import './how-we-work.css'

const steps = [
  { n: '01', name: 'Understand', desc: 'We start by mapping the real constraints, goals, and systems already in place.' },
  { n: '02', name: 'Architect', desc: 'Clear technical direction before a single line of production code is written.' },
  { n: '03', name: 'Build', desc: 'Focused execution with continuous visibility. No black boxes.' },
  { n: '04', name: 'Hand over', desc: 'Clean documentation, stable systems, and knowledge transfer so your team stays in control.' },
]

export default function HowWeWork() {
  return (
    <section id="process" className="process">
      <div className="container">
        <p className="section-label reveal">Approach</p>
        <h2 className="reveal">How we work</h2>
        <p className="section-intro reveal">We treat every engagement as an engineering problem, not a delivery checklist.</p>
        <ol className="process-steps">
          {steps.map((s, i) => (
            <li className="process-step reveal" key={s.n} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="process-num">{s.n}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
