import React, { RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Box, ShadowOverlay } from '..'

export interface IPopoutProps {
  trigger: JSX.Element
  content?: JSX.Element | undefined
  triggerRef?: RefObject<HTMLElement>
  onOpen?: () => void
  onClose?: () => void
  closeOnTriggerRefClick?: boolean
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

const PopoutModal = styled(Box)`
  position: absolute;
  z-index: 2;
  transition: padding 200ms ease-in-out, margin 200ms ease-in-out, border-radius 200ms ease-in-out;
`

export const Popout = (props: IPopoutProps) => {
  const { trigger, content, onOpen, onClose, triggerRef, closeOnTriggerRefClick } = props
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const [padding, setPadding] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const baseInputRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const isMounted = useRef(false)

  const handleOpen = useCallback(() => setIsOpen(true), [])

  const handleClose = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isMounted.current) {
      if (isOpen) {
        setPadding(16)
        setOpacity(0.5)
        /* istanbul ignore next */
        triggerRef?.current?.focus()
        /* istanbul ignore next */
        onOpen?.()
      } else {
        setPadding(0)
        setOpacity(0)
        /* istanbul ignore next */
        onClose?.()
      }
      return
    }
    isMounted.current = true
  }, [isOpen, triggerRef])

  useLayoutEffect(() => {
    setHeight(baseInputRef.current.clientHeight)
  }, [trigger])

  useEffect(() => {
    if (isOpen && closeOnTriggerRefClick) {
      triggerRef?.current?.addEventListener('click', handleClose)
    }
    return () => triggerRef?.current?.removeEventListener('click', handleClose)
  }, [isOpen, closeOnTriggerRefClick, triggerRef, handleClose])

  useEffect(() => {
    const escapeListener = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        handleClose()
      }
    }
    const focusListener = (e: FocusEvent) => {
      if (
        isOpen &&
        e.target instanceof HTMLElement &&
        e.target !== baseInputRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        handleClose()
      }
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
          <ShadowOverlay
            zIndex={1}
            onClick={handleClose}
            style={{ opacity, transition: 'opacity 250ms ease-in-out' }}
          />
          <PopoutModal
            ref={modalRef}
            boxShadowSize='overlay-lg'
            bg='background.lightest'
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
