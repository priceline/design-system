import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Flex, getPaletteColor, borderRadiusAttrs } from 'pcln-design-system'
import { borderRadius } from 'styled-system'
import { Check as CheckIcon } from 'pcln-icons'

const MenuButton = styled(Button).attrs(borderRadiusAttrs)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid transparent;
  color: ${getPaletteColor('text.dark')};
  outline: none;
  padding: 12px;

  &:hover {
    background-color: ${getPaletteColor('base')};
  }

  ${(props) =>
    props.selected
      ? `background-color: ${getPaletteColor('background.base')(props)};`
      : `background-color: ${getPaletteColor('background.lightest')(props)};`}

  ${borderRadius};
`

const MenuItem = React.forwardRef(function MenuItem(
  { id, selected, children, handleClose, onClick, ...props },
  ref
) {
  const handleClick = useCallback(() => {
    onClick && onClick()
    handleClose && handleClose()
  }, [onClick, handleClose])

  return (
    <MenuButton
      id={id}
      ref={ref}
      role='option'
      aria-selected={selected}
      selected={selected}
      onClick={handleClick}
      borderRadius='lg'
      {...props}
    >
      <Flex alignItems='center'>{children}</Flex>
      {selected && <CheckIcon title='check' size={20} ml={3} />}
    </MenuButton>
  )
})

MenuItem.displayName = 'MenuItem'

MenuItem.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  onClick: PropTypes.func,
}

MenuItem.defaultProps = {
  color: 'primary',
}

export default memo(MenuItem)
