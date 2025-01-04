// src/utils/getPostContent.ts
// Возвращает контент и frontmatter поста

import fs from 'fs'
import matter from 'gray-matter'
import { Slug } from '@/types'

export function getPostContent(folderPath: string, slug: Slug) {
  const file = `${folderPath}/${slug}.md`
  const fileContents = fs.readFileSync(file, 'utf8')
  const matterResult = matter(fileContents)
  return {
    content: matterResult.content,
    data: matterResult.data,
  }
}
