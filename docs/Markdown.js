import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkReact from 'remark-react'

class Markdown extends React.Component {
  constructor () {
    super()

    this.getElement = props => {
      const { children, scope } = props
      const text = React.Children.toArray(children)
        .filter(child => typeof child === 'string')
        .join('\n')
      const opts = {
        // design-system components can be passed to
        // remark-react for rending
        remarkReactComponents: scope,
        toHast: {
          handlers: {
            code: codeHandler
          }
        }
      }
      const el = remark()
        .use(remarkReact, opts)
        .processSync(text)
        .contents

      return el
    }
  }

  render () {
    const el = this.getElement(this.props)

    return el
  }
}

var detab = require('detab')
var u = require('unist-builder')
const codeHandler = (h, node) => {
  const value = node.value ? detab(node.value + '\n') : ''
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  const props = {}

  if (lang) {
    props.className = ['language-' + lang]
    props.lang = lang
  }

  return h(node.position, 'pre', props, [
    u('text', value)
    // h(node, 'code', props, [ ])
  ])
}

Markdown.propTypes = {
  scope: PropTypes.object
}

Markdown.defaultProps = {
  scope: {}
}

export default Markdown
