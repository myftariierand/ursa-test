// @ts-nocheck
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useStateMachine } from 'little-state-machine'
import InputMask from 'react-input-mask'

import client from 'libs/gqlClient'
import { updateRequestStep2 } from 'graphql/mutations'

import { updateStepThree } from 'actions/updateStepThree'
import { updateStep3MaterialRValue } from 'utils/updateStep3MaterialValue'
import { centimeterToMeter } from 'utils/helperFunctions'
import { thicknessPerMaterial } from 'utils/thicknessPerMaterial'
import { useTranslate } from 'hooks/useTranslate'
import { useMaterialOptions } from 'hooks/useMaterialOptions'
import { useAnchorOptions } from 'hooks/useAnchorOptions'

import Dropdown from 'components/ui/Dropdown'
import Navigation from 'components/common/Navigation'

import styles from './styles.module.scss'

const Select = dynamic(() => import('components/common/Dropdown'), {
  ssr: false
})

// REMOVE LATER
import Test from 'components/Test/Test'

const Step2 = ({ materials, anchors, materialsFrench, anchorsFrench }: any) => {
  const [fields, setFields] = useState({
    material: '',
    materialLambda: '',
    materialThickness: 0,
    woodPercentage: 0,
    materialRValue: 0,

    fixingMaterial: '',
    fixingLambda: '',
    fixingQuantity: 0,
    fixingDiameter: 0,
    fixingUValue: 0
  })

  const { state, actions } = useStateMachine({ updateStepThree })
  const { t } = useTranslate()
  const { options } = useMaterialOptions(materials, materialsFrench)
  const { anchorOptions } = useAnchorOptions(anchors, anchorsFrench)

  // Update component state from session state
  useEffect(() => {
    setFields(state.stepThree)
  }, [state.stepThree])

  // Update material r-value
  useEffect(
    () => updateStep3MaterialRValue(state.stepThree, actions.updateStepThree),
    //eslint-disable-next-line
    [
      state.stepThree.materialLambda,
      state.stepThree.materialThickness,
      state.stepThree.woodPercentage
    ]
  )

  const handleRequest = async () => {
    const data = {
      id: state.requestId,
      materialStep2: state.stepThree.material,
      materialThicknessStep2: state.stepThree.materialThickness,
      woodPercentageStep2: state.stepThree.woodPercentage,
      fixingMaterialStep2: state.stepThree.fixingMaterial,
      fixingAmountStep2: state.stepThree.fixingQuantity,
      fixingDiameterStep2: state.stepThree.fixingDiameter
    }

    await client.request(updateRequestStep2, data)
  }

  return (
    <>
      {/* <Test data={state.stepThree} /> */}
      <h1 className={styles.title}>
        {t.gevel.step2.title}* <span>2/5</span>
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

                actions.updateStepThree({
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
                actions.updateStepThree({
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
        {/* ------ WOOD ------ */}
        <Dropdown>
          <fieldset>
            <label>{t.common.wood}</label>
            <select
              value={fields.woodPercentage}
              onChange={(e: any) => {
                actions.updateStepThree({
                  woodPercentage: parseFloat(e.target.value)
                })
              }}
            >
              {woodPercentages.map((el: any) => (
                <option key={el.label} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
        </Dropdown>
        {/* ------ FIXING ------ */}
        <Dropdown title={t.common.fixing.title}>
          <fieldset>
            <label>{t.common.fixing.dropdown1.title}</label>
            <select
              value={fields.fixingLambda}
              onChange={(e: any) => {
                let index = e.nativeEvent.target.selectedIndex
                let label = e.nativeEvent.target[index].text

                actions.updateStepThree({
                  fixingMaterial: label,
                  fixingLambda: e.target.value
                })
              }}
            >
              <option value="default">
                {t.common.dropdown.selectMaterial}
              </option>
              {anchorOptions.map((el: any) => (
                <option key={el.label} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label>{t.common.fixing.dropdown2.title}</label>
            <input
              placeholder={t.common.fixing.inputPlaceholder}
              type="text"
              value={fields.fixingQuantity === 0 ? '' : fields.fixingQuantity}
              onChange={(e: any) =>
                actions.updateStepThree({
                  fixingQuantity: e.target.value
                })
              }
            />
          </fieldset>
          <fieldset>
            <label>{t.common.fixing.dropdown3.title}</label>
            <select
              value={fields.fixingDiameter}
              onChange={(e: any) => {
                actions.updateStepThree({
                  fixingDiameter: parseInt(e.target.value)
                })
              }}
            >
              <option value="default">
                {t.common.fixing.dropdown3.default}
              </option>
              {anchorOptions
                .filter((el: any) => el.label === fields.fixingMaterial)
                .map((el: any) => el.diameter)
                .flat()
                .map((el: any) => ({
                  label: el,
                  value: el
                }))
                .map((el: any) => (
                  <option key={el.label} value={el.value}>
                    {el.label}
                  </option>
                ))}
            </select>
          </fieldset>
        </Dropdown>
        <Navigation
          previous="stap-1"
          next="stap-3"
          nextOnClick={handleRequest}
        />
      </div>
    </>
  )
}

const woodPercentages = [
  { value: 0, label: '0%' },
  { value: 0.07, label: '7%' },
  { value: 0.1, label: '10%' },
  { value: 0.12, label: '12%' },
  { value: 0.15, label: '15%' },
  { value: 0.17, label: '17%' },
  { value: 0.2, label: '20%' }
]

export default Step2
