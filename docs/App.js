import React from 'react'
import styled from 'styled-components'
import Markdown from './Markdown'
import {
  ThemeProvider,
  Flex,
  Box,
  Heading,
  Text,
  Link,
} from 'pcln-design-system'
import { color } from 'styled-system'
import CodeBlock from './CodeBlock'

// temporary
const Container = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`

const Font = styled.div`
  font-family: Montserrat, sans-serif;
  color: ${props => props.theme.colors.text};
`

const Code = styled.code`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  ${color}
`

Code.defaultProps = {
  color: 'purple'
}

const OverflowAuto = styled.div`
  max-width: 100%;
  overflow-x:auto;
`

const Table = props => (
  <OverflowAuto>
    <table {...props} />
  </OverflowAuto>
)

// move to scope
const heading = props => {
  console.log(props)
  return <Heading.h2 {...props} />
}

const scope = {
  // convert markdown h1 to h2 for site
  // h1: p => <Heading.h2 {...p} />,
  h1: heading,
  h2: p => <Heading.h2 {...p} />,
  h3: p => <Heading.h3 {...p} />,
  h4: p => <Heading.h4 {...p} />,
  h5: p => <Heading.h5 {...p} />,
  h6: p => <Heading.h6 {...p} />,
  p: p => <Text.p {...p} />,
  pre: CodeBlock,
  code: Code,
  table: Table
}

scope.h1.defaultProps = {
  mt: 4,
  mb: 3,
  color: 'blue'
}
scope.h2.defaultProps = {
  fontSize: 4,
  mt: 3,
  mb: 2
}

scope.p.defaultProps = {
  mt: 0,
  mb: 3
}

class App extends React.Component {
  render () {
    const { sections = [] } = this.props

    return [
      <link key='webfont' rel='stylesheet' href='http://fonts.googleapis.com/css?family=Montserrat:400,600|Roboto+Mono' />,
      <ThemeProvider key='main'>
        <Font>
          <Flex >
            <Box
              width={320}
              style={{
                flex: 'none'
              }}
              p={4}
              color='white'
              bg='text'>
              <Heading.h1 fontSize={3} mb={3}>
                Priceline Design System
              </Heading.h1>
              {sections.map(section => (
                <Box key={section.name}>
                  <Link
                    color='inherit'
                    href={'#' + section.name}
                    children={section.title || section.name}
                  />
                </Box>
              ))}
            </Box>
            <Box width='calc(100% - 320px)' style={{ flex: '1 1 auto' }} p={4}>
              <Container>
                {sections.map(section => (
                  <Box key={section.name}
                    id={section.name}
                    py={4}>
                    <Markdown
                      children={section.content}
                      scope={scope}
                    />
                  </Box>
                ))}
              </Container>
            </Box>
          </Flex>
        </Font>
      </ThemeProvider>
    ]
  }
}

const sectionsOrder = [
  'GettingStarted',
  'ThemeProvider',
  // Layout
  'Box',
  'Flex',
  'Hide',
  // Typography
  'Text',
  'Heading',
  'Link',
  'Truncate',
  // UI
  'Button',
  'Image',
  'BackgroundImage',
  'Icon',
  'Badge',
  'Divider',
  // Guides
  'Layout',
  'Contributing',
]

App.getInitialProps = async (props) => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const sectionsSource = fs.readdirSync(__dirname)
    .filter(file => /\.md$/.test(file))
    .map(filename => {
      const name = path.basename(filename, '.md')
      const raw = fs.readFileSync(path.join(__dirname, filename), 'utf8')
      const { content, data } = matter(raw)

      return Object.assign({}, data, {
        filename,
        name,
        raw,
        content,
      })
    })

  const sections = sectionsOrder
    .map(key => sectionsSource.find(s => s.name === key))

  return {
    sections
  }
}

export default App
