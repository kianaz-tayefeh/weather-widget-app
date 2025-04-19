import Image from 'next/image'

import styles from './WeatherForecast.module.scss'
import { TemperatureRange } from '@/components/templates/TemperatureRange/TemperatureRange'
import { Card } from '@/components/uikit/Card/Card'
import { Chip } from '@/components/uikit/Chip/Chip'
import { Text } from '@/components/uikit/Text/Text'
import { FORCAST_DAYS } from '@/constants/weather.constants'
import { FontsEnum } from '@/enums/fonts'
import { SizesEnum } from '@/enums/sizes'
import { getForecastDayLabel, getWeatherBackground } from '@/helpers/common.helpers'
import { IForecast } from '@/types/weather.type'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ForecastProps = {
  forecast: IForecast
}

export const WeatherForecast = (props: ForecastProps) => {
  const {
    forecast: {
      forecast: { forecastday },
      location,
      current: { condition, is_day },
    },
  } = props

  const backgroundImage = getWeatherBackground(condition.code, is_day)

  return (
    <Card size={SizesEnum.lg} backgroundImage={backgroundImage}>
      <div className={styles.forecastWrapper}>
        <Text font={FontsEnum.text20}>{forecastday.length} Day(s) Forecast</Text>
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
