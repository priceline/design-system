import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, themeGet } from 'styled-system'
import { getPaletteColor } from './utils'
import Box from './Box'
import Input from './Input'

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => getPaletteColor(props.borderColor, 'base')(props)}
    ${space} & > ${Box} {
    width: 100%;
    flex: 1 1 auto;
  }

  & ${Input} {
    border: 0;
    box-shadow: none;
  }
`

InputGroup.propTypes = {
  ...space.propTypes,
  borderColor: PropTypes.string
}

InputGroup.defaultProps = {
  borderColor: 'border'
}

export default InputGroup
