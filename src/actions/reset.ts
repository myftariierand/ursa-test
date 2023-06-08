export const reset = () => {
  return {
    projectDetails: {
      projectName: '',
      projectDate: '',
      projectType: '',
      projectIcon: ''
    },

    stepOne: {
      airLayerType: '',
      airLayerThickness: 0,
      airLayerRValue: 0,
      rResistance: '',

      finishingMaterial: '',
      finishingLambda: '',
      finishingThickness: 0,
      finishingRValue: 0,

      material: '',
      materialLambda: '',
      materialThickness: 0,
      cement: 0,
      materialRValue: 0,
      otherMaterial: false
    },

    stepTwo: {
      material: '',
      materialLambda: '',
      materialThickness: 0,
      woodPercentage: 0,
      materialRValue: 0,

      fixingMaterial: '',
      fixingLambda: 0,
      fixingQuantity: 0,
      fixingDiameter: 0,
      fixingUValue: 0
    },

    stepThree: {
      material: '',
      materialLambda: '',
      materialThickness: 0,
      woodPercentage: 0,
      materialRValue: 0,

      fixingMaterial: '',
      fixingLambda: '',
      fixingQuantity: 0,
      fixingDiameter: 0,
      fixingUValue: 0
    },

    stepFour: {
      material: '',
      materialLambda: '',
      materialThickness: 0,
      cement: 0,
      materialRValue: 0
    },

    stepFive: {
      material: '',
      materialLambda: '',
      materialThickness: 0,
      materialRValue: 0
    },

    totalRValue: 0,
    error: false
  }
}
