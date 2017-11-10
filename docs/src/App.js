import React from 'react'
import { StaticRouter, BrowserRouter, Route, NavLink } from 'react-router-dom'
import {
  ThemeProvider,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Hide,
  Container,
  Button
} from 'pcln-design-system'
import Landing from './Landing'
import Detail from './Detail'
import Markdown from './Markdown'
import ScrollTop from './ScrollTop'
import NavItem from './NavItem'
import StickyBar from './StickyBar'

const Router = typeof document !== 'undefined' ? BrowserRouter : StaticRouter

const views = {
  Color: () => <h1>Color TK</h1>,
  Typography: () => <h1>Typography TK</h1>,
  Iconography: () => <h1>Iconography TK</h1>
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      menuOpen: false
    }

    this.update = fn => this.setState(fn)
  }

  render() {
    const { sections = [], basename, pathname, pkg, styles } = this.props
    const { menuOpen } = this.state

    return [
      <title key="title">Priceline One Design System</title>,
      <head
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />,
      <link
        key="webfont"
        rel="stylesheet"
        href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto+Mono"
      />,
      <ThemeProvider key="main">
        <Router basename={basename} location={pathname}>
          <ScrollTop>
            <Flex
              wrap
              align="flex-start"
              color="text"
              style={{ minHeight: '100vh' }}
            >
              <StickyBar
                open={menuOpen}
                width={[1, 256]}
                px={3}
                py={[2]}
                color="white"
                bg="text"
              >
                <Flex align="center" px={2} py={2}>
                  <Heading.h1 fontSize={3}>
                    <NavLink
                      to="/"
                      style={{
                        display: 'block',
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      Priceline One
                    </NavLink>
                  </Heading.h1>
                  <Hide ml="auto" sm md lg xl>
                    <Button size="small" onClick={e => this.update(toggleMenu)}>
                      Menu
                    </Button>
                  </Hide>
                </Flex>
                {sections.filter(s => !!s).map(section => (
                  <Box key={section.name} onClick={e => this.update(closeMenu)}>
                    <Heading
                      color="rgba(255, 255, 255, .32)"
                      p={2}
                      bold
                      caps
                      fontSize={0}
                    >
                      {section.name}
                    </Heading>
                    {section.pages.map(page => (
                      <NavItem
                        key={page.name}
                        to={'/' + page.name}
                        color="inherit"
                        children={page.title || page.name}
                      />
                    ))}
                  </Box>
                ))}
              </StickyBar>
              <Box
                width={[1, 'calc(100% - 320px)']}
                style={{
                  flex: '1 1 auto',
                  minHeight: '100vh'
                }}
              >
                <Route
                  exact
                  path="/"
                  render={() => <Landing {...this.props} />}
                />
                <Container maxWidth={768}>
                  {sections.map(section =>
                    section.pages.map((page, i) => (
                      <Route
                        key={page.name}
                        path={'/' + page.name}
                        render={() => {
                          const Component = views[page.name]
                          return Component ? (
                            <Component
                              {...page}
                              pages={section.pages}
                              index={i}
                            />
                          ) : (
                            <Detail {...page} pages={section.pages} index={i} />
                          )
                        }}
                      />
                    ))
                  )}
                </Container>
              </Box>
            </Flex>
          </ScrollTop>
        </Router>
      </ThemeProvider>
    ]
  }
}

const sectionNames = [
  'GettingStarted',
  // Layout
  'Box',
  'Flex',
  'Hide',
  'Container',
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
  'Card',
  'Hug',
  // 'Flag',
  // 'GuestRating',
  // Guides
  'Layout',
  'Contributing'
]

const pages = [
  {
    name: 'Foundations',
    pages: ['Color', 'Typography', 'Iconography']
  },
  {
    name: 'Components',
    pages: [
      'GettingStarted',
      'Box',
      'Flex',
      'Hide',
      'Container',
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
      'Card',
      'Hug'
    ]
  },
  {
    name: 'Resources',
    pages: ['Layout', 'Contributing']
  }
]

const customPages = {
  Color: {
    name: 'Color',
    route: '/Color',
    Component: () => <h1>Color TK</h1>
  },
  Typography: {
    name: 'Typography',
    route: '/Typography',
    Component: () => <h1>Typography TK</h1>
  },
  Iconography: {
    name: 'Iconography',
    route: '/Iconography',
    Component: () => <h1>Iconography TK</h1>
  }
}

const routes = pages.reduce((a, b) => [...a, b.pages.map(name => '/' + name)], [
  '/'
])

App.defaultProps = {
  routes
}

App.getInitialProps = async props => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const { ServerStyleSheet } = require('styled-components')
  const pkg = require('../../package.json')

  const content = fs
    .readdirSync(path.join(__dirname, '..'))
    .filter(file => /\.md$/.test(file))
    .map(filename => {
      const name = path.basename(filename, '.md')
      const raw = fs.readFileSync(path.join(__dirname, '..', filename), 'utf8')
      const { content, data } = matter(raw)

      return Object.assign({}, data, {
        filename,
        name,
        route: '/' + name,
        raw,
        content
      })
    })

  const sections = pages.map(page => {
    return Object.assign({}, page, {
      pages: page.pages.map(key => {
        console.log(key, customPages[key])
        return customPages[key] || content.find(c => c.name === key) || key
      })
    })
  })

  const sheet = new ServerStyleSheet()
  sheet.collectStyles(React.createElement(props.Component, props))
  const styles = sheet.getStyleTags()

  return {
    pkg,
    styles,
    sections
  }
}

const toggle = key => state => ({ [key]: !state[key] })
const toggleMenu = toggle('menuOpen')
const closeMenu = state => ({ menuOpen: false })

export default App
