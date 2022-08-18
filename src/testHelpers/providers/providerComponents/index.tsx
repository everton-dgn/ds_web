import { render, RenderResult } from '@testing-library/react'
import { ReactNode } from 'react'
import { MainProviders } from 'ui/providers'

export const renderWithProviders = (children: ReactNode): RenderResult =>
  render(<MainProviders>{children}</MainProviders>)
