import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Flex, getPaletteColor, borderRadiusAttrs } from 'pcln-design-system'
import { borderRadius } from 'styled-system'
import { Check as CheckIcon } from 'pcln-icons'

const MenuButton = styled(Button).attrs(borderRadiusAttrs)`
  background-color: ${(props) =>
    props.selected ? getPaletteColor('light')(props) : getPaletteColor('background.lightest')(props)};
  border: 2px solid transparent;
  color: ${getPaletteColor('text.base')};
  outline: none;
  padding: 12px;

  > ${Flex} {
    justify-content: space-between;
  }

  &:hover {
    ${(props) =>
      props.selected
        ? `
        background-color: ${getPaletteColor('light')(props)};
        color: ${getPaletteColor('dark')(props)};`
        : `
        background-color: ${getPaletteColor('background.base')(props)};
        color: ${getPaletteColor('text.base')(props)};
      `}
  }

  &:hover ${CheckIcon} {
    color: ${getPaletteColor('dark')};
  }

  ${borderRadius};
`

const MenuItem = React.forwardRef(function MenuItem(
  { id, color, icon, selected, children, handleClose, onClick, ...props },
  ref
) {
  const handleClick = useCallback(() => {
    onClick && onClick()
    handleClose && handleClose()
  }, [onClick, handleClose])

  return (
    <MenuButton
      id={id}
      aria-selected={selected}
      borderRadius='lg'
      color={color}
      onClick={handleClick}
      ref={ref}
      role='option'
      selected={selected}
      {...props}
    >
      <Flex alignItems='center' justifyContent='center'>
        {icon && <Flex mr={3}>{icon}</Flex>}
        {children}
      </Flex>
      {selected && <CheckIcon title='check' size={20} ml={3} color={color} />}
    </MenuButton>
  )
})

MenuItem.displayName = 'MenuItem'

MenuItem.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.node,
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
