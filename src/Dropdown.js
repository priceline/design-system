import { flexDirection } from 'styled-system'
import Flex from './Flex'

const Dropdown = Flex.extend`
  ${flexDirection};
`

Dropdown.displayName = 'Dropdown'

export default Dropdown
