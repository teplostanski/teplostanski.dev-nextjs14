'use client'

import { useQueryState, parseAsString } from 'nuqs'
import Preview from '@/app/components/Preview'
import { PostMetadata } from '@/types'
import { Suspense, useEffect } from 'react'

type Props = {
  allPosts: PostMetadata[]
}

export default function ClientProjectsPage({ allPosts }: Props) {
  const [locale, setSearchParam] = useQueryState(
    'locale',
    parseAsString.withDefault('en').withOptions({ history: 'push' }),
  )

  console.log(locale)

  const filteredPosts = allPosts.filter((post) => post.locale === locale)

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Preview postMetadata={filteredPosts} />
    </Suspense>
  )
}
