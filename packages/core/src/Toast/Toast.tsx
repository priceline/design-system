import React, { useEffect } from 'react'
import {
  Attention as AttentionIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  InformationOutline as InformationOutlineIcon,
} from 'pcln-icons'
import { Flex, IFlexProps } from '../Flex'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

export interface IToastProps extends Omit<IFlexProps, 'id'> {
  id: number
  lifespan?: number
  text: string
  variant: 'error' | 'information' | 'success'
  onRemoveClick: (id: number) => void
}

function getVariationProps(variant) {
  switch (variant) {
    case 'error':
      return {
        color: 'error',
        icon: <AttentionIcon size={20} mr={3} />,
      }
    case 'information':
      return {
        color: 'primary',
        icon: <InformationOutlineIcon size={20} mr={3} />,
      }
    case 'success':
      return {
        color: 'success',
        icon: <CheckIcon size={20} mr={3} />,
      }
  }
}

function Toast({ id, lifespan, text, variant, onRemoveClick, ...props }: IToastProps) {
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
      <Flex width='100%'>
        <Text textStyle='paragraph'>{text}</Text>
      </Flex>
      <IconButton icon={<CloseIcon size={20} title='close-toast' />} onClick={handleRemoveClick} />
    </Flex>
  )
}

export default Toast
