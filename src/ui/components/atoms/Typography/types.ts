export type Align = 'left' | 'center' | 'right'

export type Typography =
  | 'headline'
  | 'paragraphHighlight'
  | 'paragraph'
  | 'caption'

export type Color = 'black' | 'error'

export type TypographyProps = {
  text: string
  type: Typography
  align?: Align
  color?: Color
  role?: string
}
