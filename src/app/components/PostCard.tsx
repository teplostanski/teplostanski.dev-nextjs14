import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '@/types'
import { basePath } from '@/constants'

export default function PostCard({ post }: PostMetadata) {
  return (
    <Link className='unstyled' href={`/projects/${post.slug}`}>
      <div className='postCard'>
        <h3>{post.title}</h3>
        <Image
          src={`${basePath}${post.img}`}
          alt={post.title}
          sizes='(max-width: 750px)'
          style={{
            width: '100%',
            height: '60%',
            objectFit: 'cover',
          }}
          width={500}
          height={300}
          priority={true}
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
