import styles from './TemperatureRange.module.scss'
import { Text } from '@/components/uikit/Text/Text'
import { FontsEnum } from '@/enums/fonts'
import { SizesEnum } from '@/enums/sizes'
import { roundNumber } from '@/helpers/common.helpers'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type TemperatureRangeProps = {
  maxtemp_c: number
  mintemp_c: number
}

export const TemperatureRange = (props: TemperatureRangeProps) => {
  const { maxtemp_c, mintemp_c } = props

  return (
    <div className={styles.temperature_range}>
      <div className={styles.tempHigh}>
        <FontAwesomeIcon icon={faArrowUp} size={SizesEnum.lg} />
        <Text font={FontsEnum.text20}>{roundNumber(maxtemp_c)}°</Text>
      </div>
      <div className={styles.tempLow}>
        <FontAwesomeIcon icon={faArrowDown} size={SizesEnum.lg} />
        <Text font={FontsEnum.text20}>{roundNumber(mintemp_c)}°</Text>
      </div>
    </div>
  )
}
