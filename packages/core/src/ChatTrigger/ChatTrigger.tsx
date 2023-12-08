/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import { Chat } from 'pcln-icons'
import React from 'react'
import { FloatingActionButton, type FloatingActionButtonProps } from '../FloatingActionButton'

export type ChatTriggerProps = FloatingActionButtonProps

export function ChatTrigger(props: FloatingActionButtonProps): JSX.Element {
  return <FloatingActionButton bottom={0} icon={Chat} right={0} {...props} />
}
