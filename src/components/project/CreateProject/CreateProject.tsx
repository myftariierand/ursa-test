import { useState } from 'react'
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { IForm } from 'interfaces/form'

import client from 'libs/gqlClient'
import { createProject } from 'graphql/mutations'

import { updateProjectDetails } from 'actions/updateProjectDetails'
import { updateRequestId } from 'actions/updateRequestId'
import { useTranslate } from 'hooks/useTranslate'

import ProjectType from 'components/project/ProjectType'
import Button, { ButtonTypes } from 'components/ui/Button'
import Icon, { IconTypes } from 'components/ui/Icon'

import styles from './CreateProject.module.scss'
import { useEffect } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreateProject = () => {
  const { t } = useTranslate()
  const router = useRouter()

  const schema = yup.object({
    projectName: yup.string().required(t.createProject.nameRequired),
    projectDate: yup.string().required(t.createProject.dateRequired),
    projectType: yup.string().required('Kies een type berekening!')
  })

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    resolver: yupResolver(schema)
  })

  const { state, actions } = useStateMachine({
    updateProjectDetails,
    updateRequestId
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: any) => {
    actions.updateProjectDetails({
      projectName: data.projectName,
      projectDate: data.projectDate,
      projectType: data.projectType
    })

    setLoading(true)
    const { request } = await client.request(createProject, {
      title: data.projectName,
      projectDate: data.projectDate,
      projectType: data.projectType,
      authorId: process.env.NEXT_PUBLIC_REQUEST_USER_ID
    })
    setLoading(false)

    actions.updateRequestId(request.id)

    router.push(`calculator-u-waarde/stap-1`)
  }

  useEffect(() => {
    reset(state.projectDetails)
    // eslint-disable-next-line
  }, [])

  const layers = [
    {
      id: 1,
      title: t.createProject.types[0].title,
      icon: '/images/walls.png'
    },
    {
      id: 2,
      title: t.createProject.types[1].title,
      icon: '/images/floor.png'
    },
    {
      id: 3,
      title: t.createProject.types[2].title,
      icon: '/images/roof.png'
    }
  ]

  return (
    <section className={styles.project}>
      <div className={styles.project__container}>
        <h1>{t.createProject.title}</h1>
        <div className={styles.projects__container}>
          <div className={styles.project__layers}>
            {layers.map(layer => (
              <ProjectType
                key={layer.id}
                id={layer.id}
                title={layer.title}
                icon={layer.icon}
              >
                <input
                  {...register('projectType')}
                  type="radio"
                  id={layer.title}
                  value={layer.title.toLocaleLowerCase()}
                />
              </ProjectType>
            ))}
          </div>
          {errors.projectType && <span>{errors.projectType?.message}</span>}
        </div>
        <h5>{t.createProject.about}</h5>
        <form
          className={styles.project__details}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.field}>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('projectName')}
            />
            <label htmlFor="name">{t.createProject.projectName}</label>
            {errors.projectName && <span>{errors.projectName.message}</span>}
          </div>
          <div className={styles.field}>
            <Controller
              control={control}
              name="projectDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date: any) => field.onChange(date)}
                  selected={field?.value ? new Date(field.value) : null}
                  dateFormat="dd/MM/yyyy"
                />
              )}
            />
            {errors.projectDate && <span>{errors.projectDate.message}</span>}
          </div>

          <Button type={ButtonTypes.primary}>
            <button disabled={loading}>
              {t.common.next}
              <Icon type={IconTypes.arrow} />
              {loading && (
                <div className={styles.main__item}>
                  <div className={styles.animated__background}>
                    <div></div>
                  </div>
                </div>
              )}
            </button>
          </Button>
        </form>
      </div>
    </section>
  )
}

export default CreateProject
