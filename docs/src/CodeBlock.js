import React from 'react'
import styled from 'styled-components'
import * as P1 from 'pcln-design-system'
import { LiveProvider, LivePreview, LiveEditor, LiveError } from 'react-live'
import { color, space, borderRadius, theme } from 'styled-system'
import Catch from './Catch'
import Pre from './Pre'

const Preview = styled(LivePreview)`
  padding: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme('colors.lightGray')};
`

const Err = styled(LiveError)`
  font-family: 'Roboto Mono', Menlo, monospace;
  font-size: 12px;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px;
  color: #fff;
  background-color: #f00;
`

const Editor = styled(LiveEditor)`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  margin: 0;
  padding: 8px;
  tab-size: 2;
  -moz-tab-size: 2;
  -o-tab-size: 2;
  white-space: pre-wrap;
  overflow: auto;
  ${color} &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${theme('colors.lightBlue')};
  }
`

Editor.defaultProps = {
  color: 'blue',
  bg: 'lightGray'
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
          <LiveProvider code={code} scope={P1} mountStylesheet={false}>
            <Preview />
            <Editor />
            <P1.Text
              fontSize="8px"
              align="right"
              caps
              bold
              mt={-12}
              mr={1}
              color="blue"
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
