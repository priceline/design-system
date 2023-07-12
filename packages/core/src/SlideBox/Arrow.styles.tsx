import styled from 'styled-components'
import { Button } from '../Button'
import { Flex } from '../Flex'
import { Absolute } from '../Absolute'

const RoundButton = styled(Button)`
  position: relative;
  z-index: 999;
  height: ${({ height }) => height};
`

const RelativeFlex = styled(Flex)`
  position: relative;
`

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
    buttonSize: '60px',
    iconSize: 40,
  },
}

export { RoundButton, RelativeFlex, AbsoluteTransformLeft, AbsoluteTransformRight, ARROW_SIZES }
