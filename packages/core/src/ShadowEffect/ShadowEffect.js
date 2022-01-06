import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ShadowOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.65);
  z-index: ${(props) => props.zIndex};
`

function ShadowEffect({ shouldCloseOnBlur, shouldOpenOnFocus, zIndex, children, onClose, onOpen, ...props }) {
  const [isOpen, setOpen] = useState(false)

  const child = React.Children.only(children)

  const handleOpen = () => {
    onOpen && onOpen()
    setOpen(true)
  }

  const handleClose = () => {
    onClose && onClose()
    setOpen(false)
  }

  const handleKeyDown = (evt) => {
    const key = evt.key
    if (key === 'Escape') {
      evt.preventDefault()
      handleClose()
    }
  }

  return (
    <>
      {isOpen && <ShadowOverlay zIndex={zIndex} onClick={handleClose} {...props} />}
      {React.cloneElement(child, {
        style: { position: 'relative', zIndex: isOpen && zIndex },
        onBlur: () => {
          const onBlur = child.props.onBlur
          onBlur && onBlur()
          shouldCloseOnBlur && handleClose()
        },
        onClick: () => {
          const onClick = child.props.onClick
          onClick && onClick()
          handleOpen()
        },
        onFocus: () => {
          const onFocus = child.props.onFocus
          onFocus && onFocus()
          shouldOpenOnFocus && handleOpen()
        },
        onKeyDown: (evt) => {
          const onKeyDown = child.props.onKeyDown
          onKeyDown && onKeyDown(evt)
          handleKeyDown(evt)
        },
      })}
    </>
  )
}

ShadowEffect.propTypes = {
  shouldCloseOnBlur: PropTypes.bool,
  shouldOpenOnFocus: PropTypes.bool,
  zIndex: PropTypes.number,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
}

ShadowEffect.defaultProps = {
  zIndex: 10,
}

export default ShadowEffect
