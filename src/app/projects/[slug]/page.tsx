import { projectPageProps, Slug } from '@/types'
import MarkdownRender from '@/app/components/MarkdownRender/MarkdownRender'
import { getPostContent } from '@/utils/getPostContent'
import getPostMetadata from '@/utils/getPostMetadata'

export async function generateMetadata({
  params,
}: {
  params: { [key: string]: any }
}) {
  const id = params?.slug ? params?.slug + ' ⋅ ' : ''

  return {
    title: `${id.replaceAll('_', ' ').toUpperCase()}projects`,
  }
}

export async function generateStaticParams() {
  const posts = getPostMetadata('src/projects')
  return posts.map((post: { slug: Slug }) => ({ slug: post.slug }))
}

export default function projectPage({ params }: projectPageProps) {
  const slug = params.slug
  const { content } = getPostContent(slug)
  return (
    <section>
      <MarkdownRender content={content} />
    </section>
  )
}
