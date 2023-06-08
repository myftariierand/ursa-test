import { FC } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTranslate } from 'hooks/useTranslate'

import Button, { ButtonTypes } from 'components/ui/Button'
import Icon, { IconTypes } from 'components/ui/Icon'

import styles from './ReportForm.module.scss'

interface IForm {
  name: string
  email: string
  comment: string
}

interface IProps {
  closeModal: () => void
}

const ReportForm: FC<IProps> = ({ closeModal }) => {
  const { t } = useTranslate()

  const schema = yup.object({
    name: yup.string().required(t.common.form.name),
    email: yup.string().email().required(t.common.form.email),
    comment: yup.string().required(t.common.form.comment)
  })

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: IForm) => {
    await fetch('/api/report-email', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    reset()
    closeModal()
  }

  return (
    <div className={styles.report}>
      <button onClick={closeModal}>
        <Icon type={IconTypes.close} />
      </button>
      <h1>{t.common.sendReport}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder=" "
            {...register('name')}
          />
          <label htmlFor="name">{t.modal.fields.name}</label>
          {errors.name && <span>{errors.name.message}</span>}
        </fieldset>
        <fieldset>
          <input
            type="text"
            id="email"
            autoComplete="off"
            placeholder=" "
            {...register('email')}
          />
          <label htmlFor="name">{t.modal.fields.email}</label>
          {errors.email && <span>{errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <textarea
            id="comment"
            rows={5}
            placeholder=" "
            {...register('comment')}
          />
          <label htmlFor="comment">{t.modal.fields.comments}</label>
          {errors.comment && <span>{errors.comment.message}</span>}
        </fieldset>

        <Button type={ButtonTypes.primary}>
          <button>
            {t.modal.fields.btn}
            <Icon type={IconTypes.arrow} />
          </button>
        </Button>
      </form>
    </div>
  )
}

export default ReportForm
