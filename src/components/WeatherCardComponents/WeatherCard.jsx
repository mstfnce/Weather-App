// src/components/WeatherCard.jsx
import TopRow from "./TopRow";
import HeroRow from "./HeroRow";
import StatGrid from "./StatGrid";

export default function WeatherCard({ weather }) {
  return (
    <div className="panel panel--hero">
      <TopRow city={weather.city} country={weather.country} />
      <HeroRow
        temp={weather.temp}
        tempHigh={weather.high}
        tempLow={weather.low}
        feelsLike={weather.feelsLike}
        condition={weather.condition}
        icon={
          weather.icon ? (
            <img src={weather.icon} alt={weather.condition} className="hero-icon" />
          ) : null
        }
      />
      <hr className="hairline" />
      <StatGrid
        humidity={weather.humidity}
        wind={weather.wind}
        visibility={weather.visibility}
        uv={weather.uv}
      />
    </div>
  );
}
