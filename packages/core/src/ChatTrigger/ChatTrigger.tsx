/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import { FloatingActionButton, IFloatingActionButton } from '../FloatingActionButton'
import { Chat } from 'pcln-icons'

export interface IChatTrigger extends IFloatingActionButton {
  hasNotification: boolean
  onClick: () => void
}

function ChatTrigger(props: IChatTrigger) {
  return <FloatingActionButton bottom={0} icon={Chat} right={0} {...props} />
}

export default ChatTrigger
