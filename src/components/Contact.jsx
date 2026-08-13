import './contact.css'

const contacts = [
  {
    label: 'X (Twitter)',
    handle: '@saleemlabs',
    href: 'https://x.com/saleemlabs',
    cta: 'Follow',
  },
  {
    label: 'Email',
    handle: 'hello@salimtechnology.com',
    href: 'mailto:hello@salimtechnology.com',
    cta: 'Send email',
  },
  {
    label: 'WhatsApp',
    handle: '+234 902 648 2998',
    href: 'https://wa.me/2349026482998',
    cta: 'Chat now',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s build something.</h2>
        <p className="contact-intro">
          Tell us what you&apos;re working on. We&apos;ll get back to you quickly.
        </p>
        <div className="contact-grid">
          {contacts.map((c) => (
            <a className="contact-card" href={c.href} key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <span className="contact-label">{c.label}</span>
              <span className="contact-handle">{c.handle}</span>
              <span className="contact-cta">{c.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
