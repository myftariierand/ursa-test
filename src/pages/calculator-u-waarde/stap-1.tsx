import client from 'libs/gqlClient'
import { gevelStep1 } from 'graphql/gevel'

import DefaultLayout from 'layout/DefaultLayout'
import Calculator from 'components/common/Calculator'
import Step1 from 'components/steps/Step1'

const CalculatorPage = ({ step1Dutch, step1French }: any) => {
  return (
    <DefaultLayout>
      <Calculator activeStep={1}>
        <Step1 materials={step1Dutch} materialsFrench={step1French} />
      </Calculator>
    </DefaultLayout>
  )
}

export default CalculatorPage

export const getStaticProps = async () => {
  const { dutch, french } = await client.request(gevelStep1)
  const step1Dutch = dutch.buitenbladMateriaal.filter(
    (el: any) => el.active === true
  )
  const step1French = french.buitenbladMateriaal.filter(
    (el: any) => el.active === true
  )

  return {
    props: { step1Dutch, step1French },
    revalidate: 30
  }
}
