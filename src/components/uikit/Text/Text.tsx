import React, { ReactNode } from 'react'

import styles from './Text.module.scss'
import { ColorsEnum } from '@/enums/colors'
import { FontsEnum } from '@/enums/fonts'
import { cn } from '@/helpers/common.helpers'

type TextProps = {
  children: ReactNode
  font?: FontsEnum
  color?: ColorsEnum
}

export const Text = (props: TextProps) => {
  const { children, font = FontsEnum.text16, color = ColorsEnum.white } = props

  return (
    <div className={cn(styles.text)} style={{ font, color }}>
      {children}
    </div>
  )
}
