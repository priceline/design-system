import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { ChevronDown } from 'pcln-icons'
import { ChipContent } from '../ChipContent'
import { ChipContentWrapper } from '../ChipContentWrapper'
import { Button } from '../../Button'
import { getPaletteColor } from '../../utils'

const ChipButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    box-shadow: none;
    outline-offset: 2px;
    outline: 3px solid ${getPaletteColor('base')};
  }
  &:focus > ${ChipContentWrapper} {
    border-color: ${getPaletteColor('base')};
  }
`

const getTitle = ({ disabled, expanded }) => (disabled ? 'Disabled' : expanded ? 'Collapse' : 'Expand')

const propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
}

const ButtonChip: React.FC<InferProps<typeof propTypes>> = ({
  id,
  m,
  disabled,
  expanded,
  children,
  onClick,
  label,
  showActionIcon,
  ...props
}) => (
  <ChipButton id={id} data-testid={id} disabled={disabled} onClick={onClick} aria-expanded={expanded} m={m}>
    <ChipContent
      label={label}
      disabled={disabled}
      selected={expanded}
      action={
        showActionIcon && {
          Icon: ChevronDown,
          title: getTitle({ disabled, expanded }),
        }
      }
      {...props}
    >
      {children}
    </ChipContent>
  </ChipButton>
)

ButtonChip.displayName = 'ButtonChip'

ButtonChip.propTypes = propTypes

ButtonChip.defaultProps = {
  color: 'primary',
}

export default ButtonChip
