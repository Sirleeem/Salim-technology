import './products.css'

const products = [
  {
    name: 'Salim SMS',
    tag: 'Live',
    url: 'https://sms.salimtechnology.com',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    desc: 'SMS verification and OTP delivery platform. Instant number provisioning, real-time codes, and a developer API for businesses that need reliable phone verification.',
  },
  {
    name: 'Salim Tools',
    tag: 'Free',
    url: 'https://tools.salimtechnology.com',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    desc: 'A growing suite of fast, free online utilities — document and PDF tools and everyday helpers that just work, no sign-up required.',
  },
]

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <p className="section-label reveal">Products</p>
        <h2 className="reveal">Live products</h2>
        <p className="section-intro reveal">Working software, in production, serving real users.</p>
        <div className="products-grid">
          {products.map((p, i) => (
            <a
              className="product-card reveal"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              key={p.name}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="product-top">
                <div className="product-icon">{p.icon}</div>
                <span className={`product-tag product-tag-${p.tag.toLowerCase()}`}>{p.tag}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="product-link">
                Open {p.url.replace('https://', '').split('/')[0]} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
