import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { WeatherWidget } from '@/components/templates/WeatherWidget/WeatherWidget'
import { MOCK_WEATHER } from './mocks'

describe('Weather widget component test', () => {
  test('check city', () => {
    render(<WeatherWidget weather={MOCK_WEATHER} />)
    expect(screen.getByText(/Munich/i)).toBeInTheDocument()
  })

  test('check condition', () => {
    render(<WeatherWidget weather={MOCK_WEATHER} />)
    expect(screen.getByText(MOCK_WEATHER.current.condition.text)).toBeInTheDocument()
  })
})
