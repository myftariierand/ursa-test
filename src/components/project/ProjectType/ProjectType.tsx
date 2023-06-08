import { FC, useEffect, useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import Image from 'next/image'

import { updateProjectDetails } from 'actions/updateProjectDetails'
import { useTranslate } from 'hooks/useTranslate'

import { ILayer } from 'interfaces/layer'

import styles from './ProjectType.module.scss'

const ProjectType: FC<ILayer> = ({ title, children, icon, id }) => {
  const [projectType, setProjectType] = useState('')
  const { state, actions } = useStateMachine({ updateProjectDetails })
  const { t } = useTranslate()

  const handleClick = (title: string) =>
    actions.updateProjectDetails({
      projectType: title.toLowerCase()
    })

  useEffect(() => {
    setProjectType(state.projectDetails.projectType)
  }, [state.projectDetails.projectType])

  return (
    <label
      className={styles.layer}
      onClick={() => handleClick(title)}
      data-selected={projectType === title.toLowerCase()}
      htmlFor={title}
      data-disabled={id !== 1}
      data-text={t.common.disabled}
    >
      {children}
      <div className={styles.layer__icon}>
        <Image
          layout="fill"
          src={icon}
          alt="walls"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.layer__title}>
        <h4>{title}</h4>
      </div>
    </label>
  )
}

export default ProjectType
