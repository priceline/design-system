import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Button from './Button'

const OutlineButton = styled(Button)`
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: currentcolor;
  ${color}
`

OutlineButton.propTypes = {
  color: PropTypes.string
}

OutlineButton.defaultProps = {
  color: 'blue'
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
