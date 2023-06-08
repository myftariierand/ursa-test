import { Children, FC, ReactElement, cloneElement, forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

export enum Types {
  primary = 'primary',
  transparent = 'transparent'
}

interface Props {
  type: Types
  children: JSX.Element
  className?: string
}

const Button: FC<Props> = forwardRef(
  ({ children, className, type, ...props }, _ref) => {
    const child = Children.only(children) as ReactElement
    const buttonClassName = clsx(styles.button, styles[type], className)

    return (
      <>
        {cloneElement(child, {
          className: buttonClassName,
          ...props
        })}
      </>
    )
  }
)

Button.displayName = 'Button'

export default Button
