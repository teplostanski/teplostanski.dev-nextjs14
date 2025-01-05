// src/app/components/Preview.tsx
'use client'
import { PostMetadata } from '@/types'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import PostCard from './PostCard'
import SearchBar from './SearchBar'
import { parseAsString, useQueryState } from 'nuqs'

type Props = {
  postMetadata: PostMetadata[]
}

export default function Preview({ postMetadata }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const [locale] = useQueryState('locale', parseAsString.withDefault('en'))

  const filteredPosts = postMetadata.filter(
    (post) =>
      post.title.includes(searchValue) && post.slug.endsWith(`_${locale}`), // Фильтрация по локали
  )

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='postsContainer'>
        {filteredPosts.map((post) => (
          <PostCard key={nanoid()} post={post} locale={locale as 'en' | 'ru'} />
        ))}
      </div>
    </>
  )
}
