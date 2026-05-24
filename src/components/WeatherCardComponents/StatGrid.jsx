// src/components/StatGrid.jsx
import StatItem from "./StatItem";

export default function StatGrid({ humidity, wind, visibility, uv }) {
  const stats = [
    {
      icon: "bi-droplet-fill",
      value: humidity != null ? `${humidity}%` : "—",
      label: "Nem",
      tone: "humidity",
    },
    {
      icon: "bi-wind",
      value: wind != null ? `${wind} km/s` : "—",
      label: "Rüzgar",
      tone: "wind",
    },
    {
      icon: "bi-eye-fill",
      value: visibility != null ? `${visibility} km` : "—",
      label: "Görüş",
      tone: "visibility",
    },
    {
      icon: "bi-sun-fill",
      value: uv != null ? String(uv) : "—",
      label: "UV Endeksi",
      tone: "uv",
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
