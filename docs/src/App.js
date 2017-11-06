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

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      menuOpen: false
    }

    this.update = fn => this.setState(fn)
  }

  render() {
    const { sections = [], basename, pathname, pkg } = this.props
    const { menuOpen } = this.state

    return [
      <link
        key="webfont"
        rel="stylesheet"
        href="http://fonts.googleapis.com/css?family=Montserrat:400,600|Roboto+Mono"
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
                py={[2, 4]}
                color="white"
                bg="text"
              >
                <Flex align="center" px={3} py={2}>
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
                    <NavItem
                      to={'/' + section.name}
                      color="inherit"
                      children={section.title || section.name}
                    />
                  </Box>
                ))}
              </StickyBar>
              <Box width="calc(100% - 320px)" style={{ flex: '1 1 auto' }}>
                <Route
                  exact
                  path="/"
                  render={() => <Landing {...this.props} />}
                />
                <Container maxWidth={768}>
                  {sections.map((section, i) => (
                    <Route
                      key={section.name}
                      path={'/' + section.name}
                      render={() => (
                        <Detail {...this.props} {...section} index={i} />
                      )}
                    />
                  ))}
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

const routes = sectionNames.map(name => '/' + name)

App.defaultProps = {
  routes
}

App.getInitialProps = async props => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const pkg = require('../../package.json')
  const sectionsSource = fs
    .readdirSync(path.join(__dirname, '..'))
    .filter(file => /\.md$/.test(file))
    .map(filename => {
      const name = path.basename(filename, '.md')
      const raw = fs.readFileSync(path.join(__dirname, '..', filename), 'utf8')
      const { content, data } = matter(raw)

      return Object.assign({}, data, {
        filename,
        name,
        raw,
        content
      })
    })

  const sections = sectionNames.map(key =>
    sectionsSource.find(s => s.name === key)
  )

  return {
    pkg,
    sections
  }
}

const toggle = key => state => ({ [key]: !state[key] })
const toggleMenu = toggle('menuOpen')
const closeMenu = state => ({ menuOpen: false })

export default App
