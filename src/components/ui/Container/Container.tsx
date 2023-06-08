import { FC } from 'react'
import clsx from 'clsx'

import { IContainer } from 'interfaces/container'

import styles from './Container.module.scss'

const Container: FC<IContainer> = ({ children, className, small }) => {
  return (
    <div className={clsx(styles.container, className, small && styles.small)}>
      {children}
    </div>
  )
}

export default Container
