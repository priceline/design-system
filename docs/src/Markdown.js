import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import remark from 'remark'
import remarkSlug from 'remark-slug'
import remarkReact from 'remark-react'
import { color, space, theme } from 'styled-system'
import { Heading, Text, Link } from 'pcln-design-system'
import detab from 'detab'
import unist from 'unist-builder'

import CodeBlock from './CodeBlock'
import Code from './Code'

class Markdown extends React.Component {
  constructor() {
    super()

    this.getElement = props => {
      const { children, scope } = props
      const remarkReactComponents = Object.assign({}, defaultScope, scope)
      const text = React.Children.toArray(children)
        .filter(child => typeof child === 'string')
        .join('\n')
      const opts = {
        // pass design-system components to remark-react for rending
        remarkReactComponents,
        toHast: {
          handlers: {
            code: codeHandler
          }
        }
      }
      const element = remark()
        .use(remarkSlug)
        .use(remarkReact, opts)
        .processSync(text).contents

      return element
    }
  }

  render() {
    const element = this.getElement(this.props)

    return element
  }
}

const codeHandler = (h, node) => {
  const value = node.value ? detab(node.value + '\n') : ''
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  const props = {}

  if (lang) {
    props.className = ['language-' + lang]
    props.lang = lang
  }

  return h(node.position, 'pre', props, [unist('text', value)])
}

Markdown.propTypes = {
  scope: PropTypes.object
}

Markdown.defaultProps = {
  scope: {}
}

const OverflowAuto = styled.div`
  max-width: 100%;
  overflow-x: auto;
`

// Styled table element used for markdown
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
    background-color: #f6f8fa;
    padding: 0 16px;
  }

  & td:first-child {
    font-family: 'Roboto Mono', Menlo, monospace;
    font-size: 16px;
    min-width: 150px;
    color: ${theme('colors.blue')};
  }

  & td {
    font-size: 16px;
    color: ${theme('colors.text')};
    vertical-align: middle;
    padding: 0 16px !important;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme('colors.borderGray')};
  }

  & th,
  & td {
    height: 72px;
    line-height: inherit;
  }
`
Table.defaultProps = {
  my: 3
}

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

// Provide remark-react components from the design-system
const defaultScope = {
  // convert markdown h1 to h2 for site
  h1: heading('h2'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  a: Link,
  p: p => <Text.p {...p} />,
  pre: CodeBlock,
  code: Code,
  table: Table
}

// Markdown components typography and margins
// can be set with defaultProps
defaultScope.h1.defaultProps = {
  fontSize: 5,
  mt: 5,
  mb: 3
}
defaultScope.h2.defaultProps = {
  fontSize: 5,
  mt: 5,
  mb: 3
}

defaultScope.h3.defaultProps = {
  fontSize: 4,
  mt: 4,
  mb: 3,
  style: {
    fontWeight: '700'
  }
}

defaultScope.h4.defaultProps = {
  fontSize: 3,
  mt: 4,
  mb: 3
}

defaultScope.p.defaultProps = {
  fontSize: 2,
  mt: 0,
  mb: 3,
  style: {
    lineHeight: 1.6
  }
}

export default Markdown
