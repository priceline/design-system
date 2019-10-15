import React from 'react'
import upperFirst from 'lodash.upperfirst'
import PropTypes from 'prop-types'
import * as icons from './index'

const Icon = ({ name, title, desc, titleId, descId, ...props }) => {
  const Component = icons[name] || icons[upperFirst(name)]

  let ariaLabelledBy = titleId ? titleId : ''
  ariaLabelledBy += desc && descId ? ` ${descId}` : ''
  ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : undefined

  if (!Component) {
    if (process.env.NODE_ENV !== 'production') {
      console.trace(
        name ? `icon ${name} does not exist` : 'icon is missing name prop'
      )
    }
    return null
  } else {
    return (
      <Component
        title={title}
        desc={desc}
        titleId={titleId}
        descId={descId}
        aria-hidden={!ariaLabelledBy}
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
        focusable={false}
        {...props}
      />
    )
  }
}

Icon.isIcon = true
Icon.displayName = 'Icon'

Icon.defaultProps = {
  size: 24
}

Icon.propTypes = {
  name: (props, key, componentName) => {
    const name = props[key]
    if (!icons[name] && !icons[upperFirst(name)]) {
      return new Error(
        `Unknown name prop \`${name}\` supplied to \`${componentName}\``
      )
    }
  },
  title: PropTypes.string,
  titleId: PropTypes.string,
  desc: PropTypes.string,
  descId: PropTypes.string
}

export default Icon
