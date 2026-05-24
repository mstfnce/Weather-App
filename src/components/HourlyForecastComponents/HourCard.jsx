export default function HourCard({ label, temp, icon, isNow = false }) {
  return (
    <div className={`hour-card${isNow ? " hour-card--now" : ""}`}>
      <div className="hour-label">{label}</div>
      {icon && <img src={icon} alt="" />}
      <div className="hour-temp">{temp}°</div>
    </div>
  );
}
