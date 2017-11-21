import { Card } from './index'

const DropdownMenu = Card.extend`
  height: 200px;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;
`

DropdownMenu.displayName = 'DropdownMenu'

export default DropdownMenu
