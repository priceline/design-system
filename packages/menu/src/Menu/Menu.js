import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'pcln-design-system'
import { ChevronDown } from 'pcln-icons'
import Popover from 'pcln-popover'
import MenuList from '../MenuList'

function Menu({
  id,
  buttonNode,
  buttonProps,
  buttonText,
  color,
  width,
  height,
  size,
  trapFocus,
  placement,
  children,
  ...props
}) {
  const MenuContent = ({ handleClose }) => (
    <MenuList id={id} color={color} size={size} height={height} handleClose={handleClose}>
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

  /* eslint-disable react/display-name */
  const ClickableNode = React.forwardRef((props, ref) =>
    buttonNode ? (
      React.cloneElement(buttonNode, { ref, onKeyDown, ...props })
    ) : (
      <Button
        IconRight={ChevronDown}
        variation='link'
        {...props}
        p={2}
        {...buttonProps}
        onKeyDown={onKeyDown}
        ref={ref}
      >
        {buttonText}
      </Button>
    )
  )

  return (
    <Popover
      aria-controls={id}
      hideArrow
      idx={id}
      placement={placement ?? 'bottom-start'}
      renderContent={MenuContent}
      trapFocus={trapFocus}
      width={width}
      zIndex={1600}
      {...props}
    >
      <ClickableNode />
    </Popover>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  id: PropTypes.string,
  buttonNode: PropTypes.node,
  buttonProps: PropTypes.shape(Button.propTypes),
  buttonText: PropTypes.node,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  size: PropTypes.string,
  trapFocus: PropTypes.bool,
  placement: PropTypes.string,
  children: PropTypes.node,
}

Menu.defaultProps = {
  size: 'singleColumn',
  trapFocus: true,
  width: '650px',
}

export default Menu
