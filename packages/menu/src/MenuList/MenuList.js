import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'pcln-design-system'

const MenuContainer = styled(Flex)`
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  overflow-y: scroll;
  height: ${(props) => props.height || 300}px;

  & > * {
    margin-right: 4px;
    margin-bottom: 4px;
    width: ${(props) => {
      const columnWidth = 100 / props.columns
      return `calc(${columnWidth}% - 4px)`
    }};
  }
`

function focusNext(item) {
  return item && item.nextElementSibling
}

function focusPrevious(item) {
  return item && item.previousElementSibling
}

function moveFocus(currentFocus, traversalFunction) {
  const nextFocus = traversalFunction(currentFocus)
  nextFocus && nextFocus.focus()
}

function MenuList({ children, color, columns, height, handleClose }) {
  const listRef = useRef(null)
  const currentItemRef = useRef(null)

  useEffect(() => {
    currentItemRef?.current?.focus()
  }, [])

  function handleKeyDown(evt) {
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
  }

  return (
    <MenuContainer
      ref={listRef}
      role='list'
      flexWrap='wrap'
      height={height}
      columns={columns}
      p={2}
      pr={1}
      pb={1}
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          id: `option${index}`,
          color: child.props.color || color,
          handleClose,
          ref: child.props.selected ? currentItemRef : null,
        })
      )}
    </MenuContainer>
  )
}

MenuList.displayName = 'MenuList'

MenuList.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.number,
  height: PropTypes.number,
  handleClose: PropTypes.func,
}

MenuList.defaultProps = {
  columns: 1,
}

export default MenuList
