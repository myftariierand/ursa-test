import { getAirRValue, threeDigitRound } from './helperFunctions'

import { IStep1 } from 'interfaces/steps'

export const updateAirRValue = (stepOne: IStep1, update: any) => {
  if (stepOne.airLayerType === 'Sterk geventileerd') {
    update({ airLayerRValue: 0 })
  } else if (stepOne.airLayerType === 'Niet geventileerd') {
    update({
      airLayerRValue: getAirRValue(stepOne.airLayerThickness)
    })
  } else if (stepOne.airLayerType === 'Matig geventileerd') {
    update({
      airLayerRValue: threeDigitRound(
        0.5 * getAirRValue(stepOne.airLayerThickness) + 0.01
      )
    })
  } else {
    update({ airLayerRValue: 0 })
  }
}
