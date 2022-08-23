import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { MainProviders } from 'ui/providers'
import * as C from 'ui/components'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(
    <MainProviders>
      {children}
      <C.Toast />
    </MainProviders>
  )
