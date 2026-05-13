export default function SunTimes({ sunrise, sunset }) {
  return (
    <div
      className="rounded-4 border border-white border-opacity-10 p-4 d-flex flex-column justify-content-center"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="text-white-50 small mb-3 ">🌅 GÜN IŞIĞI</div>

      <div className="row g-3 justify-content-center">
        <div className="col-6">
          <div className="p-3 rounded-4 border border-white border-opacity-10 text-center">
            <div className="text-white-50 small">GÜN DOĞUMU</div>
            <div className="text-white fw-semibold fs-5">{sunrise}</div>
          </div>
        </div>

        <div className="col-6">
          <div className="p-3 rounded-4 border border-white border-opacity-10 text-center">
            <div className="text-white-50 small">GÜN BATIMI</div>
            <div className="text-white fw-semibold fs-5">{sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
