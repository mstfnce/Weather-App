// src/components/HeroRow.jsx
export default function HeroRow({
  temp,
  tempHigh,
  tempLow,
  feelsLike,
  condition,
  icon = "⛅",
}) {
  return (
    <div className="mb-3">
      {/* Büyük sıcaklık + ikon */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div
          className="text-white fw-bold lh-1"
          style={{ fontSize: 88, letterSpacing: -3 }}
        >
          {temp}
          <span
            className="fw-light opacity-75"
            style={{ fontSize: 36, verticalAlign: "super" }}
          >
            °C
          </span>
        </div>
        <div style={{ fontSize: 68 }}>{icon}</div>
      </div>

      {/* Durum */}
      <p className="text-white-50 mb-1">{condition}</p>

      {/* H / L / Hissedilen */}
      <div className="d-flex gap-3 text-white-50 small">
        <span>
          <i className="bi bi-arrow-up" />{" "}
          <strong className="text-white">{tempHigh}°</strong>
        </span>
        <span>
          <i className="bi bi-arrow-down" />{" "}
          <strong className="text-white">{tempLow}°</strong>
        </span>
        <span>
          Hissedilen <strong className="text-white">{feelsLike}°</strong>
        </span>
      </div>
    </div>
  );
}
