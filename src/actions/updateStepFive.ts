export const updateStepFive = (state: any, payload: any) => {
  return {
    ...state,
    stepFive: {
      ...state.stepFive,
      ...payload
    }
  }
}
