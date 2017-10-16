import React from 'react'
import styled from 'styled-components'
import * as DS from 'pcln-design-system'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'
import { color, theme } from 'styled-system'

const Preview = styled(LivePreview)`
  padding: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
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
  padding: 8px;
  tab-size: 2;
  ${color}
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${theme('colors.purple')};
  }
`

Editor.defaultProps = {
  color: 'purple',
  bg: 'lightGray'
}

const Pre = styled.pre`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  margin: 0;
  overflow-x: auto;
  ${color}
`

Pre.defaultProps = {
  color: 'purple'
}

class Catch extends React.Component {
  constructor () {
    super()
    this.state = {
      err: null
    }
  }
  componentDidCatch (err, info) {
    this.setState({ err })
  }
  render () {
    const { err } = this.state
    if (err) return <pre>{err}</pre>
    return this.props.children
  }
}

class CodeBlock extends React.Component {
  constructor () {
    super()
    this.getCode = props => React.Children.toArray(props.children)
      .filter(child => typeof child === 'string')
      .join('\n')
  }

  render () {
    const { lang } = this.props

    if (lang !== '.jsx') {
      return <Pre children={this.props.children} />
    }

    const code = this.getCode(this.props)

    return (
      <Catch>
        <LiveProvider
          code={code}
          scope={DS}
          mountStylesheet={false}>
          <Preview />
          <Editor />
          <DS.Text f={0} color='purple'>Live Code</DS.Text>
          <Err />
        </LiveProvider>
      </Catch>
    )
  }
}

export default CodeBlock
