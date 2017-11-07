import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.json'

// Should be removed eventually after v1.0.0
const aliases = {
  scrollLeft: icons.chevronLeft,
  chevronLight: icons.chevronDown,
  chevronThick: icons.chevronDownThick
}

const getPath = ({ name, legacy }) => {
  if (!legacy) {
    return icons[name] || icons.legacy[name]
  }
  return icons.legacy[name] || icons[name] || aliases[name]
}

const Base = ({ name, size, legacy, ...props }) => {
  const icon = getPath({ name, legacy })
  if (!icon) return false

  return (
    <svg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={icon.path} />
    </svg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24,
  legacy: true
}

const allKeys = Object.keys({
  ...icons,
  ...icons.legacy,
  ...aliases
})

Icon.propTypes = {
  name: PropTypes.oneOf(allKeys).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  legacy: PropTypes.bool
}

export default Icon
