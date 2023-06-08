export const updateStepTwo = (state: any, payload: any) => {
  return {
    ...state,
    stepTwo: {
      ...state.stepTwo,
      ...payload
    }
  }
}
