# React Weather App

OpenWeather API ile İstanbul için güncel hava durumu, saatlik tahmin, 5 günlük tahmin ve gün doğumu/gün batımı bilgilerini gösteren React + Vite uygulaması.

## Özellikler

- Anlık sıcaklık, hissedilen sıcaklık, nem, rüzgar ve görüş bilgileri
- Saatlik hava tahmini
- 5 günlük hava tahmini
- Gün doğumu ve gün batımı saatleri
- Bootstrap tabanlı responsive arayüz

## Kurulum

```bash
npm install
```

`.env.example` dosyasını `.env` olarak kopyalayın ve OpenWeather API anahtarınızı ekleyin:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Production build almak için:

```bash
npm run build
```

Lint kontrolü için:

```bash
npm run lint
```

## Kullanılan Teknolojiler

- React
- Vite
- Bootstrap
- Bootstrap Icons
- OpenWeather API
