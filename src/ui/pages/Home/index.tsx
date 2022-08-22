import { FormEvent, useRef, useState } from 'react'
import { useSetPageTitle } from 'hooks'
import { formHomeValidate } from 'validation/formHomeValidate'
import { FormErrorType, FormType } from './types'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as Logo } from 'ui/assets/images/logo.svg'

const Home = () => {
  const [form, setForm] = useState<FormType>({})
  const [formError, setFormError] = useState<FormErrorType>({})
  const [disabledButton, setDisabledButton] = useState(true)
  useSetPageTitle({ pageTitle: 'Informe seus dados' })
  const refPhone = useRef<HTMLInputElement>(null)
  const refCpf = useRef<HTMLInputElement>(null)
  const refEmail = useRef<HTMLInputElement>(null)

  const phone = (): string => refPhone.current?.value || ''
  const cpf = (): string => refCpf.current?.value || ''
  const email = (): string => refEmail.current?.value || ''

  const ChecksIfFieldsAreEmpty = (): boolean => {
    return !(phone() && cpf() && email())
  }

  const handleChecksIfFieldsAreEmpty = (): void => {
    if (!ChecksIfFieldsAreEmpty() && disabledButton) {
      setDisabledButton(false)
    }
    if (ChecksIfFieldsAreEmpty() && !disabledButton) {
      setDisabledButton(true)
    }
  }

  const onSetField = (e: FormEvent<HTMLInputElement>): void => {
    handleChecksIfFieldsAreEmpty()
    const { name, value } = e.currentTarget
    setForm({ ...form, [name]: value })
    setFormError({ ...formError, [name]: formHomeValidate(name, value) })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.clear()
    if (!Object.values(formError).filter(el => el.length).length) {
      // eslint-disable-next-line no-console
      console.log('Dados do Formulário:')
      // eslint-disable-next-line no-console
      console.log(form, formError)
    } else {
      // eslint-disable-next-line no-console
      console.log('Dados Inválidos')
      // eslint-disable-next-line no-console
      console.log(formError)
    }
  }

  return (
    <S.Container>
      <Logo
        width={166}
        height={52}
        title="Logo Carrefour Soluções Financeiras"
      />

      <C.Typography text="Informe seus dados" type="headline" />

      <S.Form onSubmit={e => handleSubmit(e)}>
        <S.WrapperInputs>
          <C.Input
            name="phone"
            placeholder="(XX) 90000-0000"
            label="Número do celular"
            error={formError.phone?.[0]}
            ref={refPhone}
            onSetField={onSetField}
            maskType="phone"
          />
          <C.Input
            name="cpf"
            placeholder="000.000.000-00"
            label="Seu CPF"
            error={formError.cpf?.[0]}
            ref={refCpf}
            onSetField={onSetField}
            maskType="cpf"
          />
          <C.Input
            name="email"
            placeholder="email@mail.com"
            label="Seu e-mail"
            error={formError.email?.[0]}
            ref={refEmail}
            onSetField={onSetField}
            maxLength={60}
          />
        </S.WrapperInputs>

        <C.Button
          text="Próximo"
          size="medium"
          color="blue"
          aria-label="Avançar para próxima etapa no formulário"
          type="submit"
          disabled={disabledButton}
        />
      </S.Form>
    </S.Container>
  )
}

export default Home
