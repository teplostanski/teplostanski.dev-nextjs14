'use client'
import { PostMetadata } from '@/types'
import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import PostCard from './PostCard'
import SearchBar from './SearchBar'

type Props = {
  postMetadata: PostMetadata[]
  locale: 'ru' | 'en' // ← добавили
}

export default function Preview({ postMetadata, locale }: Props) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='postsContainer'>
        {postMetadata
          .filter((val) => val.title.includes(searchValue))
          .map((post) => (
            <PostCard
              key={nanoid()}
              post={post}
              locale={locale} // ← передаём в PostCard
            />
          ))}
      </div>
    </>
  )
}
