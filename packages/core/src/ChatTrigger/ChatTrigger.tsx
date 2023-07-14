import React from 'react'
import { FloatingActionButton } from '../FloatingActionButton'
import { Chat } from 'pcln-icons'

export interface IChatTrigger {
  hasNotification: boolean
  onClick: () => void
}

function ChatTrigger({ hasNotification, onClick }) {
  return (
    <FloatingActionButton
      bottom={0}
      hasNotification={hasNotification}
      icon={Chat}
      right={0}
      onClick={onClick}
    />
  )
}

export default ChatTrigger
