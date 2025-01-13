'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      type='button'
      onClick={() => router.back()}
      style={{
        background: 'none',
        border: 'none',
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer',
        padding: 0,
      }}
    >
      &lt; назад
    </button>
  )
}
