import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/assets/salim-icon.svg" alt="" className="footer-icon" />
          <span>Salim Technology</span>
        </div>
        <div className="footer-links">
          <a href="https://x.com/saleemlabs" target="_blank" rel="noreferrer">X</a>
          <a href="mailto:hello@salimtechnology.com">Email</a>
          <a href="https://wa.me/2349026482998" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Salim Technology. All rights reserved.</p>
      </div>
    </footer>
  )
}
