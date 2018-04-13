import React from 'react'
import styled from 'styled-components'
import * as P1 from 'pcln-design-system'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { color, space, borderRadius, theme } from 'styled-system'
import Catch from './Catch'
import Pre from './Pre'

const Preview = styled(LivePreview)`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f6f8fa;
  border-radius: 2px;
  border: 1px solid #d1d6db;
`

const Err = styled(LiveError)`
  font-family: 'Roboto Mono', Menlo, monospace;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px;
  color: #fff;
  background-color: #f00;
`

const Editor = styled(LiveEditor)`
  font-family: 'Roboto Mono', monospace;
  margin: 0;
  padding: 16px;
  tab-size: 2;
  white-space: pre-wrap;
  overflow: auto;
  border-radius: 2px;
  ${color} &:focus {
    outline: none;
  }
`

Editor.defaultProps = {
  color: 'blue',
  bg: 'text'
}

class CodeBlock extends React.Component {
  constructor() {
    super()
    this.getCode = props =>
      React.Children.toArray(props.children)
        .filter(child => typeof child === 'string')
        .join('\n')
  }

  render() {
    const { lang } = this.props

    if (lang !== '.jsx') {
      return <Pre children={this.props.children} />
    }

    const code = this.getCode(this.props)

    return (
      <P1.Box mb={3}>
        <Catch>
          <LiveProvider
            code={code}
            scope={P1}
            mountStylesheet={false}
            transformCode={code => `<React.Fragment>${code}</React.Fragment>`}
          >
            <Preview />
            <Editor />
            <P1.Text
              fontSize={10}
              align="right"
              caps
              bold
              mt={-16}
              mr={1}
              color="white"
            >
              Live Code
            </P1.Text>
            <Err />
          </LiveProvider>
        </Catch>
      </P1.Box>
    )
  }
}

export default CodeBlock
