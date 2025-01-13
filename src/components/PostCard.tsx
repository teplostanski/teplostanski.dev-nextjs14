// src/app/components/PostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/types'
import { useQueryState } from 'nuqs'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {
  post: PostMetadata
}

export default function PostCard({ post }: Props) {
  const searchParams = useSearchParams()
  //const [locale, setLang] = useQueryState('locale', {
  //defaultValue: 'ru',
  //history: 'push',
  //clearOnDefault: false,
  //})

  //useEffect(() => {
  //  setLang(locale)
  //}, [])

  const href = `/projects/${post.slug}?${searchParams}`

  return (
    <Link href={href}>
      <div>
        <h2>{post.title}</h2>
        {post.preview && (
          <Image
            src={post.preview}
            alt={post.title}
            width={400}
            height={300}
            priority
          />
        )}
        <p>{post.description}</p>
      </div>
    </Link>
  )
}
