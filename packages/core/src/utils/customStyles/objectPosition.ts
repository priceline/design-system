import { system } from 'styled-system'

const OBJECT_POSITION_PROPS_TO_CSS_VALUE = {
  left: 'left',
  right: 'right',
  top: 'top',
  topLeft: 'top left',
  topRight: 'top right',
  bottom: 'bottom',
  bottomLeft: 'bottom left',
  bottomRight: 'bottom right',
  center: 'center',
  centerTop: 'center top',
  centerBottom: 'center bottom',
  centerLeft: 'center left',
  centerRight: 'center right',
}

const values = Object.values(OBJECT_POSITION_PROPS_TO_CSS_VALUE)

export const objectPositionValues = [...values] as const

export type ObjectPosition = typeof objectPositionValues[number]

export function objectPosition() {
  return system({
    objectPosition: {
      property: 'objectPosition',
      transform: (val) =>
        OBJECT_POSITION_PROPS_TO_CSS_VALUE[val] ?? OBJECT_POSITION_PROPS_TO_CSS_VALUE.center,
    },
  })
}
