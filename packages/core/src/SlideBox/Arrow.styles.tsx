import styled from 'styled-components'
import { Absolute } from '../Absolute'

const AbsoluteTransformLeft = styled(Absolute)`
  transform: translateX(-50%);
`

const AbsoluteTransformRight = styled(Absolute)`
  transform: translateX(50%);
`

const ARROW_SIZES = {
  sm: {
    buttonSize: 40,
    iconSize: 32,
  },
  lg: {
    buttonSize: [40, null, null, null, 60],
    iconSize: [32, null, null, null, 40],
  },
}

export { AbsoluteTransformLeft, AbsoluteTransformRight, ARROW_SIZES }
