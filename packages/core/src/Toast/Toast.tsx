import React, { useEffect } from 'react'
import { Close as CloseIcon } from 'pcln-icons'
import { Absolute } from '../Absolute/Absolute'
import { Flex, type FlexProps } from '../Flex/Flex'
import { Relative } from '../Relative/Relative'
import { Text } from '../Text/Text'
import { LeftBorderFlex, RoundIconButton } from './Toast.styled'

/**
 * @public
 */
export type ToastProps = {
  children: React.ReactNode
  hideClose?: boolean
  icon?: React.ReactElement
  id?: number
  lifespan?: number
  variation?: 'border' | 'fill'
  onRemoveClick?: (id: number) => void
} & Omit<FlexProps, 'id'>

/**
 * @public
 */
export function Toast({
  children,
  color = 'text.light',
  hideClose,
  icon,
  id,
  lifespan,
  variation = 'fill',
  onRemoveClick,
  ...props
}: ToastProps) {
  useEffect(() => {
    let timer
    if (lifespan > 0) {
      timer = setTimeout(() => {
        onRemoveClick(id)
      }, lifespan)
    }
    return () => clearTimeout(timer)
  }, [])

  function handleRemoveClick() {
    onRemoveClick(id)
  }

  return (
    <Relative>
      <LeftBorderFlex
        p={3}
        alignItems='center'
        borderRadius='lg'
        boxShadowSize='xl'
        color={color}
        justifyContent='space-between'
        variation={variation}
        iconUsesColorScheme={!icon?.props.color}
        {...props}
      >
        {icon && <Flex mr={3}>{React.cloneElement(icon, { color: variation === 'border' && color })}</Flex>}
        <Flex width='100%'>
          {typeof children === 'string' ? <Text textStyle='paragraph'>{children}</Text> : children}
        </Flex>
      </LeftBorderFlex>
      {!hideClose && (
        <Absolute top={-12} right={-12}>
          <RoundIconButton
            borderRadius='full'
            boxShadowSize='sm'
            icon={<CloseIcon color='primary' size={20} title='close-toast' />}
            onClick={handleRemoveClick}
          />
        </Absolute>
      )}
    </Relative>
  )
}
