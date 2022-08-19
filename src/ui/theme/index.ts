import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { spacings } from './spacings'
import { fonts } from './typographies'
import { windowSizes } from './windowSizes'
import { borderRadius, grid, columns } from './base'

const T = {
  colors,
  fonts,
  spacings,
  breakpoints,
  windowSizes,
  borderRadius,
  grid,
  columns
} as const

export default T
