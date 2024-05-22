import { useEffect, useState, RefObject } from 'react'

const useStickyButton = (
  buttonRef: RefObject<HTMLDivElement>,
  footerRef: RefObject<HTMLElement>,
) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current && footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top
        const buttonHeight = buttonRef.current.offsetHeight
        const windowHeight = window.innerHeight

        if (footerTop <= windowHeight - buttonHeight) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [buttonRef, footerRef])

  return isSticky
}

export default useStickyButton
