import React from 'react'
import styled from 'styled-components'
import { space, color, propTypes, cleanElement } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.json'

const getPath = ({ name }) => icons[name]

// Remove `space` props from the `svg` element prevents react warnings
const CleanSvg = cleanElement('svg')
CleanSvg.propTypes = {
  ...propTypes.space
}

const Base = ({ name, size, ...props }) => {
  const icon = getPath({ name })
  if (!icon) return false

  return (
    <CleanSvg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={icon.path} />
    </CleanSvg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24
}

const keys = Object.keys({
  ...icons
})

Icon.propTypes = {
  name: ({ name }) => {
    if (!keys.includes(name)) {
      return new Error(
        `Failed prop type: Invalid prop name of value '${name}' supplied to Icon, expected one of ${keys.toString()} is expected`
      )
    }
  },
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
}

export default Icon
