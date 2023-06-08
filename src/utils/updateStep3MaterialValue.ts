import {
  calculateFractionMaterialRValue,
  extractLambda
} from './helperFunctions'

import { IStep3 } from 'interfaces/steps'

export const updateStep3MaterialRValue = (stepThree: IStep3, update: any) => {
  const materialRValue = calculateFractionMaterialRValue({
    lambda1: extractLambda(stepThree.materialLambda),
    lambda2: 0.13,
    thickness: stepThree.materialThickness,
    percentage: 1 - stepThree.woodPercentage
  })
  update({ materialRValue })
}
