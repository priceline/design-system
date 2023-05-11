import { system } from 'styled-system'

export const objectFitValues = ['contain', 'cover', 'unset'] as const

export type ObjectFit = typeof objectFitValues[number]

export function objectFit() {
  return system({
    objectFit: {
      property: 'objectFit',
      transform: (val) => val ?? 'unset',
    }
  })
}
