import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from '../Box'
import { getAnimationCss } from './helpers'

const Wrapper = styled(Box)`
  ${getAnimationCss}
`

const Motion = ({ children, isAnimatedState, variation }) => (
  <Wrapper isAnimatedState={isAnimatedState} variation={variation} data-testid='motion-wrapper'>
    {children}
  </Wrapper>
)

Motion.defaultProps = {
  variation: 'growCenter',
}

Motion.propTypes = {
  isAnimatedState: PropTypes.bool,
  variation: PropTypes.string,
}

export default Motion
