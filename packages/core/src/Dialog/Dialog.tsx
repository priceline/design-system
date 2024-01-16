import { AnimatePresence } from 'framer-motion'
import type { BorderRadius, ColorSchemes, PaletteColor, ZIndex } from '../theme'
import type { DialogSize } from './Dialog.styled'
import { DialogContent, DialogOverlay } from './Dialog.styled'

import * as Dialog from '@radix-ui/react-dialog'
import React, { useEffect } from 'react'

export type DialogProps = {
  ariaDescription: string
  ariaTitle: string
  borderRadius?: BorderRadius
  children?: React.ReactNode
  defaultOpen?: boolean
  fullWidth?: boolean
  headerColorScheme?: keyof ColorSchemes
  headerContent?: string | React.ReactNode
  headerIcon?: React.ReactNode
  headerShowCloseButton?: boolean
  hugColor?: PaletteColor
  open?: boolean
  scrimColor?: 'dark' | 'medium' | 'light' | (string & {})
  scrimDismiss?: boolean
  sheet?: boolean
  showCloseButton?: boolean
  size?: DialogSize
  triggerNode?: React.ReactNode
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto'
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto'
  zIndex?: ZIndex
  onOpenChange?: (open: boolean) => void
}

const PclnDialog = ({
  ariaDescription,
  ariaTitle,
  borderRadius = '2xl',
  children,
  defaultOpen = false,
  fullWidth = false,
  headerColorScheme = 'neutralDarkOnLightest',
  headerContent,
  headerIcon,
  headerShowCloseButton = false,
  hugColor,
  open,
  scrimColor = 'dark',
  scrimDismiss = true,
  sheet = false,
  showCloseButton = true,
  size = 'md',
  triggerNode,
  zIndex = 'overlay',
  overflowX = 'auto',
  overflowY = 'auto',
  onOpenChange,
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
      <AnimatePresence>
        {_open && (
          <DialogOverlay scrimDismiss={scrimDismiss} scrimColor={scrimColor} sheet={sheet} zIndex={zIndex}>
            <DialogContent
              overflowX={overflowX}
              overflowY={overflowY}
              ariaDescription={ariaDescription}
              ariaTitle={ariaTitle}
              borderRadius={borderRadius}
              fullWidth={fullWidth}
              headerColorScheme={headerColorScheme}
              headerContent={headerContent}
              headerIcon={headerIcon}
              headerShowCloseButton={headerShowCloseButton}
              hugColor={hugColor}
              onOpenChange={handleOpenChange}
              scrimDismiss={scrimDismiss}
              sheet={sheet}
              showCloseButton={showCloseButton}
              size={size}
            >
              {children}
            </DialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

PclnDialog.displayName = 'Dialog'

export { PclnDialog as Dialog }
