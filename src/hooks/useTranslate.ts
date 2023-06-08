import { useRouter } from 'next/router'

import nl from 'languages/nl'
import fr from 'languages/fr'

export const useTranslate = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'nl' ? nl : fr

  return {
    t,
    locale
  }
}
