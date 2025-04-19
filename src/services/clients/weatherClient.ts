import axios from 'axios'

const { NEXT_PUBLIC_WEATHER_API_KEY, NEXT_PUBLIC_WEATHER_API_URL } = process.env

if (!NEXT_PUBLIC_WEATHER_API_KEY || !NEXT_PUBLIC_WEATHER_API_URL) {
  throw new Error('Weather API key or base URL is missing in .env')
}

export const weatherClient = axios.create({
  baseURL: NEXT_PUBLIC_WEATHER_API_URL,
  params: { key: NEXT_PUBLIC_WEATHER_API_KEY },
})
