import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Box } from '..'
import PropTypes, { InferProps } from 'prop-types'
import { VariationType, VARIATION_BACKGROUND_COLORS, VARIATION_GLARE_GRADIENTS } from './constants'

const animation = (props) => keyframes`
  0% {
    transform: translateX(-200px)
  }
  100% {
    transform: translateX(${props.animationWidth}px)
  }
`

const animationRule = css`
  ${animation} 1.2s ease-in-out infinite;
`

const Wrapper = styled(Box)`
  background-color: ${(props) => VARIATION_BACKGROUND_COLORS[props.variation]};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  ${(props) => props.height && `height: ${props.height};`}
  overflow: hidden;
`

const Glare = styled.span`
  display: inline-block;
  background-image: linear-gradient(to right, ${(props) => VARIATION_GLARE_GRADIENTS[props.variation]});
  background-image: -webkit-linear-gradient(left, ${(props) => VARIATION_GLARE_GRADIENTS[props.variation]});
  animation: ${animationRule};
  height: 100%;
  width: 200px;

  // Disable animation for users that prefer reduced motion for accessibility
  @media (prefers-reduced-motion) {
    animation: none;
  }
`

const propTypes = {
  ...Box.propTypes,
  animationWidth: PropTypes.number,
  className: PropTypes.string,
  disable: PropTypes.bool,
  variation: PropTypes.oneOf([VariationType.Base, VariationType.Light, VariationType.Dark]),
}

const Shimmer: React.FC<InferProps<typeof propTypes>> = ({ animationWidth, disable, ...props }) => {
  return (
    <Wrapper {...props} data-testid='Shimmer__Wrapper'>
      {!disable && (
        <Glare animationWidth={animationWidth + 200} data-testid='Shimmer__Glare' variation={props.variation}>
          &zwnj;
        </Glare>
      )}
    </Wrapper>
  )
}

Shimmer.defaultProps = {
  animationWidth: 100,
  disable: false,
  variation: VariationType.Base,
}

Shimmer.propTypes = propTypes

export default Shimmer
