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
        remarkReactComponents: scope
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

Markdown.propTypes = {
  scope: PropTypes.object
}

Markdown.defaultProps = {
  scope: {}
}

export default Markdown
