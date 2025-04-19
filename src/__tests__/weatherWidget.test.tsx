import { MOCK_FORECAST_WEATHER, MOCK_WEATHER } from './mocks'
import { WeatherWidget } from '@/components/templates/WeatherWidget/WeatherWidget'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Weather widget component test', () => {
  test('check city', () => {
    render(<WeatherWidget weather={MOCK_WEATHER} forecast={MOCK_FORECAST_WEATHER} />)
    expect(screen.getByText(/Munich/i)).toBeInTheDocument()
  })

  test('check condition', () => {
    render(<WeatherWidget weather={MOCK_WEATHER} forecast={MOCK_FORECAST_WEATHER} />)
    expect(screen.getByText(MOCK_WEATHER.current.condition.text)).toBeInTheDocument()
  })
})
