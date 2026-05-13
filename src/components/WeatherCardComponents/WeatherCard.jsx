// src/components/WeatherCard.jsx
import TopRow from "./TopRow";
import HeroRow from "./HeroRow";
import StatGrid from "./StatGrid";

export default function WeatherCard({ weather }) {
  return (
    <div
      className="rounded-4 border border-white border-opacity-10 p-4  "
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        width: "100%",
      }}
    >
      <TopRow city={weather.city} country={weather.country} />
      <HeroRow
        temp={weather.temp}
        tempHigh={weather.high}
        tempLow={weather.low}
        feelsLike={weather.feelsLike}
        condition={weather.condition}
        icon={<img src={weather.icon} alt={weather.condition} />}
      />
      <hr className="border-white border-opacity-10 my-3" />
      <StatGrid
        humidity={weather.humidity}
        wind={weather.wind}
        visibility={weather.visibility}
        uv={weather.uv}
      />
    </div>
  );
}
