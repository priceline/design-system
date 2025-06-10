import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { DrawerRoot, DrawerWrapper, HeaderButton } from './Drawer.styled'
import { ChevronDown, Close } from 'pcln-icons'
import { AnimatePresence, motion, useDragControls } from 'motion/react'
import { SpaceProps, LayoutProps } from 'styled-system'
import { useScrollWithShadow } from '../useScrollWithShadows/useScrollWithShadow'
import { theme } from '../theme'
import { useSnap } from './hooks/useSnap'
import { getDragToDismissAnimation, getDividerStyle, getEnterAnimation } from './helpers'

export type PlacementOptions = 'top' | 'bottom' | 'right' | 'left'

export type SnapPositionChangeParams = {
  prevSnapPosition: string
  currSnapPosition: string
}

export type DrawerProps = SpaceProps &
  LayoutProps & {
    children?: React.ReactNode
    heading?: React.ReactNode
    isCollapsed?: boolean
    isFloating?: boolean
    isMobile?: boolean
    isOpen?: boolean
    isDraggable?: boolean
    showDivider?: boolean
    onClose?: () => void
    onCollapse?: () => void
    placement?: PlacementOptions
    position?: string
    zIndex?: number

    // top, middle (initial position), bottom snap points relative to viewport
    snapHeights?: [string, string, string]

    // When snap enabled, lock-in drawer dimensions
    snapDimensions?: {
      width?: string
      height?: string
    }

    // Allow external apps to action on snap state change
    onSnapPositionChange?: (params: SnapPositionChangeParams) => void

    // Disable enter animation to eliminate side effects on viewport change
    disableEnterAnimation?: boolean
  }

export const Drawer: React.FC<DrawerProps> = ({
  children,
  heading,
  isCollapsed = false,
  isFloating = true,
  isMobile = false,
  isOpen = false,
  isDraggable = true,
  showDivider = true,
  onClose,
  onCollapse,
  placement = 'right',
  zIndex = 1,
  snapHeights,
  snapDimensions,
  onSnapPositionChange,
  disableEnterAnimation,
  ...props
}) => {
  const { boxShadow, onScrollHandler } = useScrollWithShadow()
  const { snapPosition, handleSnap } = useSnap(snapHeights, snapDimensions, onSnapPositionChange)
  const SnapContainer = snapHeights ? motion.div : 'div'
  const headerRef = React.useRef(null)
  const dragControls = useDragControls()

  return (
    <SnapContainer
      style={
        // Note: Declaring a variable for the style triggers type errors related to motion.div intrinsic types
        snapHeights && snapDimensions
          ? {
              position: 'absolute',
              bottom: snapPosition,
              width: snapDimensions.width,
              height: snapDimensions.height,
              zIndex: zIndex,
            }
          : {}
      }
      transition={{ type: 'spring', bounce: 0 }}
      drag='y'
      dragConstraints={{ top: 0, bottom: 0 }}
      {...(snapHeights ? { onDragEnd: handleSnap } : {})}
      data-testid='snap-container'
      dragControls={dragControls}
      dragListener={false}
    >
      <AnimatePresence>
        {isOpen && (
          <DrawerWrapper
            placement={isMobile ? 'bottom' : placement}
            padding={isFloating ? 3 : 0}
            maxHeight={
              props?.maxHeight
                ? props.maxHeight
                : isMobile
                ? ['290px', '400px', '480px', 'calc(100vh - 64px)']
                : props.height ?? '100%'
            }
            maxWidth={isMobile ? '100%' : ['400px', '600px', '800px', '100%']}
            width={isMobile ? '100%' : props.width}
            {...props}
            height={!isCollapsed && props.height ? props.height : 'fit-content'}
          >
            <DrawerRoot
              data-testid='drawer'
              isCollapsed={isCollapsed}
              isFloating={isFloating}
              key='drawer'
              placement={isMobile ? 'bottom' : placement}
              {...getEnterAnimation({ disableEnterAnimation, isMobile, placement })}
              {...getDragToDismissAnimation({ isDraggable, snapHeights, onCollapse })}
              height='100%'
              width='100%'
              overflow='hidden'
            >
              <Flex flexDirection='column'>
                {(heading || onClose || onCollapse) && (
                  <Flex
                    ref={headerRef}
                    /* c8 ignore next */
                    onPointerDown={(e) => {
                      if (snapHeights) {
                        dragControls.start(e)
                      }
                    }}
                    flexDirection='column'
                    style={{ touchAction: 'none' }}
                    data-testid='drawer-header-container'
                  >
                    <Flex flexDirection='row' p={3}>
                      {typeof heading === 'string' ? (
                        <Text width='100%' textStyle='heading4'>
                          {heading}
                        </Text>
                      ) : (
                        heading
                      )}
                      {onClose || onCollapse ? (
                        <Flex flexDirection='row' ml='auto' style={{ columnGap: theme.space[2] }}>
                          {onCollapse && (
                            <motion.div
                              animate={{
                                rotate: isCollapsed ? 180 : 0,
                                transition: { duration: 0.25 },
                              }}
                            >
                              <HeaderButton
                                data-testid='drawerCollapse'
                                onClick={onCollapse}
                                icon={<ChevronDown title='Dismiss' />}
                              />
                            </motion.div>
                          )}
                          {onClose && (
                            <HeaderButton
                              data-testid='drawerClose'
                              onClick={onClose}
                              icon={<Close title='Close' />}
                            />
                          )}
                        </Flex>
                      ) : null}
                    </Flex>
                  </Flex>
                )}
                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.div
                      key='content'
                      {...{
                        exit: { scaleY: 0, height: 0 },
                        animate: { scaleY: 1, height: 'auto' },
                        initial: { scaleY: 1, height: 'auto' },
                      }}
                    >
                      {heading ? (
                        <Box
                          height='100%'
                          maxHeight={`calc(${props.height ?? '100vh'} - 100px)`}
                          overflow='scroll'
                          onScroll={onScrollHandler}
                          data-testid='drawer-divider'
                          style={getDividerStyle({ showDivider, boxShadow })}
                        >
                          <Box py={2} px={3} height='100%'>
                            {children}
                          </Box>
                        </Box>
                      ) : (
                        <Box py={2} px={3} height='100%'>
                          {children}
                        </Box>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Flex>
            </DrawerRoot>
          </DrawerWrapper>
        )}
      </AnimatePresence>
    </SnapContainer>
  )
}

Drawer.displayName = 'Drawer'
