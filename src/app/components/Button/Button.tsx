// components/Button.tsx
'use client'

import React, {
  ReactNode,
  useRef,
  useCallback,
  ButtonHTMLAttributes,
} from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
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
    <button
      ref={buttonRef}
      className={styles.button}
      onClick={(e) => {
        createRipple(e)
        if (props.onClick) {
          props.onClick(e)
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
