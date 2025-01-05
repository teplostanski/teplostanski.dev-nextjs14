// src/app/projects/[...slug]/page.tsx
import getPostMetadata from '@/utils/getPostMetadata'
import ClientProjectDetail from './ClientProjectDetail'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const ruPosts = getPostMetadata('src/projects/ru', 'ru')
  const enPosts = getPostMetadata('src/projects/en', 'en')

  const allParams: { slug: string[] }[] = []

  ruPosts.forEach((post) => allParams.push({ slug: [post.slug] }))
  enPosts.forEach((post) => allParams.push({ slug: [post.slug] }))

  return allParams
}

export default function ProjectsCatchAll({
  params,
}: {
  params: { slug?: string[] }
}) {
  const slug = params.slug?.[0] || ''

  // Загружаем все посты с явной локалью
  const ruPosts = getPostMetadata('src/projects/ru', 'ru')
  const enPosts = getPostMetadata('src/projects/en', 'en')
  const allPosts = [...ruPosts, ...enPosts]

  return (
    <Suspense>
      <ClientProjectDetail slug={slug} allPosts={allPosts} />
    </Suspense>
  )
}
