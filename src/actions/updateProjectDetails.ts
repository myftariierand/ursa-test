export const updateProjectDetails = (state: any, payload: any) => {
  return {
    ...state,
    projectDetails: {
      ...state.projectDetails,
      ...payload
    }
  }
}
