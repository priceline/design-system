import PropTypes from 'prop-types'
import React from 'react'
import type { IButtonProps } from '../Button'
import { AnimationWrapper } from './IconAnimation.styles'

const propTypes = {
  animation: PropTypes.string,
}

export interface IconAnimationProps extends IButtonProps {
  autoFocus?: boolean
  animation?: string
}

const IconAnimation: React.FC<IconAnimationProps> = ({ children, animation = 'default' }) => {
  const [toggle, setToggle] = React.useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <AnimationWrapper onClick={handleClick} animation={animation} toggle={toggle}>
      {children}
    </AnimationWrapper>
  )
}

IconAnimation.displayName = 'IconAnimation'

IconAnimation.propTypes = propTypes

export default IconAnimation
