import { system } from 'styled-system'

/**
 * @public
 */
export const objectFitValues = ['contain', 'cover', 'unset'] as const

/**
 * @public
 */
export type ObjectFit = (typeof objectFitValues)[number]

/**
 * @public
 */
export function objectFit() {
  return system({
    objectFit: {
      property: 'objectFit',
      transform: (val) => val ?? 'unset',
    },
  })
}
