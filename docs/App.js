import React from 'react'
import styled from 'styled-components'
import {
  StaticRouter,
  BrowserRouter,
  Route,
  NavLink } from 'react-router-dom'
import Landing from './Landing'
import Detail from './Detail'
import Markdown from './Markdown'
import {
  ThemeProvider,
  Flex,
  Box,
  Heading,
  Text,
  Link,
} from 'pcln-design-system'
import { space, color, theme } from 'styled-system'

const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter

const NavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: ${theme('fontSizes.1')}px;
  ${space}
  ${color}
  &:hover {
    box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, .125);
  }
  opacity: .75;
  &.active {
    opacity: 1;
  }
`
NavItem.defaultProps = {
  px: 3,
  py: 2,
  color: 'inherit'
}

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

class App extends React.Component {
  render () {
    const {
      sections = [],
      basename,
      pathname
    } = this.props

    return [
      <link key='webfont' rel='stylesheet' href='http://fonts.googleapis.com/css?family=Montserrat:400,600|Roboto+Mono' />,
      <ThemeProvider key='main'>
        <Font>
          <Router
            basename={basename}
            location={pathname}>
            <Flex style={{ minHeight: '100vh' }}>
              <Box
                width={320}
                style={{
                  flex: 'none'
                }}
                py={4}
                color='white'
                bg='text'>
                <Heading.h1
                  fontSize={3}
                  px={3}
                  mb={3}>
                  Priceline One
                </Heading.h1>
                {sections.map(section => (
                  <Box key={section.name}>
                    <NavItem
                      to={'/' + section.name}
                      color='inherit'
                      children={section.title || section.name}
                    />
                  </Box>
                ))}
              </Box>
              <Box width='calc(100% - 320px)' style={{ flex: '1 1 auto' }}>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <Landing {...this.props} />
                  )}
                />
                <Container>
                  <Box p={4}>
                    {sections.map((section, i) => (
                      <Route
                        key={section.name}
                        path={'/' + section.name}
                        render={() => (
                          <Detail
                            {...this.props}
                            {...section}
                            index={i}
                          />
                        )}
                      />
                    ))}
                  </Box>
                </Container>
              </Box>
            </Flex>
          </Router>
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
  const pkg = require('../package.json')
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
    pkg,
    sections
  }
}

export default App
