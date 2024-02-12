import styled from 'styled-components'
import { Absolute } from '../Absolute/Absolute'

const Wrapper = styled(Absolute)`
  position: fixed;
  ${(props) => (props.positionVariant === 'centerRight' ? 'transform: translateY(-50%);' : '')}
`

export { Wrapper }
