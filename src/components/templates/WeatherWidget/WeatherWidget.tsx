import Image from 'next/image'

import styles from './WeatherWidget.module.scss'
import { Clock } from '@/components/templates/Clock/Clock'
import { TemperatureRange } from '@/components/templates/TemperatureRange/TemperatureRange'
import { Card } from '@/components/uikit/Card/Card'
import { Chip } from '@/components/uikit/Chip/Chip'
import { Text } from '@/components/uikit/Text/Text'
import { FontsEnum } from '@/enums/fonts'
import { SizesEnum } from '@/enums/sizes'
import { getWeatherBackground, roundNumber } from '@/helpers/common.helpers'
import { IForecast, IWeather } from '@/types/weather.type'
import { faCloudRain, faDroplet, faLocationDot, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type WeatherWidgetProps = {
  weather: IWeather
  forecast: IForecast
}

export const WeatherWidget = (props: WeatherWidgetProps) => {
  const { weather, forecast } = props

  const { temp_c, humidity, wind_kph, precip_mm, condition, is_day } = weather?.current || {}

  const { day } = forecast.forecast.forecastday[0]

  const backgroundImage = getWeatherBackground(condition.code, is_day)

  return (
    <Card size={SizesEnum.lg} backgroundImage={backgroundImage}>
      <div className={styles.wrapper}>
        <div className={styles.column_1}>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} size={SizesEnum.sm} />
            <Text>
              {weather.location.name}, {weather.location.country}
            </Text>
          </div>

          <Text font={FontsEnum.header72}>{Math.round(temp_c)}°</Text>

          <Chip>
            <TemperatureRange maxtemp_c={day.maxtemp_c} mintemp_c={day.mintemp_c} />
          </Chip>
        </div>

        <div className={styles.column_2}>
          <Text>
            <Clock timezone={weather.location.tz_id} />
          </Text>
          <Card>
            <div className={styles.conditions}>
              <div className={styles.condition}>
                <Image
                  src={`https:${condition.icon}`}
                  alt={condition.text}
                  width={30}
                  height={30}
                />
                <Text>{condition.text}</Text>
              </div>

              <div className={styles.condition}>
                <FontAwesomeIcon icon={faCloudRain} size={SizesEnum.lg} />
                <Text> {precip_mm} mm</Text>
              </div>

              <div className={styles.condition}>
                <FontAwesomeIcon icon={faDroplet} size={SizesEnum.lg} />
                <Text>{roundNumber(humidity)}%</Text>
              </div>

              <div className={styles.condition}>
                <FontAwesomeIcon icon={faWind} size={SizesEnum.lg} />
                <Text>{roundNumber(wind_kph)}km/h</Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  )
}
