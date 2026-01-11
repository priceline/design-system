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
 * A floating action button preset for opening chat interfaces.
 *
 * Renders a FloatingActionButton with a chat icon, positioned at bottom-right by
 * default. Extends all FloatingActionButton props for customization. Use as the
 * trigger to open chat windows or drawers.
 *
 * @public
 */
export function ChatTrigger(props: FloatingActionButtonProps): JSX.Element {
  return <FloatingActionButton bottom={0} icon={Chat} right={0} {...props} />
}
