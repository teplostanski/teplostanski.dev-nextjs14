import { usePathname } from 'next/navigation'

export const useIsPrefixPath = (prefixPath: string): boolean => {
  const pathname = usePathname()

  return pathname === prefixPath || pathname === `${prefixPath}/`
}
