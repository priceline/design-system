import { Chat } from 'pcln-icons'
import React from 'react'
import {
  FloatingActionButton,
  type FloatingActionButtonProps,
} from '../FloatingActionButton/FloatingActionButton'

/**
 * @public
 */
export type ChatTriggerProps = FloatingActionButtonProps

/**
 * @public
 */
export function ChatTrigger(props: FloatingActionButtonProps): React.JSX.Element {
  return <FloatingActionButton bottom={0} icon={Chat} right={0} {...props} />
}
