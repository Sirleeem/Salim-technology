import { useState } from 'react'
import './contact.css'

// FormSubmit AJAX endpoint (free tier) — delivers to hello@salimtechnology.com.
// First submission sends a one-time confirmation email to that inbox; click
// the link inside to activate. No account or access key required.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@salimtechnology.com'

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
  const [form, setForm] = useState({ name: '', email: '', message: '', botcheck: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'New project inquiry — salimtechnology.com',
          _template: 'table',
          _captcha: 'false',
          _honey: form.botcheck,
        }),
      })
      const data = await res.json()
      setStatus(data.success === true || data.success === 'true' ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="reveal">Ready to build something that lasts?</h2>
        <p className="contact-intro reveal">Tell us about your project. We&apos;ll respond with clear next steps.</p>
        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input
              type="text"
              name="botcheck"
              className="hp-field"
              tabIndex={-1}
              autoComplete="off"
              value={form.botcheck}
              onChange={handleChange}
            />
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project." />
            </label>
            {status === 'error' && (
              <p className="form-error" role="alert">
                Something went wrong. Please try again, or email us directly at hello@salimtechnology.com.
              </p>
            )}
            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Start a project'}
            </button>
            {status === 'success' && (
              <p className="form-success" role="status">Message sent. We&apos;ll get back to you shortly.</p>
            )}
          </form>
          <div className="contact-cards">
            {contacts.map((c) => (
              <a className="contact-card reveal" href={c.href} key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="contact-label">{c.label}</span>
                <span className="contact-handle">{c.handle}</span>
                <span className="contact-cta">{c.cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
