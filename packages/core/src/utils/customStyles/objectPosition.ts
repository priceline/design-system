import { style } from 'styled-system'

const OBJECT_POISITION_PROPS_TO_CSS_VALUE = {
  left: 'left',
  right: 'right',
  top: 'top',
  topLeft: 'top left',
  topRight: 'top right',
  bottom: 'bottom',
  bottomLeft: 'bottom left',
  bottomRight: 'bottom right',
  center: 'center',
}

export const objectPositionValues = [
  'left',
  'right',
  'top',
  'topLeft',
  'topRight',
  'bottom',
  'bottomLeft',
  'bottomRight',
  'center',
] as const

export type ObjectPosition = typeof objectPositionValues[number]

export function objectPosition() {
  return style({
    prop: 'objectPosition',
    cssProperty: 'object-position',
    transformValue: (val) => OBJECT_POISITION_PROPS_TO_CSS_VALUE[val],
  })
}
