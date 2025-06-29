'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '../Spinner/Spinner'

interface Props {
  children: React.ReactNode
}

export const StoreInitializer = ({ children }: Props) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return <Spinner type="full" absolute />
  }

  return children
}
