'use client'

import { useQueryState, parseAsString } from 'nuqs'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import { PostMetadata } from '@/types'
import { Suspense } from 'react'

type Props = {
  slug: string
  allPosts: PostMetadata[]
}

export default function ClientProjectDetail({ slug, allPosts }: Props) {
  const [locale] = useQueryState('locale', parseAsString.withDefault('en'))

  // Найти пост по slug и locale
  const post = allPosts.find(
    (post) => post.slug === slug && post.locale === locale,
  )

  if (!post) {
    return <h1>404 Not Found</h1>
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MarkdownRender content={post.content} />
    </Suspense>
  )
}
