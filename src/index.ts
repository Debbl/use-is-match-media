import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayout'

export function useIsMatchMedia(mediaQueryString: string) {
  const [isMatch, setIsMatch] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)

    setIsMatch(mediaQueryList.matches)

    const listener = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [mediaQueryString])

  return isMatch
}
