// src/app/projects/[...slug]/page.tsx
// Один файл, обрабатывает RU и EN, список и детальную

import { getPostContent } from '@/utils/getPostContent'
import getPostMetadata from '@/utils/getPostMetadata'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import Preview from '@/app/components/Preview'
import { Slug } from '@/types'

/**
 * Генерация статических путей (SSG):
 *
 * - []                     => /projects           (список RU)
 * - [ruSlug]               => /projects/ruSlug    (RU деталь)
 * - ['en']                 => /projects/en        (список EN)
 * - ['en', enSlug]         => /projects/en/enSlug (EN деталь)
 */
export async function generateStaticParams() {
  const ruPosts = getPostMetadata('src/projects/ru')
  const enPosts = getPostMetadata('src/projects/en')

  const allParams: { slug: string[] }[] = []

  // Список RU
  allParams.push({ slug: [] })

  // Детальные RU
  ruPosts.forEach((post) => {
    allParams.push({ slug: [post.slug] })
  })

  // Список EN
  allParams.push({ slug: ['en'] })

  // Детальные EN
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

  // По умолчанию
  let title = 'Projects'

  if (slug.length === 0) {
    // /projects (список RU)
    title = 'Projects (RU)'
  } else if (slug.length === 1) {
    if (slug[0] === 'en') {
      // /projects/en (список EN)
      title = 'Projects (EN)'
    } else {
      // /projects/ruSlug (RU деталь)
      title = `${slug[0].replaceAll('_', ' ')} ⋅ Projects (RU)`
    }
  } else if (slug.length === 2 && slug[0] === 'en') {
    // /projects/en/enSlug (EN деталь)
    title = `${slug[1].replaceAll('_', ' ')} ⋅ Projects (EN)`
  }

  return { title }
}

/**
 * Единый компонент
 */
export default function ProjectsRoute({
  params,
}: {
  params: { slug?: string[] }
}) {
  const slugArray = params.slug || []

  // Определяем 4 варианта
  // 1) Список RU => slug.length === 0
  // 2) Список EN => slug.length === 1 && slug[0] === 'en'
  // 3) Детальная RU => slug.length === 1 && slug[0] !== 'en'
  // 4) Детальная EN => slug.length === 2 && slug[0] === 'en'

  if (slugArray.length === 0) {
    const postMetadata = getPostMetadata('src/projects/ru')
    // нужно передать locale="ru"
    return <Preview postMetadata={postMetadata} locale='ru' />
  }

  // Список EN
  if (slugArray.length === 1 && slugArray[0] === 'en') {
    const postMetadata = getPostMetadata('src/projects/en')
    // нужно передать locale="en"
    return <Preview postMetadata={postMetadata} locale='en' />
  }

  // 3) Детальная RU
  if (slugArray.length === 1 && slugArray[0] !== 'en') {
    const { content } = getPostContent('src/projects/ru', slugArray[0] as Slug)
    return <MarkdownRender content={content} />
  }

  // 4) Детальная EN
  if (slugArray.length === 2 && slugArray[0] === 'en') {
    const { content } = getPostContent('src/projects/en', slugArray[1] as Slug)
    return <MarkdownRender content={content} />
  }

  // Если что-то пошло не так — 404
  return <h1>404 Not Found</h1>
}
