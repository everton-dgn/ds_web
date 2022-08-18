import { lazy } from 'react'

export { default as DefaultTemplate } from './DefaultTemplate'
export const ErrorTemplate = lazy(() => import('./ErrorTemplate'))
