export const convertEmailLink = (email: string) => `mailto:${email}`

export const convertTelegramLink = (link: string) => link.replace('t.me/', '@')

export const https = (link: string) => `https://${link}`
