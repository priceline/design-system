import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import remark from 'remark'
import remarkSlug from 'remark-slug'
import remarkReact from 'remark-react'
import { color, space, theme } from 'styled-system'
import { Heading, Text, Link } from 'pcln-design-system'
import CodeBlock from './CodeBlock'

class Markdown extends React.Component {
  constructor() {
    super()

    this.getElement = props => {
      const { children, scope } = props
      const remarkReactComponents = Object.assign({}, defaultScope, scope)
      const text = React.Children
        .toArray(children)
        .filter(child => typeof child === 'string')
        .join('\n')
      const opts = {
        // design-system components can be passed to
        // remark-react for rending
        remarkReactComponents,
        toHast: {
          handlers: {
            code: codeHandler
          }
        }
      }
      const el = remark()
        .use(remarkSlug)
        .use(remarkReact, opts)
        .processSync(text).contents

      return el
    }
  }

  render() {
    const el = this.getElement(this.props)

    return el
  }
}

// move
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

const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  ${color};
`

Code.defaultProps = {
  color: 'darkBlue'
}

const OverflowAuto = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

const Table = styled(props => (
  <OverflowAuto>
    <table {...props} />
  </OverflowAuto>
))`
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  ${space} & th {
    text-align: left;
    font-weight: bold;
    vertical-align: bottom;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${theme('colors.borderGray')};
  }

  & td {
    vertical-align: top;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme('colors.borderGray')};
  }

  & th,
  & td {
    padding: 4px;
    line-height: inherit;
  }
`
Table.defaultProps = {
  mt: 3,
  mb: 3
}

// move to scope
const heading = type => props => {
  const Comp = Heading[type]
  return (
    <Comp {...props}>
      <Link href={'#' + props.id} color="inherit">
        {props.children}
      </Link>
    </Comp>
  )
}

const defaultScope = {
  // convert markdown h1 to h2 for site
  // h1: p => <Heading.h2 {...p} />,
  h1: heading('h2'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  p: p => <Text.p {...p} />,
  pre: CodeBlock,
  code: Code,
  table: Table
}

defaultScope.h1.defaultProps = {
  mt: 4,
  mb: 3
}
defaultScope.h2.defaultProps = {
  fontSize: 4,
  mt: 3,
  mb: 2
}

defaultScope.h3.defaultProps = {
  fontSize: 3,
  mt: 3,
  mb: 2
}

defaultScope.h4.defaultProps = {
  fontSize: 3,
  mt: 3,
  mb: 2
}

defaultScope.p.defaultProps = {
  mt: 0,
  mb: 3
}

export default Markdown
