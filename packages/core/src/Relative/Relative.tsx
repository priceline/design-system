import styled from 'styled-components'
import { Box } from '../Box'
import { top, right, bottom, left, zIndex } from 'styled-system'
import { AbsoluteProps } from '../Absolute/Absolute'

interface RelativeProps extends AbsoluteProps {}

const Relative = styled(Box)<RelativeProps>`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
` as React.FC<RelativeProps>

Relative.displayName = 'Relative'

export default Relative
