import Container from 'components/ui/Container'
import Stepper from 'components/common/Stepper'
import ProjectInfo from 'components/project/ProjectInfo'

import styles from './Calculator.module.scss'

const Calculator = ({ children, activeStep }: any) => {
  return (
    <div className={styles.calculator}>
      <Container>
        <Stepper activeStep={activeStep} />
        <div className={styles.calculator__main}>
          <div className={styles.calculator__step}>{children}</div>
          <ProjectInfo />
        </div>
      </Container>
    </div>
  )
}

export default Calculator
