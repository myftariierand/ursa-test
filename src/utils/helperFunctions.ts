// @ts-nocheck
export const twoDigitRound = (n: number) =>
  Math.round((n + Number.EPSILON) * 100) / 100

export const threeDigitRound = (n: number) =>
  Math.round((n + Number.EPSILON) * 1000) / 1000

export const millimeterToMeter = (n: number) => n / 1000

export const centimeterToMeter = (n: number) => n / 100

export const extractLambda = (lambda: string) =>
  typeof lambda === 'string'
    ? lambda.length > 0
      ? lambda.match(/\d+\.?\d+/g) !== null
        ? parseFloat(lambda.match(/\d+\.?\d+/g)?.pop())
        : 0
      : 0
    : lambda

export const calculateNormalRValue = (thickness: number, lambda: number) => {
  const rValue = thickness / lambda

  return isNaN(rValue) || rValue === Infinity ? 0 : rValue
}

export const calculateFractionMaterialRValue = ({
  lambda1,
  lambda2,
  thickness,
  percentage
}: {
  lambda1: number
  lambda2: number
  thickness: number
  percentage: number
}) => {
  const rValue1 = thickness / lambda1
  const rValue2 = thickness / lambda2

  const uValue1 = 1 / rValue1
  const uVulue2 = 1 / rValue2

  const fractionUValue = uValue1 * percentage + uVulue2 * (1 - percentage)
  const fractionRValue = 1 / fractionUValue

  return isNaN(fractionRValue) || fractionRValue === Infinity
    ? 0
    : fractionRValue
}

export const calculateAnchoringUValue = ({
  anchorLambda,
  anchorDiameter,
  numberOfAnchors,
  materialThickness,
  materialLambda,
  totalRValue
}: {
  anchorLambda: number
  anchorDiameter: number
  numberOfAnchors: number
  materialThickness: number
  materialLambda: string
  totalRValue: number
}) => {
  const area = Math.PI * Math.pow(anchorDiameter / 2, 2)

  const anchorRValue =
    (area *
      materialThickness *
      extractLambda(anchorLambda) *
      parseFloat(numberOfAnchors.toString().split(',').join('.')) *
      0.0000008) /
    (extractLambda(materialLambda) ** 2 * totalRValue ** 2)

  return isNaN(anchorRValue) ? 0 : anchorRValue
}

export const getAirRValue = (thickness: number) => {
  if (thickness < 0.5) return 0.0
  if (thickness >= 0.5 && thickness < 0.7) return 0.11
  if (thickness >= 0.7 && thickness < 1) return 0.13
  if (thickness >= 1 && thickness < 1.5) return 0.15
  if (thickness >= 1.5 && thickness < 2.5) return 0.17
  if (thickness >= 2.5 && thickness < 5) return 0.18
  if (thickness >= 5 && thickness < 10) return 0.18
  if (thickness >= 10 && thickness < 30) return 0.18
  if (thickness === 30) return 0.18

  return 0
}
