import * as Popover from '@radix-ui/react-popover'
import React, { useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'
import { Box, BoxProps } from '../Box/Box'
import { CloseButton } from '../CloseButton/CloseButton'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'
import Overlay from './Overlay'
import { FixedCloseButton, StyledArrow } from './Popover.styles'

export type PopoverProps = Pick<
  BoxProps,
  'maxWidth' | 'minWidth' | 'width' | 'borderRadius' | 'color' | 'p'
> & {
  renderContent: React.ReactNode
  idx: string
  isOpen?: boolean
  children?: React.ReactNode
  hideArrow?: boolean
  hideCloseButton?: boolean
  hideOverlay?: boolean
  onOpen?: () => void
  onClose?: () => void
  openOnHover?: boolean
  trapFocus?: boolean
  toggleIsOpenOnClick?: boolean
  openOnMount?: boolean
  overlayOpacity?: number
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
}

function parsePlacement(placement: PopoverProps['placement']): {
  side: 'top' | 'bottom' | 'left' | 'right'
  align: 'start' | 'end' | 'center'
} {
  const match = /([a-z]+)-?([a-z]+)?/.exec(placement)
  if (match) {
    return {
      // @ts-ignore
      side: match[1],
      // @ts-ignore
      align: match[2],
    }
  }
}

const DsPopover = ({
  borderRadius = 'xl',
  children,
  color = 'background.lightest',
  hideArrow,
  hideOverlay = false,
  hideCloseButton = false,
  idx,
  isOpen,
  onClose,
  onOpen,
  openOnMount,
  openOnHover,
  overlayOpacity = 0.5,
  p,
  placement = 'top',
  toggleIsOpenOnClick = true,
  renderContent,
  width,
  maxWidth,
}: PopoverProps) => {
  const [isOpenState, setIsOpenState] = React.useState(openOnMount || isOpen)
  const theme = useTheme()
  const firstUpdate = useRef(true)

  useEffect(() => {
    // When using openOnMount, we don't want to update the open state on the first render.
    // This would cause the overlay to be hidden if isOpen is falsy.
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    if (isOpen !== isOpenState) {
      setIsOpenState(isOpen)
    }
  }, [isOpen])

  function handleOnOpenChange(open: boolean) {
    // Handle the controlled state when we want to force the popover open
    if (isOpen) {
      return
    }

    setIsOpenState(open)
    if (open) {
      onOpen?.()
    } else {
      onClose?.()
    }
  }

  function handleTriggerClick(event) {
    if (!toggleIsOpenOnClick) {
      event.preventDefault()
    }
  }

  function handleMouseEnter() {
    if (openOnHover) {
      setIsOpenState(true)
    }
  }

  function handleMouseLeave() {
    if (openOnHover) {
      setIsOpenState(false)
    }
  }

  const { side, align } = parsePlacement(placement)

  return (
    <Popover.Root open={isOpenState} onOpenChange={handleOnOpenChange} defaultOpen={openOnMount}>
      <Popover.Trigger
        asChild
        onClick={handleTriggerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={5} side={side} align={align} id={idx}>
          <ThemeProvider theme={theme}>
            <Box
              color={color}
              boxShadowSize='overlay-md'
              borderRadius={borderRadius}
              p={p}
              width={width}
              maxWidth={maxWidth}
            >
              {renderContent}

              {!hideCloseButton && (
                <FixedCloseButton>
                  <CloseButton
                    as={Popover.Close}
                    aria-label='Close'
                    variant='filled'
                    size='sm'
                    onClick={handleOnOpenChange.bind(null, false)}
                  />
                </FixedCloseButton>
              )}
              {!hideArrow && <StyledArrow as={Popover.Arrow} color={color} />}
            </Box>
          </ThemeProvider>
        </Popover.Content>
      </Popover.Portal>
      {!(hideOverlay || openOnHover) && <Overlay overlayOpacity={overlayOpacity} isOpen={isOpenState} />}
    </Popover.Root>
  )
}

// Old Popover props todo:
// onBeforeOpen: PropTypes.func,
// onBeforeClose: PropTypes.func,

// Currently broken in plcn-popover:
// borderColor: PropTypes.string,

export { DsPopover as Popover }
