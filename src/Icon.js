import React from 'react'
import styled from 'styled-components'
import { space, size, color } from 'styled-system'
import Tag from 'clean-tag'
import PropTypes from 'prop-types'
import icons from '../icons.json'
import theme from './theme'

const getPath = ({ name }) => icons[name]

const Base = ({ name, size, ...props }) => {
  const icon = getPath({ name })
  if (!icon) return false

  return (
    <Tag is="svg" {...props} viewBox={icon.viewBox} fill="currentcolor">
      <path d={icon.path} />
    </Tag>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${size} ${color};
`

Icon.displayName = 'Icon'

Icon.isIcon = true

Icon.defaultProps = {
  theme,
  name: 'checkLight',
  size: 24
}

const keys = Object.keys({
  ...icons
})

Icon.propTypes = {
  ...space.propTypes,
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
