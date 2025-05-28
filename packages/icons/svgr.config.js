const dynamicTitlePlugin = require('./plugins/svg-dynamic-title-plugin')

const replaceSvgPlugin = require('./plugins/svg-replace-plugin')

const template = (
  { template },
  opts,
  // eslint-disable-next-line no-unused-vars
  { imports, componentName, props, jsx, exports }
) => template.ast`import React from 'react'
import Svg from './Svg'
import styled from 'styled-components'

const BaseComponent = ({
  size = 24,
  title,
  desc,
  titleId,
  descId,
  tabIndex = -1,
  focusable = false,
  role = 'img',
  ...props
}) => {
  let ariaLabelledBy = titleId ? titleId : ''
  ariaLabelledBy += desc && descId ? \` \${descId}\` : ''
  ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : undefined

  props['aria-labelledby'] = ariaLabelledBy

  return (${jsx})
}

const ${componentName} = styled(BaseComponent)\`
  outline: none;
\`

${componentName}.isIcon = true

export default ${componentName}`

module.exports = {
  template,
  ext: 'jsx',
  jsx: {
    babelConfig: {
      plugins: [replaceSvgPlugin, dynamicTitlePlugin],
    },
  },
  svgProps: {
    viewBox: '0 0 24 24',
    height: '{size}',
    width: '{size}',
    title: '{title}',
    titleId: '{titleId}',
    desc: '{desc}',
    descId: '{descId}',
    'aria-labelledby': '{ariaLabelledBy}',
    'aria-hidden': '{!ariaLabelledBy}',
    fill: 'currentcolor',
    role: '{role}',
    tabIndex: '{tabIndex}',
    focusable: '{focusable}',
  },
  svgoConfig: {
    plugins: {
      removeAttrs: { attrs: '(fill|viewBox)' },
    },
  },
  prettierConfig: {
    semi: false,
    singleQuote: true,
  },
}
