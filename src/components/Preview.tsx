// src/app/components/Preview.tsx
'use client'
import { PostMetadata } from '@/types'
import { nanoid } from 'nanoid'
import React from 'react'
import PostCard from './PostCard'
import { parseAsString, useQueryState } from 'nuqs'

type Props = {
  title: string
  locale: 'en' | 'ru'
  postMetadata: PostMetadata[]
}

export default function Preview({ title, locale, postMetadata }: Props) {
  const filteredPosts = postMetadata.filter((post) =>
    post.slug.endsWith(`_${locale}`),
  )

  return (
    <>
      <div>
        <h1>{title}</h1>
        {filteredPosts.map((post) => (
          <div key={nanoid()}>
            <PostCard post={post} />
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}
