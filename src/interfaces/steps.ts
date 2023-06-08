export type IStep1 = {
  airLayerType: string
  airLayerThickness: number
  airLayerRValue: number
  rResistance: string

  material: string
  materialLambda: string
  materialThickness: number
  cement: number
  materialRValue: number
  otherMaterial: boolean
}

export type IStep2 = {
  material: string
  materialLambda: string
  materialThickness: number
  woodPercentage: number
  materialRValue: number

  fixingMaterial: string
  fixingLambda: number
  fixingQuantity: number
  fixingDiameter: number
  fixingUValue: number
}

export type IStep3 = {
  material: string
  materialLambda: string
  materialThickness: number
  woodPercentage: number
  materialRValue: number

  fixingMaterial: string
  fixingLambda: string
  fixingQuantity: number
  fixingDiameter: number
  fixingUValue: number
}

export type IStep4 = {
  material: string
  materialLambda: string
  materialThickness: number
  cement: number
  materialRValue: number
}

export type IStep5 = {
  material: string
  materialLambda: string
  materialThickness: number
  materialRValue: number
}
