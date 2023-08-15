import type { BorderRadius, BoxShadowSize, PaletteColor } from '..'
import {
  CardContainer,
  FlashcardRotation,
  InnerCardMotion,
  OuterCardMotion,
  flashcardRotations,
} from './Flashcard.styled'

import React, { useEffect, useRef, useState } from 'react'

export interface IFlashcardProps {
  backside: React.ReactNode
  backsideBg?: PaletteColor
  bg?: PaletteColor
  borderRadius?: BorderRadius
  boxShadowSize?: BoxShadowSize
  children: React.ReactNode
  defaultOpen?: boolean
  duration?: number
  onOpenChange?: (open: boolean) => void
  open?: boolean
  perspective?: number | string
  rotation?: FlashcardRotation
}

const Flashcard = ({
  backside,
  backsideBg,
  bg,
  borderRadius = 'xl',
  boxShadowSize,
  children,
  defaultOpen = false,
  duration = 0.5,
  onOpenChange,
  open,
  perspective = 200,
  rotation = 'y',
}: IFlashcardProps) => {
  const [_open, setOpen] = useState(open ?? defaultOpen)
  const [_bg, setBg] = useState(_open ? backsideBg : bg)
  const [_children, setChildren] = useState(_open ? backside : children)
  const ref = useRef(null)

  useEffect(() => setChildren(_open ? backside : children), [children, backside])
  useEffect(() => setBg(_open ? backsideBg : bg), [bg, backsideBg])

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange?.(newOpen)
    setOpen(newOpen)
    setTimeout(() => {
      setChildren(newOpen ? backside : children)
      setBg(newOpen ? backsideBg : bg)
    }, (duration * 1000) / 2)
  }

  useEffect(() => handleOpenChange(open), [open])

  useEffect(() => {
    if (open !== undefined) return
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) handleOpenChange(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [ref])

  return (
    <CardContainer perspective={perspective}>
      <OuterCardMotion
        animate={_open ? flashcardRotations[rotation] : flashcardRotations.reset}
        transition={{ duration }}
      >
        <InnerCardMotion
          animate={_open ? flashcardRotations[rotation] : flashcardRotations.reset}
          bg={_bg}
          borderRadius={borderRadius}
          boxShadowSize={boxShadowSize}
          onClick={
            open === undefined
              ? (e) => {
                  e.stopPropagation()
                  handleOpenChange(true)
                }
              : undefined
          }
          ref={ref}
          transition={{ duration }}
        >
          {_children}
        </InnerCardMotion>
      </OuterCardMotion>
    </CardContainer>
  )
}

export default Flashcard
