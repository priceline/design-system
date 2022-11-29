import React, { RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Box } from '..'

export interface IPopoutProps {
  trigger: JSX.Element
  content?: JSX.Element | undefined
  triggerRef?: RefObject<HTMLElement>
  onOpen?: () => void
  onClose?: () => void
}

const TriggerWrapper = styled(Box)`
  position: relative;
  width: fit-content;
`

const OnClickHandler = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const Shadow = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: black;
  transition: opacity 250ms ease-in-out;
`

const PopoutModal = styled(Box)`
  position: absolute;
  z-index: 2;
  background-color: white;
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.75);
  transition: padding 250ms ease-in-out, margin 250ms ease-in-out, border-radius 250ms ease-in-out;
`

export const Popout = (props: IPopoutProps) => {
  const { trigger, content, onOpen, onClose, triggerRef } = props
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [padding, setPadding] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const baseInputRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
    setTimeout(() => {
      setPadding(16)
      setOpacity(0.5)
      /* istanbul ignore next */
      triggerRef?.current?.focus()
      /* istanbul ignore next */
      onOpen?.()
    })
  }, [triggerRef, onOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => {
      setPadding(0)
      setOpacity(0)
      /* istanbul ignore next */
      onClose?.()
    })
  }, [onClose])

  useLayoutEffect(() => {
    setHeight(baseInputRef.current.clientHeight)
  }, [trigger])

  useEffect(() => {
    const escapeListener = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') handleClose()
    }
    const focusListener = (e: FocusEvent) => {
      if (
        isOpen &&
        e.target instanceof HTMLElement &&
        e.target !== baseInputRef.current &&
        !modalRef.current.contains(e.target)
      )
        handleClose()
    }
    document.addEventListener('focusin', focusListener)
    document.addEventListener('keydown', escapeListener)
    return () => {
      document.removeEventListener('focusin', focusListener)
      document.removeEventListener('keydown', escapeListener)
    }
  }, [isOpen, handleClose])

  const placeHolderDiv = <Box style={{ height }} />

  return (
    <Box>
      <TriggerWrapper tabIndex={isOpen ? -1 : 0} onFocus={handleOpen} ref={baseInputRef}>
        {isOpen ? placeHolderDiv : trigger}
        <OnClickHandler onClick={handleOpen} />
      </TriggerWrapper>
      {isOpen && (
        <>
          <Shadow style={{ opacity }} onClick={handleClose} />
          <PopoutModal
            ref={modalRef}
            style={{
              padding: padding,
              borderRadius: padding,
              marginTop: -(height + padding),
              marginLeft: -padding,
            }}
          >
            {trigger}
            {content}
          </PopoutModal>
        </>
      )}
    </Box>
  )
}
