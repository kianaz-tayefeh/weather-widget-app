import { IMAGE_URLS, TIME_FORMAT } from '../constants/weather.constants'
import { format as formatTz, toZonedTime } from 'date-fns-tz'

export const formatLocalTime = (
  timeZone: string,
  date = new Date(),
  format: string = TIME_FORMAT,
): string => {
  const zonedDate = toZonedTime(date, timeZone)

  return formatTz(zonedDate, format, { timeZone })
}

export const getForecastDayLabel = (dateStr: string, index: number, timeZone = 'UTC'): string => {
  if (index === 0) return 'Today'
  const zonedDate = toZonedTime(new Date(dateStr), timeZone)
  return formatTz(zonedDate, 'EEEE', { timeZone })
}

export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const roundNumber = (num: number, digits = 0): number => {
  const factor = 10 ** digits

  return Math.round(num * factor) / factor
}

export const getWeatherBackground = (conditionCode: number, isDay: number): string => {
  if (!isDay) return IMAGE_URLS.night

  if (conditionCode === 1000) return IMAGE_URLS.sunny

  return IMAGE_URLS.cloudy
}
