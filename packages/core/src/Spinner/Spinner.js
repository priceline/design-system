import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { Flex } from '..'
import { applySizes, getPaletteColor } from '../utils'

const sizes = {
  small: css`
    width: 48px;
    height: 48px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  `,
  medium: css`
    width: 64px;
    height: 64px;

    & > svg {
      width: 24px;
      height: 24px;
    }
  `,
  large: css`
    width: 96px;
    height: 96px;

    & > svg {
      width: 36px;
      height: 36px;
    }
  `,
}

const RelativeFlex = styled(Flex)`
  position: relative;

  ${applySizes(sizes, null)};
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Ring = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${getPaletteColor('base')};
  border-top: 2px solid ${getPaletteColor('background.lightest')};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

function Spinner({ children, color, ...props }) {
  children && React.Children.only(children)

  return (
    <RelativeFlex justifyContent='center' alignItems='center' {...props}>
      <Ring color={color} />
      {children &&
        React.cloneElement(children, {
          color: children?.props?.color || color,
        })}
    </RelativeFlex>
  )
}

Spinner.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.oneOf(Object.keys(sizes)),
        PropTypes.string,
        PropTypes.number,
      ])
    ),
  ]),
}

Spinner.defaultProps = {
  color: 'primary',
  size: 'medium',
}

export default Spinner
