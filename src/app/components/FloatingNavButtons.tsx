'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import Button from './Button/Button'
import Footer from './Footer/Footer'

const FloatingNavButtons = () => {
  const footerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const [bottomOffset, setBottomOffset] = useState(16)

  useEffect(() => {
    let callCount = 0

    /**
     * Обработчик события прокрутки, который вычисляет расстояние до нижнего края экрана
     * и устанавливает отступ для кнопки.
     */
    const handleScroll = () => {
      if (buttonRef.current && footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (footerTop <= windowHeight) {
          callCount++
          console.log(`handleScroll вызван ${callCount} раз`)
          const start = performance.now()

          const dynamicHeight =
            window.visualViewport?.height || window.innerHeight
          const newBottomOffset = dynamicHeight - footerTop
          setBottomOffset(newBottomOffset)

          const end = performance.now()
          console.log(`handleScroll длительность: ${end - start}мс`)
        } else {
          setBottomOffset(16)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.visualViewport?.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.visualViewport?.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        ref={buttonRef}
        className='floatMenu'
        style={{
          bottom: `${bottomOffset}px`,
          right: '16px',
          position: 'fixed',
          zIndex: 10000000000,
          transition: 'bottom 0.3s ease',
        }}
      >
        <Button>Жмяк✨</Button>
      </div>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </>
  )
}

export default FloatingNavButtons
