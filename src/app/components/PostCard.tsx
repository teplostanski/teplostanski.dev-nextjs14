// src/app/components/PostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/types'

type Props = {
  post: PostMetadata
  locale: 'ru' | 'en'
}

export default function PostCard({ post, locale }: Props) {
  const href = `/projects/${post.slug}`

  return (
    <Link className='unstyled' href={href}>
      <div className='postCard'>
        <h3>{post.title}</h3>
        <Image
          src={post.img}
          alt={post.title}
          width={500}
          height={300}
          priority
        />
        <p>{post.bio}</p>
      </div>
    </Link>
  )
}
