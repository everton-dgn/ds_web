export const formatNumber = (value: string): string => {
  return value.replace(/[^\d]+/g, '')
}
