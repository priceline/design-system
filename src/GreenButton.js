import styled from 'styled-components'
import Button from './Button'

const GreenButton = styled(Button)`
  background-color: ${props => props.theme.colors.green};
`

export default GreenButton
