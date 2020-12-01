import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Button } from 'pcln-design-system'
import { ChevronDown } from 'pcln-icons'
import Popover from 'pcln-popover'
import MenuList from '../MenuList'

const LinkButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: ${themeGet('space.2')}px;
`

function Menu({ id, buttonText, color, height, size, children, ...props }) {
  const MenuContent = ({ handleClose }) => (
    <MenuList
      id={id}
      color={color}
      size={size}
      height={height}
      handleClose={handleClose}
    >
      {children}
    </MenuList>
  )

  MenuContent.propTypes = {
    handleClose: PropTypes.func,
  }

  const onKeyDown = useCallback((evt) => {
    const key = evt.key
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      evt.preventDefault()
      evt.target.click()
    }
  }, [])

  return (
    <Popover
      hideArrow
      trapFocus
      width={650}
      zIndex={1600}
      placement='bottom'
      aria-controls={id}
      renderContent={MenuContent}
      {...props}
    >
      <LinkButton variation='link' onKeyDown={onKeyDown}>
        {buttonText}
        <ChevronDown ml={1} />
      </LinkButton>
    </Popover>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  id: PropTypes.string,
  buttonText: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  size: PropTypes.string,
  children: PropTypes.node,
}

Menu.defaultProps = {
  size: 'singleColumn',
}

export default Menu
