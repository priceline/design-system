import { style } from 'styled-system'

export const objectFitValues = ['contain', 'cover', 'unset'] as const

export type ObjectFit = typeof objectFitValues[number]

export function objectFit() {
  return style({
    prop: 'objectFit',
    cssProperty: 'object-fit',
  })
}
