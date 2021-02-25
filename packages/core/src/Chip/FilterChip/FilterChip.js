import React from 'react'
import PropTypes from 'prop-types'
import { space, fontSize } from 'styled-system'
import { Close } from 'pcln-icons'
import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'

const getTitle = ({ disabled }) => (disabled ? 'Disabled' : 'Close')

const FilterChip = ({
  id,
  disabled,
  selected,
  children,
  onClick,
  label,
  showActionIcon,
  ...props
}) => (
  <ChipLabel htmlFor={id} {...props}>
    <ChipInput
      type='checkbox'
      role='checkbox'
      id={id}
      disabled={disabled}
      checked={selected}
      onChange={onClick}
    />
    <ChipContent
      label={label}
      disabled={disabled}
      selected={selected}
      action={showActionIcon && { Icon: Close, title: getTitle(props) }}
      {...props}
    >
      {children}
    </ChipContent>
  </ChipLabel>
)

FilterChip.displayName = 'FilterChip'

FilterChip.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
}

FilterChip.defaultProps = {
  color: 'primary',
}

export default FilterChip
