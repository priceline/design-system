import React from 'react'
import styled from 'styled-components'
// import Webfont from 'webfontloader'
import Markdown from './Markdown'
import {
  ThemeProvider,
  Box,
  Heading,
  Text,
} from 'pcln-design-system'

const Font = styled.div`
  font-family: Montserrat, sans-serif;
`

const scope = {
  h1: Heading.h1,
  h2: Heading.h2,
  h3: Heading.h3,
  h4: Heading.h4,
  h5: Heading.h5,
  h6: Heading.h6,
  p: Text,
}

scope.h1.defaultProps = {
  mb: 4,
  color: 'blue'
}
scope.h2.defaultProps = {
  mb: 4
}

scope.p.defaultProps = {
  mb: 3
}

class App extends React.Component {
  componentDidMount () {
    /*
    Webfont.load({
      google: {
        families: [
          'Montserrat:400,600'
        ]
      }
    })
    */
  }
  render () {
    const { sections = [] } = this.props

    return [
      <link key='webfont' rel='stylesheet' href='http://fonts.googleapis.com/css?family=Montserrat:400,600' />,
      <ThemeProvider key='main'>
        <Font>
          <Box p={3}>
            <h1>Design System</h1>
            {sections.map(section => (
              <Box key={section.name} py={4}>
                <Markdown
                  children={section.content}
                  scope={scope}
                />
              </Box>
            ))}
          </Box>
        </Font>
      </ThemeProvider>
    ]
  }
}

App.getInitialProps = async (props) => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const sections = fs.readdirSync(__dirname)
    .filter(file => /\.md$/.test(file))
    .map(filename => {
      const name = path.basename(filename, '.md')
      const raw = fs.readFileSync(path.join(__dirname, filename), 'utf8')
      const { content, data } = matter(raw)

      return {
        filename,
        name,
        raw,
        content,
        data
      }
    })

  return {
    sections
  }
}

export default App
