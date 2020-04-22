import PropTypes from 'prop-types'

/**
 * Since PropTypes doesn't ship with a type for React refs, we define one here to
 * reference throughout the project to describe custom props that expect a ref (e.g. dsRef)
 *
 * Source: https://stackoverflow.com/a/51127130
 */

const refPropType = PropTypes.oneOfType([
  // Either a function
  PropTypes.func,
  // Or the instance of a DOM native element (see the note about SSR)
  PropTypes.shape({ current: PropTypes.instanceOf(Element) })
])

export default refPropType
