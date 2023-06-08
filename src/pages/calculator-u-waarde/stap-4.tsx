import client from 'libs/gqlClient'
import { gevelStep4 } from 'graphql/gevel'

import DefaultLayout from 'layout/DefaultLayout'
import Calculator from 'components/common/Calculator'
import Step4 from 'components/steps/Step4'

const CalculatorPage = ({ step4Dutch, step4French }: any) => {
  return (
    <DefaultLayout>
      <Calculator activeStep={4}>
        <Step4 materials={step4Dutch} materialsFrench={step4French} />
      </Calculator>
    </DefaultLayout>
  )
}

export default CalculatorPage

export const getStaticProps = async () => {
  const { dutch, french } = await client.request(gevelStep4)
  const step4Dutch = dutch.binnenbladMaaterial.filter(
    (el: any) => el.active === true
  )
  const step4French = french.binnenbladMaaterial.filter(
    (el: any) => el.active === true
  )

  return {
    props: { step4Dutch, step4French },
    revalidate: 30
  }
}
