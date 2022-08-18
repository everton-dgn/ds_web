import * as C from 'ui/components'
import { MainProvidersProps } from './types'
import 'ui/globalStyles/index.module.css'

export const MainProviders = ({ children }: MainProvidersProps) => (
  <C.ErrorBoundary>{children}</C.ErrorBoundary>
)
