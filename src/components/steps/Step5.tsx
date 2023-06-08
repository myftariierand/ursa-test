import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useStateMachine } from 'little-state-machine'

import client from 'libs/gqlClient'
import { updateRequestStep5 } from 'graphql/mutations'

import { updateStepFive } from 'actions/updateStepFive'
import { useHandleChange } from 'hooks/useHandleChange'
import { centimeterToMeter } from 'utils/helperFunctions'
import { updateStep5MaterialRValue } from 'utils/updateStep5MaterialRValue'
import { useTranslate } from 'hooks/useTranslate'
import { useMaterialOptions } from 'hooks/useMaterialOptions'
import { thicknessPerMaterial } from 'utils/thicknessPerMaterial'

import Dropdown from 'components/ui/Dropdown'
import Navigation from 'components/common/Navigation'

import styles from './styles.module.scss'

const Select = dynamic(() => import('components/common/Dropdown'), {
  ssr: false
})

// REMOVE LATER
import Test from 'components/Test/Test'

const Step5 = ({ materials, materialsFrench }: any) => {
  const [fields, setFields] = useState({
    material: '',
    materialLambda: '',
    materialThickness: 0,
    materialRValue: 0
  })

  const { state, actions } = useStateMachine({ updateStepFive })
  const { handleChange } = useHandleChange(actions.updateStepFive)
  const { t, locale } = useTranslate()
  const { options } = useMaterialOptions(materials, materialsFrench)

  // Update component state from session state
  useEffect(() => {
    setFields(state.stepFive)
  }, [state.stepFive])

  // Update material r-value
  useEffect(
    () => updateStep5MaterialRValue(state.stepFive, actions.updateStepFive),
    // eslint-disable-next-line
    [state.stepFive.materialThickness, state.stepFive.materialLambda]
  )

  const handleRequest = async () => {
    const data = {
      id: state.requestId,
      materialStep5: state.stepFive.material,
      materialThicknessStep5: state.stepFive.materialThickness
    }

    await client.request(updateRequestStep5, data)
  }

  return (
    <>
      {/* <Test data={state.stepFive} /> */}
      <h1 className={styles.title}>
        {t.gevel.step5.title} <span>5/5</span>
      </h1>
      <p></p>
      <div>
        {/* ------ MATERIAL ------ */}
        <Dropdown>
          <fieldset>
            <label>{t.common.dropdown.material}</label>
            <select
              value={fields.materialLambda}
              onChange={(e: any) => {
                let index = e.nativeEvent.target.selectedIndex
                let label = e.nativeEvent.target[index].text

                actions.updateStepFive({
                  material: label,
                  materialLambda: e.target.value
                })
              }}
            >
              <option value="default">
                {t.common.dropdown.selectMaterial}
              </option>
              {options.map((el: any) => (
                <option key={el.label} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label>{t.common.dropdown.thickness}</label>
            <select
              value={fields.materialThickness}
              onChange={(e: any) => {
                actions.updateStepFive({
                  materialThickness: parseFloat(e.target.value)
                })
              }}
            >
              <option value="default">
                {t.common.dropdown.selectThickness}
              </option>
              {thicknessPerMaterial(options, fields.material).map((el: any) => (
                <option key={el.label} value={centimeterToMeter(el.value)}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
        </Dropdown>
        <Navigation
          previous="stap-4"
          next="summary"
          nextOnClick={handleRequest}
        />
      </div>
    </>
  )
}

export default Step5
