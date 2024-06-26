/* eslint-disable no-unused-expressions */

import React, { useState } from 'react'
import styled from 'styled-components'
import { zIndex } from 'styled-system'

/**
 * @public
 */
export const ShadowOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 24, 51, 0.5);
  ${zIndex};
`

/**
 * @public
 */
export type ShadowEffectProps = {
  shouldCloseOnBlur?: boolean
  shouldOpenOnFocus?: boolean
  zIndex?: number | string
  children?: React.ReactNode
  onClose?: () => void
  onOpen?: () => void
}

/**
 * @public
 */
export function ShadowEffect({
  shouldCloseOnBlur,
  shouldOpenOnFocus,
  zIndex = 'overlay',
  children,
  onClose,
  onOpen,
  ...props
}: ShadowEffectProps) {
  const [isOpen, setOpen] = useState(false)

  const child = React.Children.only(children)

  function handleOpen() {
    onOpen && onOpen()
    setOpen(true)
  }

  function handleClose() {
    onClose && onClose()
    setOpen(false)
  }

  function handleKeyDown(evt) {
    const key = evt.key
    if (key === 'Escape') {
      evt.preventDefault()
      handleClose()
    }
  }

  return (
    <>
      {isOpen && <ShadowOverlay zIndex={zIndex} onClick={handleClose} {...props} />}
      {React.isValidElement(child) &&
        React.cloneElement<
          ShadowEffectProps & {
            onBlur?: () => void
            onClick?: () => void
            onFocus?: () => void
            onKeyDown?: (evt) => void
          }
        >(child, {
          zIndex: isOpen && (zIndex !== 'overlay' ? zIndex : 'onOverlay'),
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
