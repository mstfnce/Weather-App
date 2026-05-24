// src/components/StatItem.jsx
export default function StatItem({ icon, value, label, tone = "humidity" }) {
  return (
    <div className="stat-tile">
      <div className={`stat-ico stat-ico--${tone}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <div className="stat-val">{value}</div>
        <div className="stat-lab">{label}</div>
      </div>
    </div>
  );
}
