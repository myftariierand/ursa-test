import { useTranslate } from './useTranslate'

export const useAnchorOptions = (anchors: any, anchorsFrench: any) => {
  const { locale } = useTranslate()

  const anchorOptions =
    locale === 'nl'
      ? anchors.map((el: any) => ({
          value: `${el.materialName}-${el.lambda}`,
          label: `${el.materialName} - (λ = ${el.lambda})`,
          // quantity: JSON.parse(el.quantity),
          diameter: JSON.parse(el.diameter)
        }))
      : anchorsFrench.map((el: any) => ({
          value: `${el.materialName}-${el.lambda}`,
          label: `${el.materialName} - (λ = ${el.lambda})`,
          // quantity: JSON.parse(el.quantity),
          diameter: JSON.parse(el.diameter)
        }))

  return { anchorOptions }
}
