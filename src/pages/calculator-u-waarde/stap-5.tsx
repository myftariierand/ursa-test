import client from 'libs/gqlClient'
import { gevelStep5 } from 'graphql/gevel'

import DefaultLayout from 'layout/DefaultLayout'
import Calculator from 'components/common/Calculator'
import Step5 from 'components/steps/Step5'

const CalculatorPage = ({ step5Dutch, step4French }: any) => {
  return (
    <DefaultLayout>
      <Calculator activeStep={5}>
        <Step5 materials={step5Dutch} materialsFrench={step4French} />
      </Calculator>
    </DefaultLayout>
  )
}

export default CalculatorPage

export const getStaticProps = async () => {
  const { dutch, french } = await client.request(gevelStep5)
  const step5Dutch = dutch.afwerkingBinnenbladMaaterial.filter(
    (el: any) => el.active === true
  )
  const step4French = french.afwerkingBinnenbladMaaterial.filter(
    (el: any) => el.active === true
  )

  return {
    props: { step5Dutch, step4French },
    revalidate: 30
  }
}
