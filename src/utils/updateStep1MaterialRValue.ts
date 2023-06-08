import {
  calculateNormalRValue,
  calculateFractionMaterialRValue,
  extractLambda
} from './helperFunctions'

import { IStep1 } from 'interfaces/steps'

export const updateStep1MaterialRValue = (stepOne: IStep1, update: any) => {
  if (stepOne.cement === 0) {
    const materialRValue = calculateNormalRValue(
      stepOne.materialThickness,
      extractLambda(stepOne.materialLambda)
    )
    update({ materialRValue })
  }

  if (stepOne.cement === 1) {
    const materialRValue = calculateFractionMaterialRValue({
      lambda1: extractLambda(stepOne.materialLambda),
      lambda2: 1.5,
      thickness: stepOne.materialThickness,
      percentage: 0.72
    })
    update({ materialRValue })
  }
}
