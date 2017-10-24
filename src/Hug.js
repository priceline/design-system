import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Hug = styled(Card)`
  border-radius: ${props => props.theme.radius}
`

Hug.defaultProps = {
  bg: 'green',
  borderColor: 'green',
  borderWidth: 1
}

Hug.propTypes = {
  bg: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  iconName: PropTypes.string
}

export default Hug
