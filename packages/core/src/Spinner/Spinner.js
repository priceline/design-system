import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { height, space, width } from 'styled-system'
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

  ${(props) => !props.width && !props.height && applySizes(sizes)};
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

  ${height} ${space} ${width}
`

function Spinner({ color, icon, ...props }) {
  return (
    <RelativeFlex justifyContent='center' alignItems='center' {...props}>
      <Ring color={color} />
      {icon && React.cloneElement(icon, { color: icon.props.color || color })}
    </RelativeFlex>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.node,
  ...height.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

Spinner.defaultProps = {
  color: 'primary',
  size: 'medium',
}

export default Spinner
