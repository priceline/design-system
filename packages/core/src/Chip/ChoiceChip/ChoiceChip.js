import React from 'react'
import PropTypes from 'prop-types'
import { space, fontSize } from 'styled-system'
import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'

const ChoiceChip = ({
  id,
  disabled,
  selected,
  children,
  onClick,
  label,
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
      {...props}
    >
      {children}
    </ChipContent>
  </ChipLabel>
)

ChoiceChip.displayName = 'Chip'

ChoiceChip.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  Icon: PropTypes.node,
  action: PropTypes.shape({
    Icon: PropTypes.node,
    title: PropTypes.string,
  }),
  Image: PropTypes.object,
}

ChoiceChip.defaultProps = {
  color: 'primary',
}

export default ChoiceChip
