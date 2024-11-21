import { MotionVariants } from '../../Animate/Animate'

const enterAnimation = {
  top: { ...MotionVariants.slideInTop },
  bottom: { ...MotionVariants.slideInBottom },
  right: { ...MotionVariants.slideInRight },
  left: { ...MotionVariants.slideInLeft },
}

export const getEnterAnimation = ({ disableEnterAnimation, isMobile, placement }) =>
  !disableEnterAnimation && enterAnimation[isMobile ? 'bottom' : placement]
