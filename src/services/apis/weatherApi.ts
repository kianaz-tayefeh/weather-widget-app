import { weatherClient } from '../clients/weatherClient'
import { FORCAST_DAYS } from '@/constants/weather.constants'
import { IForecast, IWeather } from '@/types/weather.type'
import { AxiosResponse } from 'axios'

const WEATHER_API_SEGMENTS = {
  // We can easily add more segments for other weather data
  current: 'current.json',
  forecast: 'forecast.json',
}

export const getCurrentWeather = async (city: string): Promise<AxiosResponse<IWeather>> => {
  const response = await weatherClient.get(WEATHER_API_SEGMENTS.current, {
    params: { q: city },
  })

  return response.data
}

export const getForecastWeather = async (city: string): Promise<IForecast> => {
  const response = await weatherClient.get(WEATHER_API_SEGMENTS.forecast, {
    params: { days: FORCAST_DAYS, q: city },
  })

  return response.data
}
