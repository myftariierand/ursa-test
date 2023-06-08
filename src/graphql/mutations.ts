import { gql } from 'graphql-request'

export const createProject = gql`
  mutation saveEntry(
    $title: String
    $projectType: String
    $projectDate: String
    $authorId: ID
  ) {
    request: save_requests_default_Entry(
      title: $title
      projectType: $projectType
      projectDate: $projectDate
      authorId: $authorId
    ) {
      id
      title
      projectType
      projectDate
    }
  }
`

export const updateRequestStep1 = gql`
  mutation editRequest(
    $id: ID
    $materialStep1: String
    $materialThicknessStep1: Number
    $cement: Number
    $airLayer: String
    $airLayerThickness: Number
  ) {
    save_requests_default_Entry(
      id: $id
      materialStep1: $materialStep1
      materialThicknessStep1: $materialThicknessStep1
      cement: $cement
      airLayer: $airLayer
      airLayerThickness: $airLayerThickness
    ) {
      materialStep1
      materialThicknessStep1
      cement
      airLayer
      airLayerThickness
    }
  }
`

export const updateRequestStep2 = gql`
  mutation editRequest(
    $id: ID
    $materialStep2: String
    $materialThicknessStep2: Number
    $woodPercentageStep2: Number
    $fixingMaterialStep2: String
    $fixingAmountStep2: String
    $fixingDiameterStep2: Number
  ) {
    save_requests_default_Entry(
      id: $id
      materialStep2: $materialStep2
      materialThicknessStep2: $materialThicknessStep2
      woodPercentageStep2: $woodPercentageStep2
      fixingMaterialStep2: $fixingMaterialStep2
      fixingAmountStep2: $fixingAmountStep2
      fixingDiameterStep2: $fixingDiameterStep2
    ) {
      id
      materialStep2
      materialThicknessStep2
      woodPercentageStep2
      fixingMaterialStep2
      fixingAmountStep2
      fixingDiameterStep2
    }
  }
`

export const updateRequestStep3 = gql`
  mutation editRequest(
    $id: ID
    $materialStep3: String
    $materialThicknessStep3: Number
    $woodPercentageStep3: Number
    $fixingMaterialStep3: String
    $fixingAmountStep3: String
    $fixingDiameterStep3: Number
  ) {
    save_requests_default_Entry(
      id: $id
      materialStep3: $materialStep3
      materialThicknessStep3: $materialThicknessStep3
      woodPercentageStep3: $woodPercentageStep3
      fixingMaterialStep3: $fixingMaterialStep3
      fixingAmountStep3: $fixingAmountStep3
      fixingDiameterStep3: $fixingDiameterStep3
    ) {
      id
      materialStep3
      materialThicknessStep3
      woodPercentageStep3
      fixingMaterialStep3
      fixingAmountStep3
      fixingDiameterStep3
    }
  }
`

export const updateRequestStep4 = gql`
  mutation editRequest(
    $id: ID
    $materialStep4: String
    $materialThicknessStep4: Number
    $cementStep4: Number
  ) {
    save_requests_default_Entry(
      id: $id
      materialStep4: $materialStep4
      materialThicknessStep4: $materialThicknessStep4
      cementStep4: $cementStep4
    ) {
      id
      materialStep4
      materialThicknessStep4
      cementStep4
    }
  }
`

export const updateRequestStep5 = gql`
  mutation editRequest(
    $id: ID
    $materialStep5: String
    $materialThicknessStep5: Number
  ) {
    save_requests_default_Entry(
      id: $id
      materialStep5: $materialStep5
      materialThicknessStep5: $materialThicknessStep5
    ) {
      id
      materialStep5
      materialThicknessStep5
    }
  }
`
