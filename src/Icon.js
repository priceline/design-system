import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.json'

const Base = ({
  name,
  size,
  ...props
}) => {
  const icon = icons[name]
  if (!icon) return false

  return (
    <svg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill='currentcolor'>
      <path d={icon.path} />
    </svg>
  )
}

const Icon = styled(Base)`
  ${space}
  ${color}
`

Icon.defaultProps = {
  name: 'checkLight',
  size: 24
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]) 
}

export default Icon
