import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'pcln-design-system'
import { ChevronDown } from 'pcln-icons'
import Popover from 'pcln-popover'
import MenuList from '../MenuList'

const LinkButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 8px;
`

function Menu({ buttonText, color, height, size, children, ...props }) {
  const MenuContent = ({ handleClose }) => (
    <MenuList
      id='menu-container'
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

  const onKeyDown = (evt) => {
    const key = evt.key
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      evt.preventDefault()
      evt.target.click()
    }
  }

  return (
    <Popover
      hideArrow
      trapFocus
      width={650}
      zIndex={1600}
      placement='bottom'
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
