// src/app/projects/page.tsx
import getPostMetadata from '@/utils/getPostMetadata'
import ClientProjectsPage from './ClientProjectsPage'
import { Suspense } from 'react'

export default function ProjectsPage() {
  const ruPosts = getPostMetadata('src/projects/ru', 'ru')
  const enPosts = getPostMetadata('src/projects/en', 'en')
  const allPosts = [...ruPosts, ...enPosts]

  return (
    <Suspense>
      <ClientProjectsPage allPosts={allPosts} />
    </Suspense>
  )
}
