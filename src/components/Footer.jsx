// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-top border-white border-opacity-10 bg-dark py-4">
      <div className="container">
        <div className="row align-items-center gy-3 text-center text-md-start">
          {/* Sol */}
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i className="bi bi-cloud-sun-fill text-info fs-5"></i>
              <span className="fw-semibold text-white">HavaDurumu</span>
            </div>
            <small className="text-white-50 d-block mt-1">
              Gerçek zamanlı hava durumu uygulaması
            </small>
          </div>

          {/* Orta */}
          <div className="col-md-4 text-center">
            <small className="text-white-50">
              © {new Date().getFullYear()} · OpenWeatherMap API
            </small>
          </div>

          {/* Sağ */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
