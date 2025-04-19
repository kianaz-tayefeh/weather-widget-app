import { useEffect } from 'react'

export const useReloadPage = (delay: number) => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload()
    }, delay)

    return () => clearInterval(interval)
  }, [delay])
}
