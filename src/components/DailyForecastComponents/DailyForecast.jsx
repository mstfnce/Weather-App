export default function DailyForecast({ items = [] }) {
  // Tüm günlerin global min/max'ı — aralık çubuklarını ölçeklemek için
  const temps = items.flatMap((it) =>
    [it.min, it.max].filter((t) => typeof t === "number"),
  );
  const gMin = temps.length ? Math.min(...temps) : 0;
  const gMax = temps.length ? Math.max(...temps) : 1;
  const span = gMax - gMin || 1;

  return (
    <div className="panel d-flex flex-column">
      <span className="eyebrow">
        <i className="bi bi-calendar3" /> 5 Günlük Tahmin
      </span>

      <div className="daily-list">
        {items.map((it, idx) => {
          const hasRange =
            typeof it.min === "number" && typeof it.max === "number";
          const left = hasRange ? ((it.min - gMin) / span) * 100 : 0;
          const width = hasRange ? ((it.max - it.min) / span) * 100 : 0;

          return (
            <div key={idx} className="daily-row">
              <span className="daily-day">{it.day}</span>

              {it.icon ? (
                <img src={it.icon} alt="" />
              ) : (
                <span className="text-center" aria-hidden>
                  ·
                </span>
              )}

              <div className="range-track">
                <span
                  className="range-fill"
                  style={{
                    left: `${left}%`,
                    width: `${Math.max(width, 6)}%`,
                  }}
                />
              </div>

              <div className="daily-temps">
                {it.max}°<span className="lo">{it.min}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
