import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useStateMachine } from 'little-state-machine'

import client from 'libs/gqlClient'
import { updateRequestStep1 } from 'graphql/mutations'

import { updateStepOne } from 'actions/updateStepOne'
import { centimeterToMeter } from 'utils/helperFunctions'
import { updateAirRValue } from 'utils/updateAirRValue'
import { updateStep1MaterialRValue } from 'utils/updateStep1MaterialRValue'
import { useTranslate } from 'hooks/useTranslate'
import { useMaterialOptions } from 'hooks/useMaterialOptions'
import { thicknessPerMaterial } from 'utils/thicknessPerMaterial'

import Dropdown from 'components/ui/Dropdown'
import Radio from 'components/ui/Radio'
import Navigation from 'components/common/Navigation'

import styles from './styles.module.scss'

const Select = dynamic(() => import('components/common/Dropdown'), {
  ssr: false
})

// REMOVE LATER
import Test from 'components/Test/Test'

const Step1 = ({ materials, materialsFrench }: any) => {
  const [fields, setFields] = useState({
    airLayerType: '',
    airLayerThickness: 0,
    airLayerRValue: 0,
    rResistance: '',
    material: '',
    materialLambda: '',
    materialThickness: 0,
    cement: 0,
    materialRValue: 0,
    otherMaterial: false
  })

  const { t } = useTranslate()
  const { state, actions } = useStateMachine({ updateStepOne })
  const { options } = useMaterialOptions(materials, materialsFrench)

  // Update component state from session state
  useEffect(() => {
    setFields(state.stepOne)
  }, [state.stepOne])

  // Update air layer r-value
  useEffect(
    () => updateAirRValue(state.stepOne, actions.updateStepOne),
    // eslint-disable-next-line
    [state.stepOne.airLayerThickness, state.stepOne.airLayerType]
  )

  // Update material r-value
  useEffect(
    () => updateStep1MaterialRValue(state.stepOne, actions.updateStepOne),
    // eslint-disable-next-line
    [
      state.stepOne.cement,
      state.stepOne.materialLambda,
      state.stepOne.materialThickness
    ]
  )

  const handleClick = async () => {
    const data = {
      id: state.requestId,
      materialStep1: state.stepOne.material,
      materialThicknessStep1: state.stepOne.materialThickness * 100,
      cement: state.stepOne.cement,
      airLayer: state.stepOne.airLayerType,
      airLayerThickness: state.stepOne.airLayerThickness
    }

    await client.request(updateRequestStep1, data)
  }

  return (
    <>
      {/* <Test data={state.stepOne} /> */}
      <h1 className={styles.title}>
        {t.gevel.step1.title}* <span>1/5</span>
      </h1>
      <p>*{t.common.required}</p>
      <div>
        {/* ------ MATERIAL ------ */}
        <Dropdown>
          {fields.otherMaterial ? (
            <>
              <fieldset>
                <label htmlFor="material">Input naam materiaal</label>
                <input
                  type="text"
                  id="material"
                  name="material"
                  placeholder=""
                  onChange={e =>
                    actions.updateStepOne({
                      material: e.target.value
                    })
                  }
                  value={fields.material}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="lambda">Lambdawaarde</label>
                <input
                  type="number"
                  id="lambda"
                  name="materialLambda"
                  onChange={e =>
                    actions.updateStepOne({
                      materialLambda: e.target.value
                    })
                  }
                  placeholder=""
                  value={fields.materialLambda}
                />
              </fieldset>
              <fieldset>
                <label>{t.common.dropdown.thickness}</label>
                <input
                  type="number"
                  name="materialThickness"
                  onChange={(e: any) => {
                    actions.updateStepOne({
                      materialThickness: e.target.value / 100
                    })
                  }}
                  value={fields.materialThickness * 100}
                />
              </fieldset>
            </>
          ) : (
            <>
              <fieldset>
                <label>{t.common.dropdown.material}</label>
                <select
                  value={fields.materialLambda}
                  onChange={(e: any) => {
                    let index = e.nativeEvent.target.selectedIndex
                    let label = e.nativeEvent.target[index].text

                    actions.updateStepOne({
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
                    actions.updateStepOne({
                      materialThickness: e.target.value
                    })
                  }}
                >
                  <option value="default">
                    {t.common.dropdown.selectThickness}
                  </option>

                  {thicknessPerMaterial(options, fields.material).map(
                    (el: any) => (
                      <option
                        key={el.label}
                        value={centimeterToMeter(el.value)}
                      >
                        {el.label}
                      </option>
                    )
                  )}
                </select>
              </fieldset>
            </>
          )}
        </Dropdown>
        <span
          className={styles.otherMaterial}
          onClick={() =>
            actions.updateStepOne({
              otherMaterial: !state.stepOne.otherMaterial,
              material: '',
              materialThickness: 0,
              materialLambda: 0
            })
          }
        >
          {fields.otherMaterial
            ? t.gevel.step1.otherMaterialClicked
            : t.gevel.step1.otherMaterial}
        </span>

        {/* ------ CEMENT ------ */}
        <Radio title={t.gevel.step1.radioButtons.title}>
          <fieldset>
            <input
              type="radio"
              name="cement"
              value={1}
              onChange={e =>
                actions.updateStepOne({ cement: parseInt(e.target.value) })
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
                actions.updateStepOne({ cement: parseInt(e.target.value) })
              }
              checked={fields.cement === 0}
            />
            <label>{t.gevel.step1.radioButtons.btn2}</label>
          </fieldset>
        </Radio>
        {/* ------ AIR LAYER ------ */}
        <Dropdown>
          <fieldset>
            <label>Luchtlaag</label>

            <select
              value={fields.rResistance}
              onChange={(e: any) => {
                let index = e.nativeEvent.target.selectedIndex
                let label = e.nativeEvent.target[index].text

                actions.updateStepOne({
                  airLayerType: label,
                  rResistance: e.target.value
                })
              }}
            >
              <option value="default">
                {t.common.dropdown.selectMaterial}
              </option>
              {[
                {
                  value: `Niet geventileerd-${0.04}`,
                  label: t.gevel.step1.airLayerOptions[0]
                },
                {
                  value: `Matig geventileerd-${0.04}`,
                  label: t.gevel.step1.airLayerOptions[1]
                },
                {
                  value: `Sterk geventileerd-${0.13}`,
                  label: t.gevel.step1.airLayerOptions[2]
                }
              ].map((el: any) => (
                <option key={el.label} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          {fields.airLayerType !== 'Sterk geventileerd' && (
            <fieldset>
              <label>{t.common.dropdown.thickness}</label>
              <select
                value={fields.airLayerThickness}
                onChange={(e: any) => {
                  actions.updateStepOne({
                    airLayerThickness: parseInt(e.target.value)
                  })
                }}
              >
                <option value={0}>{t.common.dropdown.selectThickness}</option>
                {airThickness.map((el: any) => (
                  <option key={el.label} value={el.value}>
                    {el.label}
                  </option>
                ))}
              </select>
            </fieldset>
          )}
        </Dropdown>
      </div>
      <Navigation previous="/" next="stap-2" nextOnClick={handleClick} />
    </>
  )
}

export default Step1

const airThickness = [...Array.from({ length: 21 }, (_, i) => i)].map(el => ({
  label: el,
  value: el
}))
