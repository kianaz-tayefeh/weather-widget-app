import { Card } from '@/components/uikit/Card/Card'
import { Text } from '@/components/uikit/Text/Text'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faCloudRain } from '@fortawesome/free-solid-svg-icons'

import styles from './WeatherForecast.module.scss'
import { SizesEnum } from '@/enums/sizes'
import { FontsEnum } from '@/enums/fonts'
import { getForecastDayLabel, roundNumber } from '@/helpers/common.helpers'
import { IForcast } from '@/types/weather.type'
import { IMAGE_URLS } from '@/constants/weather.constants'
import { TemperatureRange } from '../TemperatureRange/TemperatureRange'
import { Chip } from '@/components/uikit/Chip/Chip'

type ForecastProps = {
  forecast: IForcast
}

export const WeatherForecast = (props: ForecastProps) => {
  const {
    forecast: {
      forecast: { forecastday },
      location,
    },
  } = props

  return (
    <Card size={SizesEnum.lg} backgroundImage={IMAGE_URLS.cloudy}>
      <div className={styles.forecastWrapper}>
        <Text font={FontsEnum.text20}>5-Day Forecast</Text>
        <div className={styles.forecastList}>
          {forecastday.map((item, index) => {
            const { date, day } = item
            const { icon, text } = day.condition

            return (
              <div key={date} className={styles.forecastItem}>
                <Text font={FontsEnum.text16}>
                  {getForecastDayLabel(date, index, location.tz_id)}
                </Text>

                <Image src={`https:${icon}`} alt={text} width={30} height={30} />

                <Chip>
                  <TemperatureRange maxtemp_c={day.maxtemp_c} mintemp_c={day.mintemp_c} />
                </Chip>

                {day.daily_chance_of_rain > 0 && (
                  <div className={styles.rainChance}>
                    <FontAwesomeIcon icon={faCloudRain} size={SizesEnum.lg} />
                    <Text>{day.daily_chance_of_rain}%</Text>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
