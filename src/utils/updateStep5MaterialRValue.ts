import { calculateNormalRValue, extractLambda } from './helperFunctions'

import { IStep5 } from 'interfaces/steps'

export const updateStep5MaterialRValue = (stepFive: IStep5, update: any) => {
  const materialRValue = calculateNormalRValue(
    stepFive.materialThickness,
    extractLambda(stepFive.materialLambda)
  )
  update({ materialRValue })
}
