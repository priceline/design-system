import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import Tag from 'clean-tag'
import PropTypes from 'prop-types'
import icons from '../icons.json'
import theme from './theme'

// Should be removed eventually after v1.0.0
const aliases = {
  scrollLeft: 'chevronLeft',
  chevronLight: 'chevronDown',
  chevronThick: 'chevronDownThick',
  // aliases for breaking changes from #153
  // should add propType warnings similar to the color name deprecation getters
  box: 'boxEmpty',
  car: 'cars',
  cruise: 'cruises',
  description: 'document',
  hotel: 'hotels',
  allInclusive: 'inclusive',
  radioFilled: 'radioChecked',
  radio: 'radioEmpty',
  add: 'radioPlus',
  minus: 'radioMinus',
  businessSeat: 'seatBusiness',
  economySeat: 'seatEconomy',
  plane: 'flights'
}

const getPath = ({ name, legacy }) => {
  if (!legacy) {
    return icons[name] || icons.legacy[name]
  }
  return icons.legacy[name] || icons[name] || icons[aliases[name]]
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
  theme,
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
  ...space.propTypes,
  name: ({ name }) => {
    if (aliases[name] && !icons[name] && !icons.legacy[name]) {
      console.warn(
        `Using '${name}' as an Icon name has been deprecated. Use '${
          aliases[name]
        }' instead.`
      )
    }

    if (!allKeys.includes(name)) {
      return new Error(
        `Failed prop type: Invalid prop name of value '${name}' supplied to Icon, expected one of ${allKeys.toString()} is expected`
      )
    }
  },
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  legacy: PropTypes.bool,
  color: PropTypes.string
}

export default Icon
