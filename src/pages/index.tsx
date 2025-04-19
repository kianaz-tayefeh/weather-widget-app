import { Layout } from '@/components/layouts/Layout'
import { WeatherForecast } from '@/components/templates/WeatherForecast/WeatherForecast'
import { WeatherWidget } from '@/components/templates/WeatherWidget/WeatherWidget'
import { NotFoundData } from '@/components/uikit/NotFoundData/NotFoundData'
import { RELOAD_DELAY } from '@/constants/weather.constants'
import { getErrorMessage } from '@/helpers/errors.helpers'
import { useReloadPage } from '@/hooks/useReloadPage'
import { getCityByIpApi } from '@/services/apis/ipApi'
import { getCurrentWeather, getForecastWeather } from '@/services/apis/weatherApi'
import { IForecast, IWeather } from '@/types/weather.type'

type HomePageProps = {
  weather: IWeather | null
  forecast: IForecast | null
  errorMessage?: string
}

export default function HomePage(props: HomePageProps) {
  const { weather, forecast, errorMessage } = props
  console.log('HomePage props', props)

  useReloadPage(RELOAD_DELAY)
  console.log(forecast)

  if (!weather || !forecast) return <NotFoundData errorMessage={errorMessage} />

  return (
    <Layout>
      <WeatherWidget weather={weather} forecast={forecast} />
      <WeatherForecast forecast={forecast} />
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const { city } = await getCityByIpApi()
    const weather = await getCurrentWeather(city)
    const forecast = await getForecastWeather(city)

    return {
      props: {
        weather,
        forecast,
      },
    }
  } catch (error) {
    return {
      props: {
        weather: null,
        forecast: [],
        errorMessage: getErrorMessage(error),
      },
    }
  }
}
