// components/ResponsiveWrapper.tsx
'use client'

import { ReactNode, useEffect, useState } from 'react'
import useScreenWidthStore from '@/store/useScreenWidthStore'
import FloatingNavButtons from './FloatingNavButtons'
import Footer from './Footer/Footer'

interface ResponsiveWrapperProps {
  children: ReactNode
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children }) => {
  const setWidth = useScreenWidthStore((state) => state.setWidth)
  const width = useScreenWidthStore((state) => state.width)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth])

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <>
      <div id='content'>{children}</div>

      {showContent && (width <= 480 ? <FloatingNavButtons /> : <Footer />)}
    </>
  )
}

export default ResponsiveWrapper
