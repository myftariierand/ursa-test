import client from 'libs/gqlClient'
import { gevelStep2 } from 'graphql/gevel'

import DefaultLayout from 'layout/DefaultLayout'
import Calculator from 'components/common/Calculator'
import Step3 from 'components/steps/Step3'

const CalculatorPage = ({
  step2Dutch,
  step2French,
  fixingsDutch,
  fixingsFrench
}: any) => {
  return (
    <DefaultLayout>
      <Calculator activeStep={3}>
        <Step3
          materials={step2Dutch}
          materialsFrench={step2French}
          anchors={fixingsDutch}
          anchorsFrench={fixingsFrench}
        />
      </Calculator>
    </DefaultLayout>
  )
}

export default CalculatorPage

export const getStaticProps = async () => {
  const {
    step2MaterialsDutch,
    step2MaterialsFrench,
    mechanicalFixingMaterialsDutch,
    mechanicalFixingMaterialsFrench
  } = await client.request(gevelStep2)

  const step2Dutch = step2MaterialsDutch.eIsolatielaagMaterial.filter(
    (el: any) => el.active === true
  )
  const step2French = step2MaterialsFrench.eIsolatielaagMaterial.filter(
    (el: any) => el.active === true
  )
  const fixingsDutch =
    mechanicalFixingMaterialsDutch.materialenMechanischeBevestiging.filter(
      (el: any) => el.active === true
    )
  const fixingsFrench =
    mechanicalFixingMaterialsFrench.materialenMechanischeBevestiging.filter(
      (el: any) => el.active === true
    )

  return {
    props: {
      step2Dutch,
      step2French,
      fixingsDutch,
      fixingsFrench
    },
    revalidate: 30
  }
}
