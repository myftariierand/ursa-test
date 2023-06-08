import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'

import { useTranslate } from 'hooks/useTranslate'

import Container from 'components/ui/Container'
import ProjectInfo from 'components/project/ProjectInfo'
import SendPDF from 'components/common/SendPDF'
import Modal from 'components/ui/Modal'
import Button, { ButtonTypes } from 'components/ui/Button'
import Icon, { IconTypes } from 'components/ui/Icon'

import styles from './Summary.module.scss'

const Summary = () => {
  const router = useRouter()
  const modalRef = useRef<any>()
  const [summary, setSummary] = useState({
    projectDetails: {
      projectName: '',
      projectType: ''
    },
    stepOne: {
      material: ''
    },
    stepTwo: {
      material: '',
      fixingMaterial: '',
      materialRValue: 0
    },
    stepThree: {
      material: '',
      fixingMaterial: ''
    },
    stepFour: {
      material: ''
    },
    stepFive: {
      material: '',
      materialRValue: 0
    }
  })
  const { state } = useStateMachine()
  const { t } = useTranslate()

  useEffect(
    () => setSummary(state),
    // eslint-disable-next-line
    []
  )

  return (
    <Container small className={styles.container}>
      <h1>{t.gevel.summary}</h1>
      <div className={styles.summary}>
        <div className={styles.summary__info}>
          <div className={styles.summary__info__header}>
            <div>
              <h3>
                {t.gevel.project}: {summary.projectDetails.projectName}
              </h3>
              <h3>Type: {summary.projectDetails.projectType}</h3>
            </div>
            <div>
              {summary.projectDetails.projectType === 'gevel' ||
                (summary.projectDetails.projectType === 'façade' && (
                  <Icon type={IconTypes.walls} />
                ))}
            </div>
          </div>
          <div className={styles.summary__info__layers}>
            <div>
              <h5>{t.gevel.step1.title}</h5>
              <p>{summary.stepOne.material}</p>
            </div>
            {summary.stepTwo.materialRValue !== 0 && (
              <div>
                <h5>{t.gevel.step2.title}</h5>
                <p>{summary.stepTwo.material}</p>
                <p>{summary.stepTwo.fixingMaterial}</p>
              </div>
            )}

            <div>
              <h5>{t.gevel.step3.title}</h5>
              <p>{summary.stepThree.material}</p>
              <p>{summary.stepThree.fixingMaterial}</p>
            </div>
            <div>
              <h5>{t.gevel.step4.title}</h5>
              <p>{summary.stepFour.material}</p>
            </div>
            {summary.stepFive.materialRValue !== 0 && (
              <div>
                <h5>{t.gevel.step5.title}</h5>
                <p>{summary.stepFive.material}</p>
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <Button type={ButtonTypes.transparent}>
              <button type="button" onClick={() => router.push('stap-5')}>
                <Icon type={IconTypes.arrow} />
                {t.common.previous}
              </button>
            </Button>
            <Button type={ButtonTypes.primary}>
              <button onClick={() => modalRef.current.open()}>
                {t.common.sendEmail}
                <Icon type={IconTypes.arrow} />
              </button>
            </Button>
          </div>
        </div>
        <ProjectInfo />
      </div>
      <Modal ref={modalRef}>
        <SendPDF closeModal={() => modalRef.current.close()} />
      </Modal>
    </Container>
  )
}

export default Summary
