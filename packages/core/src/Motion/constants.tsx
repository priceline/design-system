import { timingFunctions, duration } from '../theme/theme'
import { KEY_FRAMES } from './Motion.keyframes'

const VARIATION_DURATION = {
  QUICK_GROW: {
    rest: '50ms',
    animated: duration.fast,
  },
  EXPAND_DOWN: {
    rest: duration.fast,
    animated: duration.normal,
  },
}

const ACTION_KEY = {
  true: 'animated',
  false: 'rest',
}

const VARIATION_EASING = {
  GROW_XY: {
    animated: timingFunctions.easeOut,
    rest: timingFunctions.easeIn,
  },
}

const EASING = {
  animated: timingFunctions.easeOut,
  rest: timingFunctions.easeIn,
}

const DURATION = {
  rest: duration.fast,
  animated: duration.normal,
}

export { KEY_FRAMES, ACTION_KEY, DURATION, VARIATION_DURATION, VARIATION_EASING, EASING }
