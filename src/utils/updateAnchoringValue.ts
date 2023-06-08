import { calculateAnchoringUValue } from './helperFunctions'

export const updateAnchoringRValue = ({ step, totalRValue, update }: any) => {
  const fixingUValue = calculateAnchoringUValue({
    anchorLambda: step.fixingLambda,
    anchorDiameter: step.fixingDiameter,
    numberOfAnchors: step.fixingQuantity,
    materialThickness: step.materialThickness,
    materialLambda: step.materialLambda,
    totalRValue
  })

  update({ fixingUValue })
}
