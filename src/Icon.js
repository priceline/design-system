import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.json'

// Should be removed eventually after v1.0.0
const aliases = {
  srollLeft: icons.chevronLeft,
  chevronLight: icons.chevronDown,
  chevronThick: icons.chevronDownThick
}

const getPath = ({ name, next }) => {
  if (next) {
    return icons[name]
  }
  return icons.legacy[name] || icons[name] || aliases[name]
}

const Base = ({ name, size, next, ...props }) => {
  const icon = getPath({ name, next })
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
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24
}

const allKeys = Object.keys({
  ...icons,
  ...icons.legacy,
  ...aliases
})

Icon.propTypes = {
  name: PropTypes.oneOf(allKeys).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  next: PropTypes.bool
}

export default Icon
