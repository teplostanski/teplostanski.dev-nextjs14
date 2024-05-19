'use client'
import Image from 'next/image'
import fancy from './fancy.svg'
import cn from 'classnames'
import ava from '/public/images/ava.png'
import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'

import styles from './Main.module.scss'
import { initialQuotes } from './Main.constants'

const Main = () => {
  const [quotes, setQuotes] = useState(initialQuotes)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [showTypeAnimation, setShowTypeAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypeAnimation(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showTypeAnimation && currentQuoteIndex === 0) {
      setTimeout(() => {
        setCurrentQuoteIndex(1)
        setQuotes((prevQuotes) => prevQuotes.slice(1))
      }, 5000 + 6000)
    } else if (showTypeAnimation) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
      }, 15000)

      return () => clearInterval(interval)
    }
  }, [showTypeAnimation, currentQuoteIndex, quotes])

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <Image className={styles.fancy} src={fancy} alt='fancy' priority />
          <Image className={styles.image} src={ava} alt='me' priority />
          <div className={styles.autotypeContainer}>
            <div className={cn(styles.autotype, styles.autotype__first)}>
              <TypeAnimation
                sequence={[
                  `Привет! Я Игорь Теплостанский,\nFrontend разработчик`,
                  1000,
                ]}
                wrapper='span'
                cursor={true}
                repeat={0}
              />
            </div>
            {showTypeAnimation && (
              <div className={cn(styles.autotype, styles.autotype__second)}>
                <TypeAnimation
                  key={quotes[currentQuoteIndex]}
                  sequence={[quotes[currentQuoteIndex], 6000]}
                  wrapper='span'
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
