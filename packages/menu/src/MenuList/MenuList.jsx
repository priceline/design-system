import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { Flex, applySizes } from 'pcln-design-system'

const sizes = {
  singleColumn: css`
    & > * {
      width: 100%;
    }
  `,
  twoColumns: css`
    & > * {
      width: calc(50% - ${themeGet('space.1')});
    }
  `,
}

const MenuContainer = styled(Flex)`
  font-family: ${themeGet('font') || "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif"};
  overflow-y: auto;

  & > * {
    margin-right: ${themeGet('space.1')};
    margin-bottom: ${themeGet('space.1')};
  }

  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '100%')};
  ${applySizes(sizes)};
`

function focusNext(item) {
  return item?.nextElementSibling
}

function focusPrevious(item) {
  return item?.previousElementSibling
}

function moveFocus(currentFocus, traversalFunction) {
  const nextFocus = traversalFunction(currentFocus)
  nextFocus?.focus()
}

function MenuList({ id, children, color, size = 'singleColumn', height, handleClose }) {
  const listRef = useRef(null)
  const currentItemRef = useRef(null)
  const [currentItemId, setCurrentItemId] = useState(null)

  useEffect(() => {
    setCurrentItemId(currentItemRef.current?.id)
    currentItemRef.current?.focus({ preventScroll: true })
  }, [])

  const handleKeyDown = useCallback((evt) => {
    const list = listRef.current
    const key = evt.key

    const currentFocus = list?.ownerDocument?.activeElement

    if (key === 'ArrowDown') {
      evt.preventDefault()
      moveFocus(currentFocus, focusNext)
    } else if (key === 'ArrowUp') {
      evt.preventDefault()
      moveFocus(currentFocus, focusPrevious)
    }
  }, [])

  return (
    <MenuContainer
      id={id}
      ref={listRef}
      role='listbox'
      aria-activedescendant={currentItemId}
      flexWrap='wrap'
      maxHeight={height}
      size={size}
      p={2}
      pr={1}
      pb={1}
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          id: `option${index}`,
          ref: child.props.selected ? currentItemRef : null,
          color: child.props.color || color,
          handleClose,
        })
      )}
    </MenuContainer>
  )
}

MenuList.displayName = 'MenuList'

MenuList.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.number,
  handleClose: PropTypes.func,
}

export default MenuList
