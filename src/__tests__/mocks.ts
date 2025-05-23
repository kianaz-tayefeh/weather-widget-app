import { IForecast, IWeather } from '@/types/weather.type'

export const MOCK_WEATHER: IWeather = {
  location: {
    name: 'Munich',
    region: 'Bavaria',
    country: 'Germany',
    lat: 48.1351,
    lon: 11.582,
    tz_id: 'Europe/Berlin',
    localtime_epoch: 1691008000,
    localtime: '2023-08-31 12:00',
  },
  current: {
    last_updated_epoch: 1691008000,
    last_updated: '2023-08-31 12:00',
    temp_c: 20,
    temp_f: 68,
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000,
    },
    dewpoint_c: 20,
    dewpoint_f: 68,
    heatindex_c: 20,
    heatindex_f: 68,
    windchill_c: 20,
    windchill_f: 68,
    wind_mph: 2.2,
    wind_kph: 3.6,
    wind_degree: 110,
    wind_dir: 'E',
    pressure_mb: 1010,
    pressure_in: 29.9,
    precip_mm: 0,
    precip_in: 0,
    humidity: 50,
    cloud: 0,
    feelslike_c: 20,
    feelslike_f: 68,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 2.2,
    gust_kph: 3.6,
  },
}

export const MOCK_FORECAST_WEATHER: IForecast = {
  location: {
    name: 'Munich',
    region: 'Bavaria',
    country: 'Germany',
    lat: 48.1351,
    lon: 11.582,
    tz_id: 'Europe/Berlin',
    localtime_epoch: 1691008000,
    localtime: '2023-08-31 12:00',
  },
  current: {
    is_day: 1,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 1000,
    },
  },
  forecast: {
    forecastday: [
      {
        date: '2023-08-31',
        date_epoch: 1691008000,
        day: {
          maxtemp_c: 30,
          mintemp_c: 20,
          avgtemp_c: 1,
          maxwind_kph: 1,
          totalprecip_mm: 1,
          avghumidity: 1,
          daily_chance_of_rain: 1,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
          uv: 1,
        },
      },
    ],
  },
}
