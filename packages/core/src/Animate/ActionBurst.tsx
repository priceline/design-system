import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { withTheme } from 'styled-components'
import { motion } from 'framer-motion'
import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const propTypes = {
  icon: PropTypes.ReactNode,
  children: PropTypes.ReactNode,
}

const ActionBurst: React.FC<InferProps<typeof propTypes>> = (props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Box onClick={() => setIsActive(true)}>
      {isActive && (
        <>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{
              color: getPaletteColor('primary.base')(props),
              opacity: 0.2,
              scale: 1,
              y: -100,
              position: 'absolute',
            }}
            animate={{ scale: [0, 1, 0], y: [-100, -200], rotate: [0, 360] }}
            onAnimationComplete={() => {
              setIsActive(false)
            }}
          >
            {props.icon}
          </motion.div>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{
              color: getPaletteColor('primary.base')(props),
              opacity: 0.4,
              scale: 1,
              y: -70,
              x: 0,
              position: 'absolute',
            }}
            animate={{ scale: [0, 1, 0], y: [-70, -200], x: [0, -200], rotate: [0, 360] }}
          >
            {props.icon}
          </motion.div>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{
              color: getPaletteColor('promoPrimary.base')(props),
              opacity: 0.3,
              scale: 1,
              y: -80,
              x: 0,
              position: 'absolute',
            }}
            animate={{ scale: [0, 1, 0], y: [-80, -100], x: [0, 200], rotate: [0, 360] }}
          >
            {props.icon}
          </motion.div>
        </>
      )}
      {props.children}
    </Box>
  )
}

export default withTheme(ActionBurst)
