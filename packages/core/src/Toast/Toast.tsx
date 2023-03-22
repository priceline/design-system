import React, { useEffect } from 'react'
import {
  Attention as AttentionIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  InformationOutline as InformationOutlineIcon,
} from 'pcln-icons'
import { Flex, IFlexProps } from '../Flex'
import { Text } from '../Text'
import { IconButton } from '../IconButton'

export interface IToastProps extends Omit<IFlexProps, 'id'> {
  children: React.ReactNode
  hideClose?: boolean
  id?: number
  lifespan?: number
  variant: 'error' | 'information' | 'success'
  onRemoveClick?: (id: number) => void
}

function getVariationProps(variant) {
  switch (variant) {
    case 'error':
      return {
        color: 'error',
        icon: <AttentionIcon size={20} />,
      }
    case 'information':
      return {
        color: 'primary',
        icon: <InformationOutlineIcon size={20} />,
      }
    case 'success':
      return {
        color: 'success',
        icon: <CheckIcon size={20} />,
      }
    default:
      return {}
  }
}

function Toast({ children, hideClose, id, lifespan, variant, onRemoveClick, ...props }: IToastProps) {
  const { icon, ...rest } = getVariationProps(variant)

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
    <Flex {...rest} {...props} borderRadius='lg' justifyContent='space-between' alignItems='center' p={3}>
      {icon}
      <Flex width='100%' mx={3}>
        {typeof children === 'string' ? <Text textStyle='paragraph'>{children}</Text> : children}
      </Flex>
      {!hideClose && (
        <IconButton icon={<CloseIcon size={20} title='close-toast' />} onClick={handleRemoveClick} />
      )}
    </Flex>
  )
}

export default Toast
