import { useEffect, useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WeatherCard from "./components/WeatherCardComponents/WeatherCard";
import HourlyForecast from "./components/HourlyForecastComponents/HourlyForecast";
import SunTimes from "./components/SunTimeComponents/SunTime";
import DailyForecast from "./components/DailyForecastComponents/DailyForecast";
import Loading from "./components/Loading";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const lat = 41.0082;
const lon = 28.9784;

function getWeatherIconUrl(iconCode, size = 4) {
  if (!iconCode) return null;
  const allowedSizes = [2, 4];
  const finalSize = allowedSizes.includes(size) ? size : 4;
  return `https://openweathermap.org/img/wn/${iconCode}@${finalSize}x.png`;
}

function formatTime(unix) {
  const date = new Date(unix * 1000);
  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function parseWeather(raw) {
  return {
    city: raw.name,
    country: raw.sys.country,
    temp: Math.round(raw.main.temp),
    feelsLike: Math.round(raw.main.feels_like),
    high: Math.round(raw.main.temp_max),
    low: Math.round(raw.main.temp_min),
    humidity: raw.main.humidity,
    wind: Math.round(raw.wind.speed * 3.6),
    visibility: Math.round(raw.visibility / 1000),
    uv: "—",
    sunrise: formatTime(raw.sys.sunrise),
    sunset: formatTime(raw.sys.sunset),
    condition: raw.weather[0].description,
    icon: getWeatherIconUrl(raw.weather[0].icon),
  };
}

function parseHourlyForecast(raw) {
  const list = Array.isArray(raw?.list) ? raw.list : [];
  return list.slice(0, 6).map((item, index) => ({
    label: index === 0 ? "Şimdi" : `+${index * 3}sa`,
    temp: Math.round(item.main.temp),
    icon: getWeatherIconUrl(item.weather?.[0]?.icon, 2),
  }));
}

// ---------- 5 günlük (forecast'tan) ----------
function getDayKey(dtTxt) {
  return dtTxt.split(" ")[0]; // "YYYY-MM-DD"
}

function formatWeekdayFromDateKey(dateKey) {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date
    .toLocaleDateString("tr-TR", { weekday: "short" })
    .replace(".", "");
}

function parseDailyForecastFromForecast(raw) {
  const list = Array.isArray(raw?.list) ? raw.list : [];

  const byDay = new Map();
  for (const item of list) {
    if (!item?.dt_txt) continue;
    const key = getDayKey(item.dt_txt);
    if (!byDay.has(key)) byDay.set(key, []);
    byDay.get(key).push(item);
  }

  return Array.from(byDay.entries())
    .slice(0, 5)
    .map(([dateKey, items]) => {
      let min = Infinity;
      let max = -Infinity;

      for (const it of items) {
        const t = it.main?.temp;
        if (typeof t === "number") {
          if (t < min) min = t;
          if (t > max) max = t;
        }
      }

      const noonItem =
        items.find((it) => it.dt_txt?.includes("12:00:00")) || items[0];
      const iconCode = noonItem?.weather?.[0]?.icon;

      return {
        day: formatWeekdayFromDateKey(dateKey),
        icon: getWeatherIconUrl(iconCode, 2),
        max: Number.isFinite(max) ? Math.round(max) : "—",
        min: Number.isFinite(min) ? Math.round(min) : "—",
      };
    });
}

export default function App() {
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAll() {
      setLoading(true);
      setError(null);
      try {
        if (!API_KEY) {
          throw new Error("OpenWeather API anahtarı eksik.");
        }

        const [weatherResponse, forecastResponse] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`,
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`,
          ),
        ]);

        if (!weatherResponse.ok)
          throw new Error(`Weather HTTP ${weatherResponse.status}`);
        if (!forecastResponse.ok)
          throw new Error(`Forecast HTTP ${forecastResponse.status}`);

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        setWeather(parseWeather(weatherData));
        setHourlyForecast(parseHourlyForecast(forecastData));
        setDailyForecast(parseDailyForecastFromForecast(forecastData));
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    loadAll();
  }, []);

  return (
    <div className="app-shell">
      <div className="app-orb app-orb--1" aria-hidden />
      <div className="app-orb app-orb--2" aria-hidden />

      <Header>
        <Logo />
      </Header>

      <Main>
        <div className="container py-4 py-lg-5">
          {!loading && !error && weather && (
            <header className="page-intro reveal">
              <span className="eyebrow">
                <i className="bi bi-broadcast-pin" /> Canlı Gözlem
              </span>
              <h1>
                Bugün <em>{weather.city}</em> üzerinde gökyüzü.
              </h1>
            </header>
          )}

          {loading && <Loading />}

          {error && (
            <div className="notice-error reveal" role="alert">
              <i className="bi bi-exclamation-triangle me-2" />
              {error}
            </div>
          )}

          <div className="row g-3 g-lg-4 justify-content-center align-items-stretch">
            {/* SOL */}
            <div className="col-12 col-lg-4">
              {weather && (
                <div className="reveal h-100" style={{ "--d": "0.05s" }}>
                  <WeatherCard weather={weather} />
                </div>
              )}
            </div>

            {/* ORTA */}
            <div className="col-12 col-lg-4 d-flex flex-column gap-3 gap-lg-4">
              {hourlyForecast.length > 0 && (
                <div className="reveal flex-fill d-flex" style={{ "--d": "0.15s" }}>
                  <HourlyForecast hourlyForecast={hourlyForecast} />
                </div>
              )}

              {weather && (
                <div className="reveal flex-fill d-flex" style={{ "--d": "0.25s" }}>
                  <SunTimes sunrise={weather.sunrise} sunset={weather.sunset} />
                </div>
              )}
            </div>

            {/* SAĞ */}
            <div className="col-12 col-lg-4">
              {dailyForecast.length > 0 && (
                <div className="reveal h-100" style={{ "--d": "0.35s" }}>
                  <DailyForecast items={dailyForecast} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Main>

      <Footer />
    </div>
  );
}
