import { useTranslate } from 'hooks/useTranslate'

import Container from 'components/ui/Container'

import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <p>{t.footer}</p>
      </Container>
    </footer>
  )
}

export default Footer
