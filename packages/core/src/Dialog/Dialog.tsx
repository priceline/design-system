import * as Dialog from '@radix-ui/react-dialog'
// import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { OverflowProps } from 'styled-system'
import type { BorderRadius, ColorSchemes, PaletteColor, ZIndex } from '../theme/theme'
import type { DialogSize } from './Dialog.styled'
import { DialogContent, DialogOverlay } from './Dialog.styled'
import { GridProps } from '../Grid/Grid'

/**
 * @public
 */
export type DialogProps = Omit<OverflowProps, 'overflow'> & {
  ariaDescription: string
  ariaTitle: string
  borderRadius?: BorderRadius
  children?: React.ReactNode
  defaultOpen?: boolean
  footerContent?: React.ReactNode
  fullWidth?: boolean
  headerColorScheme?: keyof ColorSchemes
  headerContent?: string | React.ReactNode
  headerContentProps?: GridProps
  headerIcon?: React.ReactNode
  headerShowCloseButton?: boolean
  hugColor?: PaletteColor
  innerContentOverflow?: 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible'
  open?: boolean
  scrimColor?: 'dark' | 'medium' | 'light' | (string & {})
  scrimDismiss?: boolean
  sheet?: boolean
  showCloseButton?: boolean
  size?: DialogSize
  triggerNode?: React.ReactNode
  zIndex?: ZIndex
  onOpenChange?: (open: boolean) => void
  showScrollShadow?: boolean
  shouldDisableTabIndex?: boolean
}

/**
 * @public
 */
const PclnDialog = ({
  ariaDescription,
  ariaTitle,
  borderRadius = '2xl',
  children,
  defaultOpen = false,
  footerContent,
  fullWidth = false,
  headerColorScheme = 'heading',
  headerContent,
  headerContentProps,
  headerIcon,
  headerShowCloseButton = false,
  hugColor,
  innerContentOverflow = 'scroll',
  open,
  scrimColor = 'dark',
  scrimDismiss = true,
  sheet = false,
  showCloseButton = true,
  showScrollShadow,
  size = 'md',
  triggerNode,
  zIndex = 'overlay',
  overflowX = 'auto',
  overflowY = 'auto',
  onOpenChange,
  shouldDisableTabIndex,
}: DialogProps) => {
  const [_open, setOpen] = React.useState(open ?? defaultOpen)

  useEffect(() => setOpen(open), [open])

  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange?.(newOpen)
    setOpen(newOpen)
  }

  return (
    <Dialog.Root open={_open} onOpenChange={handleOpenChange} defaultOpen={defaultOpen}>
      <Dialog.Trigger asChild>{triggerNode}</Dialog.Trigger>
        {_open && (
          <DialogOverlay scrimDismiss={scrimDismiss} scrimColor={scrimColor} sheet={sheet} zIndex={zIndex}>
            <DialogContent
              overflowX={overflowX}
              overflowY={overflowY}
              ariaDescription={ariaDescription}
              ariaTitle={ariaTitle}
              borderRadius={borderRadius}
              footerContent={footerContent}
              fullWidth={fullWidth}
              headerColorScheme={headerColorScheme}
              headerContent={headerContent}
              headerContentProps={headerContentProps}
              headerIcon={headerIcon}
              headerShowCloseButton={headerShowCloseButton}
              hugColor={hugColor}
              innerContentOverflow={innerContentOverflow}
              onOpenChange={handleOpenChange}
              scrimDismiss={scrimDismiss}
              sheet={sheet}
              showCloseButton={showCloseButton}
              size={size}
              showScrollShadow={showScrollShadow}
              shouldDisableTabIndex={shouldDisableTabIndex}
            >
              {children}
            </DialogContent>
          </DialogOverlay>
        )}
    </Dialog.Root>
  )
}

PclnDialog.displayName = 'Dialog'

export { PclnDialog as Dialog }
