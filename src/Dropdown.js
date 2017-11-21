import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../src'

const Dropdown = props => (
  <Flex justify="center" align="center" direction="column" width={props.width}>
    {props.children}
  </Flex>
)

Dropdown.displayName = 'Dropdown'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Dropdown.propTypes = {
  width: numberStringOrArray
}

export default Dropdown
