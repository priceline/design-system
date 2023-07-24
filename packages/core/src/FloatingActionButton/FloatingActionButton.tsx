/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React, { useState } from 'react'
import { Absolute, IAbsoluteProps } from '../Absolute'
import { Animate } from '../Animate'
import { Box } from '../Box'
import { Button } from '../Button'
import { Tooltip } from '../Tooltip'

export interface IFloatingActionButton extends IAbsoluteProps {
  hasNotification?: boolean
  icon: React.Component
  tooltip?: string
  onClick: () => void
}

function FloatingActionButton({ hasNotification, icon, tooltip, onClick, ...props }: IFloatingActionButton) {
  const [isTooltipOpen, setTooltipOpen] = useState(false)

  function onMouseOver() {
    setTooltipOpen(true)
  }

  function onMouseOut() {
    setTooltipOpen(false)
  }

  return (
    <Absolute {...props} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {hasNotification && (
        <Absolute top={0} right={0}>
          <Animate variant='pulse'>
            <Box borderRadius='full' color='error' width='16px' height='16px' />
          </Animate>
        </Absolute>
      )}
      {isTooltipOpen && (
        <Tooltip color='text.base' top center bottom='-2px' p={1}>
          <Box width='110px'>{tooltip}</Box>
        </Tooltip>
      )}
      <Button
        borderRadius='full'
        boxShadowSize='overlay-lg'
        size='extraLarge'
        IconLeft={icon}
        onClick={onClick}
      />
    </Absolute>
  )
}

export default FloatingActionButton
