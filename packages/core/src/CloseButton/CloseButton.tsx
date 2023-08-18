import { motion } from 'framer-motion'
import { Close } from 'pcln-icons'
import React, { useState } from 'react'
import { IconButton } from '../IconButton'
import { IIconButtonProps } from '../IconButton/IconButton'
import { CloseButtonSize, closeButtonIconSizes } from './CloseButton.styled'

export interface ICloseButtonProps extends Omit<IIconButtonProps, 'size' | 'icon'> {
  onClick?: () => void
  title?: string
  size?: CloseButtonSize
}

export const CloseButton = ({ size = 'md', title = 'close', onClick, ...props }: ICloseButtonProps) => {
  const [hover, setHover] = useState(false)

  return (
    <IconButton
      onClick={onClick}
      title={title}
      {...props}
      icon={
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          style={{ position: 'relative' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'black',
              aspectRatio: '1',
              borderRadius: '100%',
              mixBlendMode: 'multiply',
              opacity: 0.25,
            }}
            animate={hover ? { scale: 1 } : { scale: 0 }}
          />
          <Close size={closeButtonIconSizes[size]} />
        </motion.div>
      }
    />
  )
}

export default CloseButton
