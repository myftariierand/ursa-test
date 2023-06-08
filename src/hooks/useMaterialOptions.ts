import { useTranslate } from './useTranslate'

export const useMaterialOptions = (materials: any, materialsFrench: any) => {
  const { locale } = useTranslate()

  const options =
    locale === 'nl'
      ? materials.map((el: any) => ({
          value: `${el.materialName} - (λ = ${el.lambda})`,
          label: `${el.materialName} - (λ = ${el.lambda})`,
          thickness: JSON.parse(el.thickness)
        }))
      : materialsFrench.map((el: any) => ({
          value: `${el.materialName} - (λ = ${el.lambda})`,
          label: `${el.materialName} - (λ = ${el.lambda})`,
          thickness: JSON.parse(el.thickness)
        }))

  return { options }
}
