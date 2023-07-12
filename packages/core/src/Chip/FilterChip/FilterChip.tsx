import React from 'react'
import PropTypes from 'prop-types'
import { SpaceProps, FontSizeProps } from 'styled-system'
import { Close } from 'pcln-icons'
import propTypes from '@styled-system/prop-types'

import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'
import { boxShadowSizeValues, BoxShadowSize } from '../../utils'

const getTitle = ({ disabled, actionTitle }) => `${actionTitle}${disabled ? ' disabled' : ''}`

const filterChipPropTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
  actionTitle: PropTypes.string,
  value: PropTypes.string,
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
}

export interface IFilterChipProps extends SpaceProps, FontSizeProps {
  id?: string
  name?: string
  disabled?: boolean
  selected?: boolean
  onClick?: (unknown) => void
  label?: string
  showActionIcon?: boolean
  actionTitle?: string
  value?: string | number
  color?: string
  boxShadowSize?: BoxShadowSize
  children?: React.ReactNode | string
}

const FilterChip: React.FC<IFilterChipProps> = ({
  id,
  name,
  disabled,
  selected,
  children,
  onClick,
  label,
  showActionIcon,
  actionTitle,
  value,
  boxShadowSize,
  ...props
}) => (
  <ChipLabel htmlFor={id} {...props}>
    <ChipInput
      type='checkbox'
      role='checkbox'
      id={id}
      name={name}
      data-testid={id}
      disabled={disabled}
      checked={selected}
      onChange={onClick}
      value={value}
    />
    <ChipContent
      label={label}
      disabled={disabled}
      selected={selected}
      boxShadowSize={boxShadowSize}
      action={
        showActionIcon && {
          Icon: Close,
          title: getTitle({ disabled, actionTitle }),
        }
      }
      {...props}
    >
      {children}
    </ChipContent>
  </ChipLabel>
)

FilterChip.displayName = 'FilterChip'

FilterChip.propTypes = filterChipPropTypes

FilterChip.defaultProps = {
  color: 'primary',
  actionTitle: 'Close',
}

export default FilterChip
