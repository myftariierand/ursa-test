import { FC } from 'react'

import { IDropdown } from 'interfaces/dropdown'

import styles from './Dropdown.module.scss'

const Dropdown: FC<IDropdown> = ({ children, title }) => {
  return (
    <div className={styles.dropdown}>
      {title && <p>{title}</p>}
      {children}
    </div>
  )
}

export default Dropdown
