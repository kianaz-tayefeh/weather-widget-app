import { useEffect, useState } from 'react'

import { formatLocalTime } from '@/helpers/common.helpers'

type ClockProps = {
  timezone: string
}

export const Clock = (props: ClockProps) => {
  const { timezone } = props

  const [time, setTime] = useState(formatLocalTime(timezone))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatLocalTime(timezone))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return <span>{time}</span>
}
