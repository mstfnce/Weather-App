// src/components/StatGrid.jsx
import StatItem from "./StatItem";

export default function StatGrid({ humidity, wind, visibility, uv }) {
  const stats = [
    {
      icon: "bi-droplet-fill",
      value: humidity != null ? `${humidity}%` : "—",
      label: "Nem",
      accent: "primary",
    },
    {
      icon: "bi-wind",
      value: wind != null ? `${wind} km/s` : "—",
      label: "Rüzgar",
      accent: "info",
    },
    {
      icon: "bi-eye-fill",
      value: visibility != null ? `${visibility} km` : "—",
      label: "Görüş",
      accent: "success",
    },
    {
      icon: "bi-sun-fill",
      value: uv != null ? String(uv) : "—",
      label: "UV Endeksi",
      accent: "warning",
    },
  ];

  return (
    <div className="row g-2">
      {stats.map((s) => (
        <div className="col-6" key={s.label}>
          <StatItem {...s} />
        </div>
      ))}
    </div>
  );
}
