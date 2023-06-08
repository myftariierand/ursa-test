import { FC, ReactNode } from 'react'

import Header from 'widgets/Header'
import Footer from 'widgets/Footer'

import styles from './DefaultLayout.module.scss'

interface IProps {
  children: ReactNode
}

const DefaultLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout
