// src/components/HeroRow.jsx
export default function HeroRow({
  temp,
  tempHigh,
  tempLow,
  feelsLike,
  condition,
  icon,
}) {
  return (
    <div className="mt-3">
      {/* Büyük sıcaklık + ikon */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="temp-hero">
          {temp}
          <span className="temp-unit">°C</span>
        </div>
        <div>{icon}</div>
      </div>

      {/* Durum */}
      <p className="condition">{condition}</p>

      {/* H / L / Hissedilen */}
      <div className="meta-row">
        <span>
          <i className="bi bi-arrow-up-short up" />
          <strong>{tempHigh}°</strong>
        </span>
        <span>
          <i className="bi bi-arrow-down-short down" />
          <strong>{tempLow}°</strong>
        </span>
        <span>
          Hissedilen <strong>{feelsLike}°</strong>
        </span>
      </div>
    </div>
  );
}
