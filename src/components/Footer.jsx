import '../css/footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Social dan Kontak */}
        <div className="footer-content">
          <div className="social-section">
            <span className="follow-text">Follow Sosial Media Kami:</span>
            <div className="social-links">
              <a href="#" className="social-item">
                <img src={`${import.meta.env.BASE_URL}assets/icons/instagram.svg`} alt="Instagram" />
                
              </a>
              <a href="#" className="social-item">
                <img src={`${import.meta.env.BASE_URL}assets/icons/facebook.svg`} alt="Facebook" />
              </a>
              <a href="#" className="social-item">
                <img src={`${import.meta.env.BASE_URL}assets/icons/whatsapp.svg`} alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div className="contact-section">
            <span className="contact-item">📧 info@krisnarun.com</span>
            <span className="contact-item">📱 +62 812 3456 789</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p>Copyright ©2025 Krisna Run 2025 | Kawara Sport | BONK</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer