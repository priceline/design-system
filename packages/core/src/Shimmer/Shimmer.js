import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { Box } from '..'
import PropTypes from 'prop-types'

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
  background-color: #eee; // This color does not exist in the default theme
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  ${(props) => props.height && `height: ${props.height};`}
  overflow: hidden;
`

const Glare = styled.span`
  display: inline-block;
  background-image: linear-gradient(
    to right,
    rgba(245, 245, 245, 0) 0%,
    rgba(245, 245, 245, 1) 50%,
    rgba(245, 245, 245, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    left,
    rgba(245, 245, 245, 0) 0%,
    rgba(245, 245, 245, 1) 50%,
    rgba(245, 245, 245, 0) 100%
  );
  animation: ${animationRule};
  height: 100%;
  width: 200px;

  // Disable animation for users that prefer reduced motion for accessibility
  @media (prefers-reduced-motion) {
    animation: none;
  }
`

const Shimmer = ({ animationWidth, disable, ...props }) => {
  return (
    <Wrapper {...props} data-testid='Shimmer__Wrapper'>
      {!disable && (
        <Glare animationWidth={animationWidth + 200} data-testid='Shimmer__Glare'>
          &zwnj;
        </Glare>
      )}
    </Wrapper>
  )
}

Shimmer.defaultProps = {
  animationWidth: 100,
  disable: false,
}

Shimmer.propTypes = {
  ...Box.propTypes,
  animationWidth: PropTypes.number,
  className: PropTypes.string,
  disable: PropTypes.bool,
}

export default Shimmer
