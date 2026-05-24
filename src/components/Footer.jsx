// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center gy-3 text-center text-md-start">
          {/* Sol */}
          <div className="col-md-4">
            <span className="footer-brand">
              <i className="bi bi-compass" />
              Meridian
            </span>
            <div className="footer-note mt-1">Gerçek zamanlı atmosfer takibi</div>
          </div>

          {/* Orta */}
          <div className="col-md-4 text-center">
            <span className="footer-note">
              © {new Date().getFullYear()} · OpenWeatherMap
            </span>
          </div>

          {/* Sağ */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <a href="#" className="social-btn" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a href="#" className="social-btn" aria-label="X">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
