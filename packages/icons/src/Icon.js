import React from 'react'
import upperFirst from 'lodash.upperfirst'
import PropTypes from 'prop-types'

import * as icons from './index'

const Icon = ({ name, title, desc, titleId, descId, ...props }) => {
  const Component = icons[name] || icons[upperFirst(name)]
  if (!Component) return false

  /**
   *  To support older browsers, make sure 'titleId' is passed along with 'title' props and
   * 'descid' with 'desc' props
   * Also, <desc> element should be followed by a <title> tag for <svg> elements
   * */
  if (!!title) {
    let ariaLabelledBy = ''
    props['aria-hidden'] = 'false'

    if (!!titleId) {
      ariaLabelledBy = titleId
    }

    if (!!desc && !!descId) {
      ariaLabelledBy = `${ariaLabelledBy} ${descId}`
    }

    if (!!ariaLabelledBy) {
      props['aria-labelledby'] = ariaLabelledBy
    }
  }

  return (
    <Component
      title={title}
      desc={desc}
      titleId={titleId}
      descId={descId}
      {...props}
    />
  )
}

Icon.defaultProps = {
  size: 24,
  'aria-hidden': 'true',
  focusable: 'false'
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: (props, key, componentName) => {
    const name = props[key]
    if (!icons[name] && !icons[upperFirst(name)]) {
      return new Error(
        `Unknown name prop \`${name}\` supplied to \`${componentName}\``
      )
    } else if (!icons[name]) {
      return new Error(
        `Icon name prop should be uppercase.\n` +
          `Use \`${upperFirst(name)}\` instead of ${name}.`
      )
    }
  },
  title: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `'title' prop supplied to '${componentName}' should be a string`
      )
    } else if (!!props[propName] && !props['titleId']) {
      return new Error(
        `'titleId' prop should be passed along with 'title' prop to '${componentName}'`
      )
    }
  },
  desc: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `'desc' prop supplied to '${componentName}' should be a string`
      )
    } else if (!!props[propName] && !props['title']) {
      return new Error(
        `'title' prop should be passed along with 'desc' prop to '${componentName}'`
      )
    } else if (!!props[propName] && !props['descId']) {
      return new Error(
        `'descId' prop should be passed along with 'desc' prop to '${componentName}'`
      )
    }
  },
  titleId: PropTypes.string,
  descId: PropTypes.string
}

export default Icon
