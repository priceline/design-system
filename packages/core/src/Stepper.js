import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Flex from './Flex'
import Step from './Step'

const StyledFlex = styled(Flex)`
  & > :not(:last-child) {
    margin-right: ${themeGet('space.4')}px;
  }
`

function Stepper({ className, children }) {
  return <StyledFlex className={className}>{children}</StyledFlex>
}

Stepper.displayName = 'Stepper'

Stepper.Step = Step

Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

Stepper.defaultProps = {
  className: ''
}

export default Stepper
