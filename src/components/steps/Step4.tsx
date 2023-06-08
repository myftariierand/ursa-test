import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useStateMachine } from 'little-state-machine'

import client from 'libs/gqlClient'
import { updateRequestStep4 } from 'graphql/mutations'

import { updateStepFour } from 'actions/updateStepFour'
import { centimeterToMeter } from 'utils/helperFunctions'
import { updateStep4MaterialRValue } from 'utils/updateStep4MaterialRValue'
import { useTranslate } from 'hooks/useTranslate'
import { useMaterialOptions } from 'hooks/useMaterialOptions'
import { thicknessPerMaterial } from 'utils/thicknessPerMaterial'

import Dropdown from 'components/ui/Dropdown'
import Radio from 'components/ui/Radio'
import Navigation from 'components/common/Navigation'

const Select = dynamic(() => import('components/common/Dropdown'), {
  ssr: false
})

import styles from './styles.module.scss'

// REMOVE LATER
import Test from 'components/Test/Test'

const Step4 = ({ materials, materialsFrench }: any) => {
  const [fields, setFields] = useState({
    material: '',
    materialLambda: '',
    materialThickness: 0,
    cement: 0,
    materialRValue: 0
  })
  const { state, actions } = useStateMachine({ updateStepFour })
  const { t } = useTranslate()
  const { options } = useMaterialOptions(materials, materialsFrench)

  // Update component state from session state
  useEffect(() => {
    setFields(state.stepFour)
  }, [state.stepFour])

  // Update material r-value
  useEffect(
    () => updateStep4MaterialRValue(state.stepFour, actions.updateStepFour),
    // eslint-disable-next-line
    [
      state.stepFour.cement,
      state.stepFour.materialLambda,
      state.stepFour.materialThickness
    ]
  )

  const handleRequest = async () => {
    const data = {
      id: state.requestId,
      materialStep4: state.stepFour.material,
      materialThicknessStep4: state.stepFour.materialThickness,
      cementStep4: state.stepFour.cement
    }
    await client.request(updateRequestStep4, data)
  }

  return (
    <>
      {/* <Test data={state.stepFour} /> */}
      <h1 className={styles.title}>
        {t.gevel.step4.title}* <span>4/5</span>
      </h1>
      <p>*{t.common.required}</p>
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

                actions.updateStepFour({
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
                actions.updateStepFour({
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
        {/* ------ CEMENT ------ */}
        <Radio title={t.gevel.step1.radioButtons.title}>
          <fieldset>
            <input
              type="radio"
              name="cement"
              value={1}
              onChange={e =>
                actions.updateStepFour({ cement: parseInt(e.target.value) })
              }
              checked={fields.cement === 1}
            />
            <label>{t.gevel.step1.radioButtons.btn1}</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              name="cement"
              value={0}
              onChange={e =>
                actions.updateStepFour({ cement: parseInt(e.target.value) })
              }
              checked={fields.cement === 0}
            />
            <label>{t.gevel.step1.radioButtons.btn2}</label>
          </fieldset>
        </Radio>
      </div>
      <Navigation previous="stap-3" next="stap-5" nextOnClick={handleRequest} />
    </>
  )
}

export default Step4
