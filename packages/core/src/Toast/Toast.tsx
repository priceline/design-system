import React, { useEffect } from 'react'
import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'
import { Close as CloseIcon } from 'pcln-icons'
import { Absolute } from '../Absolute'
import { Flex, IFlexProps } from '../Flex'
import { IconButton } from '../IconButton'
import { Relative } from '../Relative'
import { Text } from '../Text'
import { getPaletteColor } from '../utils'

const RoundIconButton = styled(IconButton)`
  background-color: ${getPaletteColor('background.lightest')};
  padding: ${themeGet('space.1')};

  &:hover {
    background-color: ${getPaletteColor('background.lightest')};
  }
`

export interface IToastProps extends Omit<IFlexProps, 'id'> {
  children: React.ReactNode
  hideClose?: boolean
  icon?: React.ReactNode
  id?: number
  lifespan?: number
  onRemoveClick?: (id: number) => void
}

function Toast({
  children,
  color = 'text.light',
  hideClose,
  icon,
  id,
  lifespan,
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
      <Flex
        {...props}
        borderRadius='lg'
        boxShadowSize='xl'
        color={color}
        justifyContent='space-between'
        alignItems='center'
        p={3}
      >
        {icon && (
          <Flex mr={3}>
            {icon}
          </Flex>
        )}
        <Flex width='100%'>
          {typeof children === 'string' ? <Text textStyle='paragraph'>{children}</Text> : children}
        </Flex>
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
      </Flex>
    </Relative>
  )
}

export default Toast
