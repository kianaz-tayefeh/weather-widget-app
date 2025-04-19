import { IForcast, IWeather } from '@/types/weather.type'
import { WeatherWidget } from '@/components/templates/WeatherWidget/WeatherWidget'
import { DEFAULT_CITY } from '@/constants/weather.constants'
import { getCurrentWeather, getForecastWeather } from '@/services/apis/weatherApi'
import { NotFoundData } from '@/components/uikit/NotFoundData/NotFoundData'
import { getErrorMessage } from '@/helpers/errors.helpers'
import { Layout } from '@/components/layouts/Layout'
import { WeatherForecast } from '@/components/templates/WeatherForecast/WeatherForecast'
import { getCityByIpApi } from '@/services/apis/ipApi'

type HomePageProps = {
  weather: IWeather | null
  forecast: IForcast | null
  errorMessage?: string
}

export default function HomePage(props: HomePageProps) {
  const { weather, forecast, errorMessage } = props
  console.log('HomePage props', props)

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
