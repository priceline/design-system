import React from 'react'
import { Absolute } from '../Absolute'
import { Box } from '../Box'
import { Button } from '../Button'
import { Chat } from 'pcln-icons'
import { Animate } from '../Animate'

function ChatTrigger({ hasNotification }) {
  return (
    <Absolute>
      {hasNotification && (
        <Absolute top={0} right={0}>
          <Animate variant='pulse'>
            <Box borderRadius='full' color='error' width='16px' height='16px' />
          </Animate>
        </Absolute>
      )}
      <Button borderRadius='full' size='extraLarge' IconLeft={Chat} />
    </Absolute>
  )
}

export default ChatTrigger
