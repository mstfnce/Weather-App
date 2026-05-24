import HourCard from "./HourCard";

export default function HourlyForecast({ hourlyForecast }) {
  return (
    <div className="panel">
      <span className="eyebrow">
        <i className="bi bi-clock-history" /> Saatlik Tahmin
      </span>

      <div className="hour-strip">
        {hourlyForecast.map((item, index) => (
          <HourCard
            key={index}
            label={item.label}
            temp={item.temp}
            icon={item.icon}
            isNow={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
