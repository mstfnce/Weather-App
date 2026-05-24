import { useEffect, useState } from "react";

// "HH:MM" -> dakika (gün başından beri)
function toMinutes(hhmm) {
  if (typeof hhmm !== "string") return null;
  const [h, m] = hhmm.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

// Quadratic bézier üzerindeki nokta (yay görselleştirmesi için)
function arcPoint(t) {
  const p0 = { x: 8, y: 50 };
  const p1 = { x: 50, y: -26 };
  const p2 = { x: 92, y: 50 };
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
}

export default function SunTimes({ sunrise, sunset }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(t);
  }, []);

  const rise = toMinutes(sunrise);
  const set = toMinutes(sunset);
  const cur = now.getHours() * 60 + now.getMinutes();

  let progress = 0.5;
  if (rise != null && set != null && set > rise) {
    progress = (cur - rise) / (set - rise);
  }
  progress = Math.min(1, Math.max(0, progress));

  const dot = arcPoint(progress);

  return (
    <div className="panel d-flex flex-column">
      <span className="eyebrow">
        <i className="bi bi-brightness-high" /> Gün Işığı
      </span>

      <div className="sun-arc-wrap">
        <svg className="sun-arc" viewBox="0 0 100 56" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5b8cff" />
              <stop offset="55%" stopColor="#f6a25c" />
              <stop offset="100%" stopColor="#c06a9e" />
            </linearGradient>
          </defs>

          <path
            className="sun-arc-track"
            d="M 8 50 Q 50 -26 92 50"
            pathLength="100"
          />
          <path
            className="sun-arc-fill"
            d="M 8 50 Q 50 -26 92 50"
            pathLength="100"
            strokeDasharray={`${progress * 100} 100`}
          />
          <circle className="sun-dot" cx={dot.x} cy={dot.y} r="4.5" />
        </svg>
      </div>

      <div className="sun-row">
        <div className="sun-cell sun-cell--start">
          <div className="sun-cap">
            <i className="bi bi-sunrise me-1" />
            Doğuş
          </div>
          <div className="sun-time">{sunrise}</div>
        </div>
        <div className="sun-cell sun-cell--end">
          <div className="sun-cap">
            Batış
            <i className="bi bi-sunset ms-1" />
          </div>
          <div className="sun-time">{sunset}</div>
        </div>
      </div>
    </div>
  );
}
