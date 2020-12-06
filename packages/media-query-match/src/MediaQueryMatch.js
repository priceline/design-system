import React from 'react'
import PropTypes from 'prop-types'
import Responsive from 'react-responsive'

const matchers = {
  xs: '20em',
  sm: '32em',
  md: '40em',
  lg: '48em',
  xl: '64em',
  xxl: '80em',
}

/**
 * MediaQueryMatch is a React component that is used to conditionally render provided children based on the
 * result of evaluating media queries.
 *
 * Supported breakpoints:
 *
 * | Name             | Width in `em`     | Width in `px` |
 * | :--------------- | :----------:  | :------------------: |
 * | `xs`   | `20em`         | `320px`             |
 * | `sm`   | `32em`         | `512px`             |
 * | `md`   | `40em`         | `640px`             |
 * | `lg`   | `48em`         | `768px`             |
 * | `xl`   | `64em`         | `1024px`             |
 * | `xxl`   | `80em`         | `1280px`             |
 */
const MediaQueryMatch = ({ minWidth, maxWidth, ignore, children, ...props }) => {
  if (ignore) return children

  if (!minWidth && !maxWidth) {
    return children
  }

  const minBreakpoint = minWidth && matchers[minWidth]
  const maxBreakpoint = maxWidth && matchers[maxWidth]
  const transFormedMaxBreakPoint = maxBreakpoint && `${parseInt(maxBreakpoint) - 0.01}em`

  return (
    <Responsive minWidth={minBreakpoint} maxWidth={transFormedMaxBreakPoint} {...props}>
      {(matchesQuery) => matchesQuery && children}
    </Responsive>
  )
}

MediaQueryMatch.propTypes = {
  /** minimum width to mount the children */
  minWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),

  /** maximum width to mount the children */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),

  /** if truthy, children will render regardless of match status. useful for SETI tests */
  ignore: PropTypes.bool,

  /** conditionally rendered react children */
  children: PropTypes.node,
}

MediaQueryMatch.defaultProps = {
  children: null,
}

export default MediaQueryMatch
