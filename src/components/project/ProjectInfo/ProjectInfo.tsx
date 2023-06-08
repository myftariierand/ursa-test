// @ts-nocheck
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useStateMachine } from 'little-state-machine'

import { updateTotalRValue } from 'actions/updateTotalRValue'
import { updateStepTwo } from 'actions/updateStepTwo'
import { updateStepThree } from 'actions/updateStepThree'
import { reset } from 'actions/reset'
import { twoDigitRound } from 'utils/helperFunctions'
import { updateAnchoringRValue } from 'utils/updateAnchoringValue'
import { useTotalThickness } from 'hooks/useTotalThickness'
import { useUValue } from 'hooks/useUValue'
import { useTranslate } from 'hooks/useTranslate'

import styles from './ProjectInfo.module.scss'

const ProjectInfo = () => {
  const [error, setError] = useState(false)
  const [projectName, setProjectName] = useState('')

  const { state, actions } = useStateMachine({
    updateTotalRValue,
    updateStepTwo,
    updateStepThree,
    reset
  })

  useEffect(() => {
    setProjectName(state.projectDetails.projectName)
  }, [state.projectDetails.projectName])

  const { totalThickness } = useTotalThickness(state)
  const { uValue } = useUValue(state, actions)
  const { t } = useTranslate()

  useEffect(
    () =>
      updateAnchoringRValue({
        step: state.stepTwo,
        totalRValue: state.totalRValue,
        update: actions.updateStepTwo
      }),
    // eslint-disable-next-line
    [
      state.stepTwo.fixingLambda,
      state.stepTwo.fixingDiameter,
      state.stepTwo.fixingQuantity,
      state.totalRValue
    ]
  )

  useEffect(
    () =>
      updateAnchoringRValue({
        step: state.stepThree,
        totalRValue: state.totalRValue,
        update: actions.updateStepThree
      }),
    // eslint-disable-next-line
    [
      state.stepThree.fixingLambda,
      state.stepThree.fixingDiameter,
      state.stepThree.fixingQuantity,
      state.totalRValue
    ]
  )

  useEffect(() => setError(state.error), [state.error])

  return (
    <aside className={styles.project}>
      <div className={styles.project__name}>
        <h3>{projectName}</h3>
        <div>
          <p>{t.projectInfo.totalThickness}</p>
          <p>{twoDigitRound(totalThickness)} cm</p>
        </div>
      </div>
      <div className={styles.project__info}>
        <div>
          <p>{t.projectInfo.uValue}</p>
          <h1>
            {twoDigitRound(uValue).toFixed(2).toString().split('.').join(',')}
          </h1>
          <span>W/(m²•K)</span>
        </div>
        <div>
          <p>{t.projectInfo.totalThickness}</p>
          <p>{twoDigitRound(totalThickness)} cm</p>
        </div>
      </div>
      {error && (
        <div className={styles.project__error}>
          <h4>Error</h4>
          <h5>{t.projectInfo.error}</h5>
        </div>
      )}
      <Link href="/">
        <a onClick={() => actions.reset()}>{t.common.reset}</a>
      </Link>
    </aside>
  )
}

export default ProjectInfo
