import getConfig from 'next/config'

export const getAppBasePath = () => {
  const config = getConfig()
  const publicRuntimeConfig = config?.publicRuntimeConfig || {}
  return publicRuntimeConfig.basePath || ''
}
