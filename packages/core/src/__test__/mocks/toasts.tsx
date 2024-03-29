import {
  Attention as AttentionIcon,
  Check as CheckIcon,
  InformationOutline as InformationOutlineIcon,
} from 'pcln-icons'
import React from 'react'
import { type MotionVariant } from '../../Animate/Animate'
import { Button } from '../../Button/Button'
import { Flex } from '../../Flex/Flex'
import { Text } from '../../Text/Text'
import { useToast } from '../../ToastProvider/ToastProvider'

export const errorOptions = {
  children: 'Error Toast Message',
  color: 'error',
  icon: <AttentionIcon />,
}

export const informationOptions = {
  children: 'Information Toast Message',
  color: 'primary',
  icon: <InformationOutlineIcon />,
}

export const successOptions = {
  children: 'Success Toast Message',
  color: 'success',
  icon: <CheckIcon />,
}

export const customOptions = {
  children: <Text textStyle='paragraphBold'>Custom Toast Message</Text>,
  enterAnimation: 'expandDown' as MotionVariant,
  exitAnimation: 'fadeIn' as MotionVariant,
  hideClose: true,
  lifespan: 2000,
}

export const MockToastChildren = ({ variation }: { variation: 'border' | 'fill' }) => {
  const { addToast } = useToast()

  return (
    <Flex>
      <Button color='error' onClick={() => addToast({ ...errorOptions, variation })}>
        Add Error Toast
      </Button>
      <Button onClick={() => addToast({ ...informationOptions, variation })} mx={3}>
        Add Information Toast
      </Button>
      <Button color='success' onClick={() => addToast({ ...successOptions, variation })}>
        Add Success Toast
      </Button>
      <Button color='text.light' onClick={() => addToast({ ...customOptions, variation })} ml={3}>
        Add Custom Toast
      </Button>
    </Flex>
  )
}
