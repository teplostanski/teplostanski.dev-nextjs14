import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/types'

type Props = {
  post: PostMetadata
  locale: 'ru' | 'en'
}

export default function PostCard({ post, locale }: Props) {
  // Если 'en', то ссылка должна быть /projects/en/slug
  // Иначе /projects/slug
  const href =
    locale === 'en' ? `/projects/en/${post.slug}` : `/projects/${post.slug}`

  return (
    <Link className='unstyled' href={href}>
      <div className='postCard'>
        <h3>{post.title}</h3>
        <Image
          src={post.img}
          alt={post.title}
          //style={{ width: '100%', height: '60%', objectFit: 'cover' }}
          width={500}
          height={300}
          priority
        />
        <p>{post.bio}</p>
        <div className='statsContainer'>
          <div>
            <h5>Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5>Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
