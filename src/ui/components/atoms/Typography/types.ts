export type Align = 'left' | 'center' | 'right'

export type Typography = 'headline' | 'paragraph' | 'caption'

export type TypographyProps = {
  text: string
  type: Typography
  align?: Align
}
