import Image from 'next/image'
import getConfig from 'next/config'
import { PrefixedImageProps } from '@/types'

export const PrefixedImage = ({ src, alt }: PrefixedImageProps) => {
  const config = getConfig()
  const publicRuntimeConfig = config?.publicRuntimeConfig || {}

  console.log('Runtime Config:', publicRuntimeConfig)

  const basePath = publicRuntimeConfig.basePath || ''
  const imagePath = `${basePath}${src.startsWith('/') ? '' : '/'}${src}`

  return <Image src={imagePath} alt={alt} width={500} height={300} priority />
}
