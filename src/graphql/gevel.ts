import { gql } from 'graphql-request'

export const gevelStep1 = gql`
  {
    dutch: globalSet(handle: "gevel") {
      ... on gevel_GlobalSet {
        buitenbladMateriaal {
          materialName
          lambda
          thickness
          active
        }
      }
    }
    french: globalSet(handle: "gevel", site: "french") {
      ... on gevel_GlobalSet {
        buitenbladMateriaal {
          materialName
          lambda
          thickness
          active
        }
      }
    }
  }
`

export const gevelStep2 = gql`
  {
    step2MaterialsDutch: globalSet(handle: "gevel") {
      ... on gevel_GlobalSet {
        eIsolatielaagMaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
    step2MaterialsFrench: globalSet(handle: "gevel", site: "french") {
      ... on gevel_GlobalSet {
        eIsolatielaagMaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
    mechanicalFixingMaterialsDutch: globalSet(
      handle: "mechanischeBevestiging"
    ) {
      ... on mechanischeBevestiging_GlobalSet {
        materialenMechanischeBevestiging {
          materialName
          lambda
          quantity
          diameter
          active
        }
      }
    }
    mechanicalFixingMaterialsFrench: globalSet(
      handle: "mechanischeBevestiging"
      site: "french"
    ) {
      ... on mechanischeBevestiging_GlobalSet {
        materialenMechanischeBevestiging {
          materialName
          lambda
          quantity
          diameter
          active
        }
      }
    }
  }
`

export const gevelStep4 = gql`
  {
    dutch: globalSet(handle: "gevel") {
      ... on gevel_GlobalSet {
        binnenbladMaaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
    french: globalSet(handle: "gevel", site: "french") {
      ... on gevel_GlobalSet {
        binnenbladMaaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
  }
`

export const gevelStep5 = gql`
  {
    dutch: globalSet(handle: "gevel") {
      ... on gevel_GlobalSet {
        afwerkingBinnenbladMaaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
    french: globalSet(handle: "gevel", site: "french") {
      ... on gevel_GlobalSet {
        afwerkingBinnenbladMaaterial {
          materialName
          lambda
          thickness
          active
        }
      }
    }
  }
`
