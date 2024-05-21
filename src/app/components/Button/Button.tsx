'use client'

import React, { ReactNode, useRef, useCallback } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const createRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add(styles.ripple)

    const existingRipple = button.getElementsByClassName(styles.ripple)[0]
    if (existingRipple) {
      existingRipple.remove()
    }

    button.appendChild(circle)
  }, [])

  return (
    <button ref={buttonRef} className={styles.button} onClick={createRipple}>
      {children}
    </button>
  )
}

export default Button
