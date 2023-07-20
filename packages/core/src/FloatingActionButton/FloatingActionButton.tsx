/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React from 'react'
import { Absolute, IAbsoluteProps } from '../Absolute'
import { Animate } from '../Animate'
import { Box } from '../Box'
import { Button } from '../Button'

export interface IFloatingActionButton extends IAbsoluteProps {
  hasNotification?: boolean
  icon: React.Component
  onClick: () => void
}

function FloatingActionButton({ hasNotification, icon, onClick, ...props }: IFloatingActionButton) {
  return (
    <Absolute {...props}>
      {hasNotification && (
        <Absolute top={0} right={0}>
          <Animate variant='pulse'>
            <Box borderRadius='full' color='error' width='16px' height='16px' />
          </Animate>
        </Absolute>
      )}
      <Button borderRadius='full' size='extraLarge' IconLeft={icon} onClick={onClick} />
    </Absolute>
  )
}

export default FloatingActionButton
