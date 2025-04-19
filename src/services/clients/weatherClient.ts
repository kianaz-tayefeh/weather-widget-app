import axios from 'axios'

const { NEXT_PUBLIC_WEATHER_API_KEY: API_KEY, NEXT_PUBLIC_WEATHER_API_URL: BASE_URL } = process.env

if (!API_KEY || !BASE_URL) {
  throw new Error('Weather API key or base URL is missing in .env')
}

export const weatherClient = axios.create({
  baseURL: BASE_URL,
  params: { key: API_KEY },
})
