export default function DailyForecast({ items = [] }) {
  return (
    <div
      className="rounded-4 border border-white border-opacity-10 p-4 d-flex flex-column"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header */}
      <div className="d-flex align-items-center gap-2 text-white-50 small mb-3">
        <span aria-hidden>🗓️</span>
        <span className="text-uppercase" style={{ letterSpacing: 0.6 }}>
          5 GÜNLÜK TAHMİN
        </span>
      </div>

      {/* Rows (fills remaining height) */}
      <div className="d-flex flex-column gap-2 flex-grow-1">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center justify-content-between rounded-3 px-3 border border-white border-opacity-10 flex-grow-1"
            style={{
              background: "rgba(0,0,0,0.12)",
              minHeight: 0, // taşma olursa düzeltir
            }}
          >
            {/* Day */}
            <div className="text-white-50" style={{ width: 60 }}>
              {it.day}
            </div>

            {/* Icon */}
            <div
              className="d-flex justify-content-center"
              style={{ width: 70 }}
            >
              {it.icon ? (
                <img
                  src={it.icon}
                  alt=""
                  width={24}
                  height={24}
                  style={{ opacity: 0.95 }}
                />
              ) : (
                <span className="text-white-50">•</span>
              )}
            </div>

            {/* Temps */}
            <div
              className="d-flex justify-content-end align-items-center gap-2"
              style={{ width: 90 }}
            >
              <span className="text-white fw-semibold">{it.max}°</span>
              <span className="text-white-50">{it.min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
