import { keyframes, css } from 'styled-components'
import { KEY_FRAMES, ACTION_KEY, DURATION, VARIATION_DURATION, EASING, VARIATION_EASING } from './constants'

const getKeys = ({ start, end }) =>
  keyframes`
    0% { ${start} }
    100% { ${end} }
  `

const getKeyFrames = ({ isAnimatedState, variation }) =>
  getKeys(KEY_FRAMES[variation][ACTION_KEY[isAnimatedState]])

const getDuration = ({ isAnimatedState, variation }) =>
  VARIATION_DURATION[variation]?.[ACTION_KEY[isAnimatedState]] || DURATION[ACTION_KEY[isAnimatedState]]

const getEasing = ({ isAnimatedState, variation }) =>
  VARIATION_EASING[variation]?.[ACTION_KEY[isAnimatedState]] || EASING[ACTION_KEY[isAnimatedState]]

const getDefaultCss = (variation) =>
  css`
    ${KEY_FRAMES[variation][ACTION_KEY.false].end}
  `

const getAnimation = ({ isAnimatedState, variation }) =>
  css`
    animation: ${getKeyFrames({ isAnimatedState, variation })} ${getDuration({ isAnimatedState, variation })}
      ${getEasing({ isAnimatedState, variation })} forwards;
  `

const getAnimationCss = ({ isAnimatedState, variation }) =>
  isAnimatedState === null ? getDefaultCss(variation) : getAnimation({ isAnimatedState, variation })

export { getAnimationCss }
