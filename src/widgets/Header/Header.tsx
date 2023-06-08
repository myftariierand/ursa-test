import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Select = dynamic(() => import('react-select'), { ssr: false })

import { useTranslate } from 'hooks/useTranslate'

import Container from 'components/ui/Container'
import Modal from 'components/ui/Modal'
import ReportForm from 'components/common/ReportForm'
import Icon, { IconTypes } from 'components/ui/Icon'

import styles from './Header.module.scss'

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    height: 30,
    display: 'grid',
    placeContent: 'center'
  }),

  control: (provided: any) => ({
    ...provided,
    border: 0,
    boxShadow: 'unset',
    borderRadius: 0,
    '&:hover': {
      border: 0
    },
    backgroundColor: 'transparent'
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected && '#000',
    backgroundColor: state.isSelected ? '#deeff1' : '#fff',

    '&:hover': {
      backgroundColor: '#deeff1'
    }
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    paddingLeft: 0
  }),

  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: 0
  }),

  indicatorSeparator: () => ({
    display: 'none'
  }),

  menu: (provided: any) => ({
    ...provided,
    marginTop: '1px'
  })
}

const Header = () => {
  const modalRef = useRef<any>()
  const router = useRouter()
  const { locale } = router

  const { t } = useTranslate()

  const changeLanguage = (e: any) => {
    const locale = e.value
    router.push(router.asPath, router.asPath, { locale })
  }

  return (
    <header className={styles.header}>
      <Container className={styles.beta}>
        <p>
          {t.common.beta} <br />
          <a onClick={() => modalRef.current.open()}>
            {locale === 'nl' ? 'Klik hier' : 'Cliquez ici'}
          </a>
          {t.common.betaAfter}
        </p>
      </Container>
      <Container className={styles.header__container}>
        <Link href="/">
          <a>
            <Icon type={IconTypes.logo} />
          </a>
        </Link>
        <div>
          <Select
            styles={customStyles}
            onChange={changeLanguage}
            defaultValue={{ value: locale, label: locale?.toUpperCase() }}
            options={[
              { value: 'nl', label: 'NL' },
              { value: 'fr', label: 'FR' }
            ]}
          />
          <Link href="/">{t.header.cta}</Link>
        </div>
      </Container>
      <Modal ref={modalRef} className={styles.modal}>
        <ReportForm closeModal={() => modalRef.current.close()} />
      </Modal>
    </header>
  )
}

export default Header
