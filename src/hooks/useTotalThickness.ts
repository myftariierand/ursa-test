import { useEffect, useState } from 'react'

export const useTotalThickness = (state: any) => {
  const [totalThickness, setTotalThickness] = useState(0)

  const calculateTotalThickness = (state: any) =>
    (state.stepOne.airLayerThickness / 100 +
      parseFloat(state.stepOne.materialThickness) +
      state.stepTwo.materialThickness +
      state.stepThree.materialThickness +
      state.stepFour.materialThickness +
      state.stepFive.materialThickness) *
    100

  useEffect(
    () => setTotalThickness(calculateTotalThickness(state)),
    // eslint-disable-next-line
    [
      state.stepOne.airLayerThickness,
      state.stepOne.finishingThickness,
      state.stepOne.materialThickness,
      state.stepTwo.materialThickness,
      state.stepThree.materialThickness,
      state.stepFour.materialThickness,
      state.stepFive.materialThickness
    ]
  )

  return {
    totalThickness
  }
}
