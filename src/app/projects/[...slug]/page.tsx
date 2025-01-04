// src/app/projects/[...slug]/page.tsx
// Один файл, обрабатывает /projects/slug, /projects/en, /projects/en/slug

import { getPostContent } from '@/utils/getPostContent'
import getPostMetadata from '@/utils/getPostMetadata'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import Preview from '@/app/components/Preview'
import { Slug } from '@/types'

/**
 * Генерируем все пути, кроме /projects (потому что /projects -- в page.tsx).
 *
 * - [ruSlug]              => /projects/ruSlug    (RU деталь)
 * - ['en']                => /projects/en        (EN список)
 * - ['en', enSlug]        => /projects/en/enSlug (EN деталь)
 */
export async function generateStaticParams() {
  const ruPosts = getPostMetadata('src/projects/ru')
  const enPosts = getPostMetadata('src/projects/en')

  const allParams: { slug: string[] }[] = []

  // RU детальные: /projects/[slug]
  // (не пустой, не 'en')
  ruPosts.forEach((post) => {
    allParams.push({ slug: [post.slug] })
  })

  // EN список: /projects/en
  allParams.push({ slug: ['en'] })

  // EN детальные: /projects/en/[slug]
  enPosts.forEach((post) => {
    allParams.push({ slug: ['en', post.slug] })
  })

  return allParams
}

/**
 * Мета-теги на основе slug.
 */
export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] }
}) {
  const slug = params.slug || []
  let title = 'Projects'

  // /projects/[slug] (RU деталь)
  if (slug.length === 1 && slug[0] !== 'en') {
    title = `${slug[0].replaceAll('_', ' ')} ⋅ Projects (RU)`
  }
  // /projects/en (EN список)
  else if (slug.length === 1 && slug[0] === 'en') {
    title = 'Projects (EN)'
  }
  // /projects/en/[slug] (EN деталь)
  else if (slug.length === 2 && slug[0] === 'en') {
    title = `${slug[1].replaceAll('_', ' ')} ⋅ Projects (EN)`
  }

  return { title }
}

/**
 * Основной компонент: разбирает логические ветки
 */
export default function ProjectsCatchAll({
  params,
}: {
  params: { slug?: string[] }
}) {
  const slugArray = params.slug || []

  // 1) RU деталь: /projects/[slug] => slug.length === 1 && slug[0] !== 'en'
  if (slugArray.length === 1 && slugArray[0] !== 'en') {
    const { content } = getPostContent('src/projects/ru', slugArray[0] as Slug)
    return <MarkdownRender content={content} />
  }

  // 2) EN список: /projects/en => slug.length === 1 && slug[0] === 'en'
  if (slugArray.length === 1 && slugArray[0] === 'en') {
    const postMetadata = getPostMetadata('src/projects/en')
    return <Preview postMetadata={postMetadata} locale='en' />
  }

  // 3) EN деталь: /projects/en/[slug] => slug.length === 2 && slug[0] === 'en'
  if (slugArray.length === 2 && slugArray[0] === 'en') {
    const { content } = getPostContent('src/projects/en', slugArray[1] as Slug)
    return <MarkdownRender content={content} />
  }

  // Если ничего не подошло, 404
  return <h1>404 Not Found</h1>
}
