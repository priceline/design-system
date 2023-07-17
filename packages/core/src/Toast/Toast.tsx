import React, { useEffect } from 'react'
import { Close as CloseIcon } from 'pcln-icons'
import { Absolute } from '../Absolute'
import { Flex, IFlexProps } from '../Flex'
import { Relative } from '../Relative'
import { Text } from '../Text'
import { LeftBorderFlex, RoundIconButton } from './Toast.styled'

export interface IToastProps extends Omit<IFlexProps, 'id'> {
  children: React.ReactNode
  hideClose?: boolean
  icon?: React.ReactElement
  id?: number
  lifespan?: number
  variation?: 'border' | 'fill'
  onRemoveClick?: (id: number) => void
}

function Toast({
  children,
  color = 'text.light',
  hideClose,
  icon,
  id,
  lifespan,
  variation = 'fill',
  onRemoveClick,
  ...props
}: IToastProps) {
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
        {...props}
        alignItems='center'
        borderRadius='lg'
        boxShadowSize='xl'
        color={color}
        justifyContent='space-between'
        variation={variation}
        p={3}
        iconUsesColorScheme={!icon?.props.color}
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

export default Toast
