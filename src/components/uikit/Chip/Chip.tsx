import React, { ReactNode } from 'react'

import styles from './Chip.module.scss'
import { SizesEnum } from '@/enums/sizes'
import { cn } from '@/helpers/common.helpers'

type ChipProps = {
  children: ReactNode
  size?: SizesEnum
}

export const Chip = (props: ChipProps) => {
  const { children, size = SizesEnum.md } = props

  return <div className={cn(styles.chip, styles[`padding_${size}`])}>{children}</div>
}
