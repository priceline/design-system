// @ts-nocheck

import React from 'react'
import { Button } from '../../Button'
import { Flex } from '../../Flex'
import { Text } from '../../Text'
import { useToast } from '../../ToastProvider'

export const errorOptions = {
  children: 'Error Toast Message',
  variant: 'error',
}

export const informationOptions = {
  children: 'Information Toast Message',
  variant: 'information',
}

export const successOptions = {
  children: 'Success Toast Message',
  variant: 'success',
}

export const customOptions = {
  children: <Text textStyle='paragraphBold'>Custom Toast Message</Text>,
  color: 'text.light',
  enterAnimation: 'expandDown',
  exitAnimation: 'fadeIn',
  hideClose: true,
}

export const MockToastChildren = () => {
  const { addToast } = useToast()

  return (
    <Flex>
      <Button color='error' onClick={() => addToast(errorOptions)}>
        Add Error Toast
      </Button>
      <Button onClick={() => addToast(informationOptions)} mx={3}>
        Add Information Toast
      </Button>
      <Button color='success' onClick={() => addToast(successOptions)}>
        Add Success Toast
      </Button>
      <Button color='text.light' onClick={() => addToast(customOptions)} ml={3}>
        Add Custom Toast
      </Button>
    </Flex>
  )
}
