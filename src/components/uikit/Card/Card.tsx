import React, { ReactNode } from 'react'
import { cn } from '@/helpers/common.helpers'
import styles from './Card.module.scss'
import { SizesEnum } from '@/enums/sizes'

type CardProps = {
  children: ReactNode
  size?: SizesEnum
  backgroundImage?: string
}

export const Card = (props: CardProps) => {
  const { children, size = SizesEnum.md, backgroundImage } = props

  return (
    <div
      className={cn(styles.card, styles[`padding_${size}`], styles[`rounded_${size}`])}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : '' }}
    >
      {children}
    </div>
  )
}
