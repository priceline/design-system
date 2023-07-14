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
    buttonSize: '40px',
    iconSize: 32,
  },
  lg: {
    buttonSize: ['40px', '40px', '40px', '40px', '60px'],
    iconSize: [32, 32, 32, 32, 40],
  },
}

export { AbsoluteTransformLeft, AbsoluteTransformRight, ARROW_SIZES }
