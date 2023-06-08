import 'little-state-machine'

declare module 'little-state-machine' {
  interface GlobalState {
    projectDetails: {
      projectType: string
      projectName: string
      projectDate: string
      projectIcon: string
    }
    stepOne: {
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
    stepTwo: {
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
    stepThree: {
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
    stepFour: {
      material: string
      materialLambda: string
      materialThickness: number
      cement: number
      materialRValue: number
    }
    stepFive: {
      material: string
      materialLambda: string
      materialThickness: number
      materialRValue: number
    }
    totalRValue: number
    error: boolean
    requestId: number
  }
}
