export const updateStepFour = (state: any, payload: any) => {
  return {
    ...state,
    stepFour: {
      ...state.stepFour,
      ...payload
    }
  }
}
