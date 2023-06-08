import { FC } from 'react'

import { IRadio } from 'interfaces/radio'

import styles from './Radio.module.scss'

const Radio: FC<IRadio> = ({ children, title }) => {
  return (
    <div className={styles.radio}>
      <p>{title}</p>
      <div className={styles.radio__container}>{children}</div>
    </div>
  )
}

export default Radio
