import {
  calculateFractionMaterialRValue,
  calculateNormalRValue,
  extractLambda
} from './helperFunctions'

import { IStep4 } from 'interfaces/steps'

export const updateStep4MaterialRValue = (stepFour: IStep4, update: any) => {
  if (stepFour.cement === 0) {
    const materialRValue = calculateNormalRValue(
      stepFour.materialThickness,
      extractLambda(stepFour.materialLambda)
    )
    update({ materialRValue })
  }

  if (stepFour.cement === 1) {
    const materialRValue = calculateFractionMaterialRValue({
      lambda1: extractLambda(stepFour.materialLambda),
      lambda2: 1.5,
      thickness: stepFour.materialThickness,
      percentage: 0.92
    })
    update({ materialRValue })
  }
}
