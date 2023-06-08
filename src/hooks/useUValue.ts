import { useState, useEffect } from 'react'
import { extractLambda } from 'utils/helperFunctions'

export const useUValue = (state: any, actions: any) => {
  const [uValue, setUValue] = useState(0)

  useEffect(
    () => {
      const stepOneRValue =
        state.stepOne.airLayerType === 'Sterk geventileerd'
          ? 0
          : state.stepOne.airLayerRValue + state.stepOne.materialRValue

      const extraValue = state.stepOne.airLayerRValue > 0 ? 0.13 : 0

      const totalRValue =
        stepOneRValue +
        state.stepTwo.materialRValue +
        state.stepThree.materialRValue +
        state.stepFour.materialRValue +
        state.stepFive.materialRValue +
        extractLambda(state.stepOne.rResistance) +
        extraValue

      actions.updateTotalRValue(totalRValue)

      const finalUValue =
        state.stepThree.materialRValue === 0
          ? 0
          : 1 / state.totalRValue === Infinity
          ? 0
          : 1 / state.totalRValue +
            state.stepTwo.fixingUValue +
            state.stepThree.fixingUValue

      setUValue(finalUValue)
    },
    // eslint-disable-next-line
    [
      state.stepOne,
      state.stepTwo,
      state.stepThree,
      state.stepFour,
      state.stepFive
    ]
  )

  return {
    uValue
  }
}
