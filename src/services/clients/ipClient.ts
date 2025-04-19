import axios from 'axios'

const { NEXT_PUBLIC_IP_API_URL } = process.env

if (!NEXT_PUBLIC_IP_API_URL) {
  throw new Error('IP API key is missing in .env')
}

export const ipClient = axios.create({
  baseURL: NEXT_PUBLIC_IP_API_URL,
})
