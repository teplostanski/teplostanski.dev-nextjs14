// components/BackButton.tsx
'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { LuArrowLeft } from 'react-icons/lu'
import styles from './BackButton.module.scss'

const BackButton = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setShowButton(pathname !== '/')
  }, [pathname])

  const handleBackClick = () => {
    router.back()
  }

  if (!showButton) {
    return null
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleBackClick}>
        <LuArrowLeft className={styles.arrow} />
        Назад
      </Button>
    </div>
  )
}

export default BackButton
