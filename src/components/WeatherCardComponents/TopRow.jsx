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
    <div className="d-flex justify-content-between align-items-start">
      {/* Sol: Konum */}
      <div>
        <div className="loc-name">
          <i className="bi bi-geo-alt-fill" />
          {city}
        </div>
        <div className="loc-sub">{country} · Türkiye</div>
      </div>

      {/* Sağ: Saat */}
      <div>
        <div className="clock">{clock}</div>
        <div className="clock-date">{date}</div>
      </div>
    </div>
  );
}
