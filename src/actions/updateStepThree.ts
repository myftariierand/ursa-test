export const updateStepThree = (state: any, payload: any) => {
  return {
    ...state,
    stepThree: {
      ...state.stepThree,
      ...payload
    }
  }
}
