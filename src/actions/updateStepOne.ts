export const updateStepOne = (state: any, payload: any) => {
  return {
    ...state,
    stepOne: {
      ...state.stepOne,
      ...payload
    }
  }
}

export const updateAirLayer = (state: any, payload: any) => {
  return {
    ...state,
    stepOne: {
      ...state.stepOne,
      airLayer: {
        ...state.stepOne.airLayer,
        ...payload
      }
    }
  }
}
