import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import themeGet from '@styled-system/theme-get'
import { HTMLMotionProps, Transition, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { zIndex } from 'styled-system'
import { Box } from '../Box'
import { CloseButton, type CloseButtonProps } from '../CloseButton/CloseButton'
import { Grid } from '../Grid'
import { Text } from '../Text'
import { ThemeProvider } from '../ThemeProvider'
import { type DialogProps } from './Dialog'

export const dialogSizes = ['sm', 'md', 'lg', 'xl', 'full'] as const
export const overflow = ['visible', 'hidden', 'scroll', 'auto'] as const
export type DialogSize = (typeof dialogSizes)[number]

const sizeStyles: Record<DialogSize, { width?: string; height?: string }> = {
  sm: { width: 'calc(min(400px, 100vw) - 2 * 16px)' },
  md: { width: 'calc(min(640px, 100vw) - 2 * 16px)' },
  lg: { width: 'calc(min(960px, 100vw) - 2 * 16px)' },
  xl: { width: 'calc(min(1280px, 100vw) - 2 * 16px)', height: 'calc(100% - 2 * 48px)' },
  full: { width: '100%', height: '100%' },
} as const

const scrimStyles = {
  dark: 'rgba(0, 24, 51, 0.75)',
  medium: 'rgba(0, 24, 51, 0.5)',
  light: 'rgba(0, 24, 51, 0.25)',
} as const

const enterTransition: Transition = { duration: 0.25, ease: 'easeOut' }
const exitTransition: Transition = { duration: 0.15, ease: 'easeIn' }
const animationStyles: Record<'default' | 'sheet' | 'overlay', HTMLMotionProps<'div'>> = {
  default: {
    initial: { opacity: 0, scale: 0.9, translateY: 64 },
    animate: { opacity: 1, scale: 1, translateY: 0, transition: enterTransition },
    exit: { opacity: 0, scale: 0.9, translateY: 32, transition: exitTransition },
  },
  sheet: {
    initial: { opacity: 0, translateY: '40%' },
    animate: { opacity: 1, translateY: 0, transition: enterTransition },
    exit: { opacity: 0, translateY: '60%', transition: exitTransition },
  },
  overlay: {
    initial: { opacity: 0, overflow: 'hidden' },
    animate: { opacity: 1, transitionEnd: { overflow: 'auto' }, transition: enterTransition },
    exit: { opacity: 0, overflow: 'hidden', transition: exitTransition },
  },
} as const

const FloatingCloseButton: (
  props: { dialogSize: DialogSize } & Partial<CloseButtonProps> & Partial<DialogProps>
) => JSX.Element = styled(CloseButton)`
  position: absolute;
  top: ${(props) => -((props.dialogSize === 'full' || props.fullWidth ? 0 : 16) + 10)}px;
  right: ${(props) => -((props.dialogSize === 'full' || props.fullWidth ? 0 : 16) + 10)}px;
  margin: ${(props) => themeGet('space.3')(props)};
  padding: ${(props) => themeGet('space.2')(props)};
  z-index: ${(props) => themeGet('zIndices.absolute')(props)};
  &:hover {
    background-color: ${(props) => themeGet('palette.background.lightest')(props)};
  }
`

const DialogOverlayWrapper = styled(motion.div)`
  ${zIndex}
  position: fixed;
  inset: 0;
  display: grid;
  overflow-y: auto;
  place-items: ${(props: DialogProps) => (props.sheet ? 'end center' : 'center')};
  background-color: ${(props: DialogProps) =>
    Object.keys(scrimStyles).includes(props.scrimColor) ? scrimStyles[props.scrimColor] : props.scrimColor};
`

const DialogContentWrapper = styled(motion.div)`
  position: relative;
  cursor: initial;
  background-color: ${(props: DialogProps) => themeGet('palette.background.lightest')(props)};
  width: ${(props: DialogProps) => (props.fullWidth ? '100%' : sizeStyles[props.size]?.width)};
  height: ${(props: DialogProps) =>
    props.sheet ? `calc(${sizeStyles[props.size]?.height} - 24px)` : sizeStyles[props.size]?.height};
  margin: ${(props: DialogProps) =>
    props.sheet
      ? `${themeGet('space.3')(props)} 0 0 0`
      : props.size === 'full'
      ? '0'
      : `${themeGet('space.4')(props)}
         ${themeGet('space.3')(props)}
         ${themeGet('space.5')(props)}
         ${themeGet('space.3')(props)}`};
  border-radius: ${(props: DialogProps) =>
    props.sheet
      ? `${themeGet(`borderRadii.${props.borderRadius}`)(props)} ${themeGet(
          `borderRadii.${props.borderRadius}`
        )(props)} 0 0`
      : props.size === 'full'
      ? 'none'
      : themeGet(`borderRadii.${props.borderRadius}`)(props)};
  box-shadow: ${(props: DialogProps) => themeGet('shadows.overlay-lg')(props)};
`

const DialogInnerContentWrapper = styled.div`
  position: relative;
  overflow-x: ${(props) => props.overflowX && props.overflowX};
  overflow-y: ${(props) => props.overflowY && props.overflowY};
  border-radius: ${(props: DialogProps) =>
    props.sheet
      ? `${themeGet(`borderRadii.${props.borderRadius}`)(props)} ${themeGet(
          `borderRadii.${props.borderRadius}`
        )(props)} 0 0`
      : props.size === 'full'
      ? 'none'
      : themeGet(`borderRadii.${props.borderRadius}`)(props)};
  border-top: ${(props: DialogProps) =>
    props.hugColor && `4px solid ${themeGet('palette.' + props.hugColor)(props)}`};
`

export const DialogOverlay = ({ scrimColor, sheet, children, zIndex }: Partial<DialogProps>) => {
  return (
    <Dialog.Portal forceMount>
      <ThemeProvider>
        <Dialog.Overlay asChild forceMount>
          <DialogOverlayWrapper
            scrimColor={scrimColor}
            sheet={sheet}
            zIndex={zIndex}
            {...animationStyles.overlay}
          >
            {children}
          </DialogOverlayWrapper>
        </Dialog.Overlay>
      </ThemeProvider>
    </Dialog.Portal>
  )
}

export const DialogContent = ({
  ariaDescription,
  ariaTitle,
  borderRadius,
  children,
  fullWidth,
  headerColorScheme,
  headerContent,
  headerIcon,
  headerShowCloseButton,
  hugColor,
  scrimDismiss,
  sheet,
  showCloseButton,
  size,
  zIndex,
  onOpenChange,
  overflowX,
  overflowY,
}: DialogProps) => {
  const headerSizeArray = [
    headerIcon ? 'heading5' : 'heading4', // xs
    headerIcon ? 'heading5' : 'heading4', // sm
    headerIcon ? 'heading5' : 'heading4', // md
    headerIcon ? 'heading5' : 'heading4', // lg
    headerIcon ? 'heading4' : 'heading3', // xl
    headerIcon ? 'heading4' : 'heading3', // xxl
  ] as const

  return (
    <Dialog.Content
      aria-describedby={ariaDescription}
      onPointerDownOutside={(e) => {
        e.preventDefault()
        if (scrimDismiss) onOpenChange(false)
      }}
      onOpenAutoFocus={(e) => e.preventDefault()}
      asChild
      forceMount
    >
      <DialogContentWrapper
        size={size}
        sheet={sheet}
        fullWidth={fullWidth}
        borderRadius={borderRadius}
        zIndex={zIndex}
        {...(sheet ? animationStyles.sheet : animationStyles.default)}
      >
        {showCloseButton && (
          <Dialog.Close asChild>
            <FloatingCloseButton
              color='primary.base'
              bgColor='background.lightest'
              boxShadowSize='sm'
              dialogSize={size}
              sheet={sheet}
              fullWidth={fullWidth}
            />
          </Dialog.Close>
        )}

        <VisuallyHidden asChild>
          <Dialog.Title>{ariaTitle}</Dialog.Title>
        </VisuallyHidden>

        <DialogInnerContentWrapper
          overflowX={overflowX}
          overflowY={overflowY}
          sheet={sheet}
          hugColor={hugColor}
          size={size}
          borderRadius={borderRadius}
        >
          {headerContent && (
            <Grid
              colorScheme={headerColorScheme}
              px={[3, 3, 3, 3, '24px', '24px']}
              py={3}
              gap={2}
              autoFlow='column'
              templateColumns={headerIcon ? 'auto 1fr auto' : '1fr auto'}
              alignItems='center'
            >
              {headerIcon && <Grid placeItems='center'>{headerIcon}</Grid>}
              <Text textStyle={size === 'sm' ? (headerIcon ? 'heading5' : 'heading4') : headerSizeArray}>
                {headerContent}
              </Text>
              <Box>{headerShowCloseButton && <CloseButton onClick={() => onOpenChange(false)} />}</Box>
            </Grid>
          )}
          {children}
        </DialogInnerContentWrapper>
      </DialogContentWrapper>
    </Dialog.Content>
  )
}
