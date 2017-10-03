import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'

import Text from './Text'

const Truncate = Text.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

Truncate.displayName = 'Truncate'

export default Truncate
