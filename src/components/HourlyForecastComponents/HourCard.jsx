export default function HourCard({ label, temp, icon }) {
  return (
    <div className="text-center p-3 border border-white border-opacity-10 rounded-4">
      <div className="text-white-50 small">{label}</div>

      <img src={icon} alt="" width={40} />

      <div className="text-white fw-semibold">{temp}°</div>
    </div>
  );
}
