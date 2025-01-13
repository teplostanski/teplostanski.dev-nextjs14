const LOCALES = [
  { code: 'ru', name: 'Русский', prefix: '/' },
  { code: 'en', name: 'English', prefix: '/en' },
] as const

export type Locale = (typeof LOCALES)[number]['code']

const validateLocales = (
  locales: readonly (typeof LOCALES)[number][],
  defaultCode: string,
) => {
  const defaultLocale = locales.find((locale) => locale.code === defaultCode)
  if (!defaultLocale) {
    throw new Error(
      `locales: Default code "${defaultCode}" does not exist in the locales.`,
    )
  }

  locales.forEach((locale) => {
    if (!locale.prefix.startsWith('/')) {
      throw new Error(
        `locales: Prefix "${locale.prefix}" must start with a slash "/".`,
      )
    }
  })

  const codes = new Set(locales.map((locale) => locale.code))
  const prefixes = new Set(locales.map((locale) => locale.prefix))

  if (codes.size !== locales.length) {
    throw new Error(`locales: Duplicate codes found in locales.`)
  }

  if (prefixes.size !== locales.length) {
    throw new Error(`locales: Duplicate prefixes found in locales.`)
  }

  return { locales, defaultLocale: defaultLocale.code as Locale }
}

export const { locales, defaultLocale } = validateLocales(LOCALES, 'ru')
