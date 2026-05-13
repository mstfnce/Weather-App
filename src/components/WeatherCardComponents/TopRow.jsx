// src/components/TopRow.jsx
import { useState, useEffect } from "react";

export default function TopRow({ city, country }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const clock = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
    weekday: "short",
  });

  return (
    <div className="d-flex justify-content-between align-items-start mb-4">
      {/* Sol: Konum */}
      <div>
        <div className="d-flex align-items-center gap-2 fw-bold text-white fs-5">
          <i className="bi bi-geo-alt-fill text-danger" />
          {city}
        </div>
        <small className="text-white-50 ms-4">{country} · Türkiye</small>
      </div>

      {/* Sağ: Saat */}
      <div className="text-end">
        <div className="fw-bold text-info fs-5">{clock}</div>
        <small className="text-white-50">{date}</small>
      </div>
    </div>
  );
}
