import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '../Box'
import { getAnimationCss } from './helpers'

const Wrapper = styled(Box)`
  ${getAnimationCss}
`

const propTypes = {
  isAnimatedState: PropTypes.bool,
  variation: PropTypes.string,
  children: PropTypes.node,
}

const Motion: React.FC<InferProps<typeof propTypes>> = ({ children, isAnimatedState, variation }) => (
  <Wrapper isAnimatedState={isAnimatedState} variation={variation} data-testid='motion-wrapper'>
    {children}
  </Wrapper>
)

Motion.defaultProps = {
  variation: 'growCenter',
}

Motion.propTypes = propTypes

export default Motion
