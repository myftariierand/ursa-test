import { FC } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'

import { updateError } from 'actions/updateError'
import { useTranslate } from 'hooks/useTranslate'

import Button, { ButtonTypes } from 'components/ui/Button'
import Icon, { IconTypes } from 'components/ui/Icon'

import styles from './Navigation.module.scss'

const Navigation: FC<{
  next: string
  previous: string
  nextOnClick: () => void
}> = ({ previous, next, nextOnClick }) => {
  const router = useRouter()
  const { state, actions } = useStateMachine({ updateError })
  const { t } = useTranslate()

  const handleClick = () => {
    if (next === 'stap-2') {
      if (
        state.stepOne.rResistance === '' ||
        state.stepOne.materialRValue === 0
      ) {
        actions.updateError(true)
      } else {
        actions.updateError(false)
        nextOnClick()
        router.push(next)
      }
    }

    if (next === 'stap-3') {
      if (state.stepThree.materialRValue === 0) {
        actions.updateError(true)
      } else {
        actions.updateError(false)
        nextOnClick()
        router.push(next)
      }
    }

    if (next === 'stap-4') {
      nextOnClick()
      router.push(next)
    }

    if (next === 'stap-5') {
      if (state.stepFour.materialRValue === 0) {
        actions.updateError(true)
      } else {
        actions.updateError(false)
        nextOnClick()
        router.push(next)
      }
    }

    if (next === 'summary') {
      nextOnClick()
      router.push(next)
    }
  }

  return (
    <div className={styles.navigation}>
      <Button type={ButtonTypes.transparent}>
        <button type="button" onClick={() => router.push(previous)}>
          <Icon type={IconTypes.arrow} />
          {t.common.previous}
        </button>
      </Button>
      <Button type={ButtonTypes.transparent}>
        <button type="button" onClick={handleClick}>
          {t.common.next}
          <Icon type={IconTypes.arrow} />
        </button>
      </Button>
    </div>
  )
}

export default Navigation
