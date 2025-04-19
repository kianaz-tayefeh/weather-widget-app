import { ReactNode } from 'react'

import styles from './Layout.module.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return <div className={styles.layout}>{children}</div>
}
