import styles from './Layout.module.scss'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { children } = props

  return <div className={styles.layout}>{children}</div>
}
