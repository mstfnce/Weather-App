import HourCard from "./HourCard";

export default function HourlyForecast({ hourlyForecast }) {
  return (
    <div
      className="rounded-4 border border-white border-opacity-10 p-4 d-flex flex-column"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        width: "100%",
      }}
    >
      {/* Başlık */}
      <div className="text-white-50 small mb-3">⏰ SAATLİK TAHMİN</div>

      {/* Kartlar */}
      <div className="d-flex gap-3 overflow-auto">
        {hourlyForecast.map((item, index) => (
          <HourCard
            key={index}
            label={item.label}
            temp={item.temp}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
