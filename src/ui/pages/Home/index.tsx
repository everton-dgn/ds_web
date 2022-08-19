import { FormEvent, useRef, useState } from 'react'
import { useSetPageTitle } from 'hooks'
import * as S from './styles'
import * as C from 'ui/components'
import { ReactComponent as Logo } from 'ui/assets/images/logo.svg'

const Home = () => {
  const [disabledButton, setDisabledButton] = useState(true)
  useSetPageTitle({ pageTitle: 'Informe seus dados' })
  const refPhone = useRef<HTMLInputElement>(null)
  const refCpf = useRef<HTMLInputElement>(null)
  const refEmail = useRef<HTMLInputElement>(null)

  const phone = (): string | undefined => refPhone.current?.value
  const cpf = (): string | undefined => refCpf.current?.value
  const email = (): string | undefined => refEmail.current?.value

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // eslint-disable-next-line no-console
    console.clear()
    // eslint-disable-next-line no-console
    console.log('Dados do Formulário:')
    // eslint-disable-next-line no-console
    console.log({ cpf: 3223232323 })
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
            placeholder="(xx) 0000-0000"
            label="Número do celular"
            error={'Error'}
            ref={refPhone}
            onChange={handleChecksIfFieldsAreEmpty}
          />
          <C.Input
            placeholder="000.000.000-00"
            label="Seu CPF"
            error={''}
            ref={refCpf}
            onChange={handleChecksIfFieldsAreEmpty}
          />
          <C.Input
            placeholder="email@mail.com"
            label="Seu e-mail"
            error={'Error'}
            type="email"
            ref={refEmail}
            onChange={handleChecksIfFieldsAreEmpty}
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
