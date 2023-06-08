import Link from 'next/link'
import dynamic from 'next/dynamic'

import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTranslate } from 'hooks/useTranslate'

import Icon, { IconTypes } from 'components/ui/Icon'
import styles from './SendPDF.module.scss'
import Button, { ButtonTypes } from 'components/ui/Button'
import { useState } from 'react'

import PDF from '../PDF'

import { PDFDownloadLink } from '@react-pdf/renderer'
import NonSSRWrapper from 'components/NonSSRWrapper'
import { useStateMachine } from 'little-state-machine'

const Select = dynamic(() => import('react-select'), {
  ssr: false
})

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: 0,
    boxShadow: 'unset',
    borderRadius: 0,
    '&:hover': {
      border: 0
    }
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected && '#262f5e',
    backgroundColor: state.isSelected ? '#deeff1' : '#fff',

    '&:hover': {
      backgroundColor: '#deeff1'
    }
  }),

  valueContainer: (provided: any) => ({
    ...provided,
    paddingLeft: 0,
    fontSize: '1.8rem'
  }),

  indicatorSeparator: () => ({
    display: 'none'
  })
}

const schema = yup.object({
  naam: yup.string().required(),
  bedrijf: yup.string().required(),
  email: yup.string().email().required(),
  gsm: yup.string().required(),
  profile: yup.mixed(),
  opmerkingen: yup.string().required(),
  privacy: yup.bool(),
  newsletter: yup.bool()
})

interface ISendPDFForm {
  naam: string
  bedrijf: string
  email: string
  gsm: string
  opmerkingen: string
  profile: string
  privacy: boolean
  newsletter: boolean
}

const SendPDF = ({ closeModal }: any) => {
  const [profile, setProfile] = useState('')
  const [response, setResponse] = useState(false)
  const { t } = useTranslate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISendPDFForm>({
    resolver: yupResolver(schema)
  })

  const handleChange = (e: any) => {
    setProfile(e.value)
  }

  const onSubmit = async (data: ISendPDFForm) => {
    const body = { ...data, profile }
    const res = await fetch('/api/send-email', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    const x = await res.json()
    if (x.ok === true) {
      setResponse(true)
    }
  }

  const { state } = useStateMachine()

  return (
    <div className={styles.sendPDF}>
      <button onClick={closeModal}>
        <Icon type={IconTypes.close} />
      </button>
      <div>
        <h1>{t.modal.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('naam')}
            />
            <label htmlFor="name">{t.modal.fields.name}</label>
            {errors.naam && <span>{errors.naam.message}</span>}
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('bedrijf')}
            />
            <label htmlFor="name">{t.modal.fields.company}</label>
            {errors.bedrijf && <span>{errors.bedrijf.message}</span>}
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('email')}
            />
            <label htmlFor="name">{t.modal.fields.email}</label>
            {errors.email && <span>{errors.email.message}</span>}
          </fieldset>
          <fieldset>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('gsm')}
            />
            <label htmlFor="name">{t.modal.fields.gsm}</label>
            {errors.gsm && <span>{errors.gsm.message}</span>}
          </fieldset>
          <div className={styles.dropdown}>
            <Select
              styles={customStyles}
              placeholder="Profile"
              onChange={handleChange}
              options={[
                {
                  value: t.common.summaryDropdown[0],
                  label: t.common.summaryDropdown[0]
                },
                {
                  value: t.common.summaryDropdown[1],
                  label: t.common.summaryDropdown[1]
                },
                {
                  value: t.common.summaryDropdown[2],
                  label: t.common.summaryDropdown[2]
                },
                {
                  value: t.common.summaryDropdown[3],
                  label: t.common.summaryDropdown[3]
                },
                {
                  value: t.common.summaryDropdown[4],
                  label: t.common.summaryDropdown[4]
                },
                {
                  value: t.common.summaryDropdown[5],
                  label: t.common.summaryDropdown[5]
                }
              ]}
            />
          </div>
          <fieldset>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder=" "
              {...register('opmerkingen')}
            />
            <label htmlFor="name">{t.modal.fields.comments}</label>
            {errors.opmerkingen && <span>{errors.opmerkingen.message}</span>}
          </fieldset>
          <div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="privacy" {...register('privacy')} />
              <label htmlFor="privacy">
                {t.modal.fields.privacy}
                <br />
                <Link href="/privacy">{t.modal.fields.privacyLink}</Link>
              </label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="privacy" {...register('newsletter')} />
              <label htmlFor="privacy">{t.modal.fields.newsletter}</label>
            </div>
          </div>
          <Button type={ButtonTypes.primary}>
            <button>
              {t.modal.fields.btn}
              <Icon type={IconTypes.arrow} />
            </button>
          </Button>
          {response && (
            <NonSSRWrapper>
              <Button type={ButtonTypes.primary}>
                <PDFDownloadLink
                  document={<PDF state={state} />}
                  fileName="somename.pdf"
                >
                  {({ loading }: any) =>
                    loading ? 'Loading document...' : 'Download PDF'
                  }
                </PDFDownloadLink>
              </Button>
            </NonSSRWrapper>
          )}
        </form>
      </div>
    </div>
  )
}

export default SendPDF
