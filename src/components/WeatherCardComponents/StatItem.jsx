// src/components/StatItem.jsx
export default function StatItem({ icon, value, label, accent = "primary" }) {
  return (
    <div className="d-flex align-items-center gap-3 p-3 rounded-3 border border-white border-opacity-10 bg-white bg-opacity-10">
      <div
        className={`d-flex align-items-center justify-content-center rounded-2 bg-${accent} bg-opacity-25 text-${accent}`}
        style={{ width: 40, height: 40, fontSize: 18 }}
      >
        <i className={`bi ${icon}`} />
      </div>
      <div className="d-flex flex-column gap-1">
        <span className="fw-bold text-white" style={{ fontSize: 17 }}>
          {value}
        </span>
        <span
          className="text-white-50 text-uppercase"
          style={{ fontSize: 10, letterSpacing: "0.12em" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
