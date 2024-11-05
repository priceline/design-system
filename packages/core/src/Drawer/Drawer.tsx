import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { DrawerRoot, DrawerWrapper, HeaderButton } from './Drawer.styled'
import { ChevronDown, Close } from 'pcln-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { SpaceProps, LayoutProps } from 'styled-system'
import { useScrollWithShadow } from '../useScrollWithShadows/useScrollWithShadow'
import { MotionVariants } from '../Animate/Animate'
import { theme } from '../theme'

export type PlacementOptions = 'top' | 'bottom' | 'right' | 'left'
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
  }

const enterAnimation = {
  top: { ...MotionVariants.slideInTop },
  bottom: { ...MotionVariants.slideInBottom },
  right: { ...MotionVariants.slideInRight },
  left: { ...MotionVariants.slideInLeft },
}

const dragToDismissAnimation = (onDragEnd) => {
  return {
    drag: 'y',
    dragConstraints: { top: 0, bottom: 0 },
    dragElastic: { top: 0, bottom: 0.3 },
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
    onDragEnd: (event, info) => {
      if (info.offset.y > 200) {
        onDragEnd()
      }
    },
  }
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
  ...props
}) => {
  const { boxShadow, onScrollHandler } = useScrollWithShadow()
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerWrapper
          placement={isMobile ? 'bottom' : placement}
          padding={isFloating ? 3 : 0}
          maxHeight={isMobile ? ['290px', '400px', '480px', 'calc(100vh - 64px)'] : props.height ?? '100%'}
          maxWidth={isMobile ? '100%' : ['400px', '600px', '800px', '100%']}
          width={isMobile ? '100%' : props.width}
          height={!isCollapsed && props.height ? props.height : 'fit-content'}
          {...props}
        >
          <DrawerRoot
            data-testid='drawer'
            isCollapsed={isCollapsed}
            isFloating={isFloating}
            key='drawer'
            placement={isMobile ? 'bottom' : placement}
            {...enterAnimation[isMobile ? 'bottom' : placement]}
            {...(isDraggable ? dragToDismissAnimation(onCollapse) : {})}
            height='100%'
            width='100%'
            overflow='hidden'
          >
            <Flex flexDirection='column'>
              {(heading || onClose || onCollapse) && (
                <Flex flexDirection='column'>
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
                        className='drawer-divider'
                        style={
                          showDivider
                            ? {
                                boxShadow,
                              }
                            : {}
                        }
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
  )
}

Drawer.displayName = 'Drawer'
