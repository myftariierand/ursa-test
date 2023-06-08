import {
  calculateFractionMaterialRValue,
  extractLambda
} from './helperFunctions'

import { IStep2 } from 'interfaces/steps'

export const updateStep2MateriaRValue = (stepTwo: IStep2, update: any) => {
  const materialRValue = calculateFractionMaterialRValue({
    lambda1: extractLambda(stepTwo.materialLambda),
    lambda2: 0.13,
    thickness: stepTwo.materialThickness,
    percentage: 1 - stepTwo.woodPercentage
  })
  update({ materialRValue })
}
