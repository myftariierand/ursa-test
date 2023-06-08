import { Fragment, FC } from 'react'

import { IStepper } from 'interfaces/stepper'

import { useTranslate } from 'hooks/useTranslate'

import styles from './Stepper.module.scss'

const Steps: FC<IStepper> = ({ activeStep }) => {
  const { t } = useTranslate()
  const steps = [
    { id: 1, label: t.gevel.step1.title },
    { id: 2, label: t.gevel.step2.title },
    { id: 3, label: t.gevel.step3.title },
    { id: 4, label: t.gevel.step4.title },
    { id: 5, label: t.gevel.step5.title }
  ]

  return (
    <div className={styles.stepper}>
      {steps.map(step => (
        <Fragment key={step.id}>
          <div
            data-active={step.id === activeStep}
            data-disabled={step.id > activeStep}
            data-completed={step.id < activeStep}
            className={styles.step}
          >
            <button>
              <span>{step.label}</span>
            </button>
          </div>
          <span
            data-active={step.id === activeStep}
            data-disabled={step.id > activeStep}
            data-completed={step.id < activeStep}
            className={styles.line}
            aria-hidden={true}
          ></span>
        </Fragment>
      ))}
    </div>
  )
}

export default Steps
