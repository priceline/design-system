import React from 'react'
import App, { Container } from 'next/app'
import { Layout, SideNav, Pagination } from 'mdx-docs'
import { ThemeProvider } from 'pcln-design-system'
import * as components from 'pcln-design-system'

const routes = [
  { name: 'Overview', path: '/' },
  // { name: 'Color' },
  // { name: 'Typography' },
  // { name: 'Iconography' },
  // components
  { name: 'Absolute', path: '/Absolute' },
  { name: 'BackgroundImage', path: '/BackgroundImage' },
  { name: 'Badge', path: '/Badge' },
  { name: 'Banner', path: '/Banner' },
  { name: 'BlockLink', path: '/BlockLink' },
  { name: 'Box', path: '/Box' },
  { name: 'Button', path: '/Button' },
  { name: 'Card', path: '/Card' },
  { name: 'Checkbox', path: '/Checkbox' },
  { name: 'Container', path: '/Container' },
  { name: 'Divider', path: '/Divider' },
  { name: 'Flag', path: '/Flag' },
  { name: 'Flex', path: '/Flex' },
  { name: 'GettingStarted', path: '/GettingStarted' },
  { name: 'Heading', path: '/Heading' },
  { name: 'Hide', path: '/Hide' },
  { name: 'Hug', path: '/Hug' },
  { name: 'Icon', path: '/Icon' },
  { name: 'IconButton', path: '/IconButton' },
  { name: 'Image', path: '/Image' },
  { name: 'Input', path: '/Input' },
  { name: 'InputField', path: '/InputField' },
  { name: 'InputGroup', path: '/InputGroup' },
  { name: 'Label', path: '/Label' },
  { name: 'Link', path: '/Link' },
  { name: 'Motion', path: '/Motion' },
  { name: 'README', path: '/README' },
  { name: 'Radio', path: '/Radio' },
  { name: 'RatingBadge', path: '/RatingBadge' },
  { name: 'Relative', path: '/Relative' },
  { name: 'Select', path: '/Select' },
  { name: 'Slider', path: '/Slider' },
  { name: 'Stamp', path: '/Stamp' },
  { name: 'Text', path: '/Text' },
  { name: 'Theme', path: '/Theme' },
  { name: 'ToggleBadge', path: '/ToggleBadge' },
  { name: 'Tooltip', path: '/Tooltip' },
  { name: 'Truncate', path: '/Truncate' },
  // guides
  { name: 'Layout', path: '/Layout' },
  { name: 'Contributing', path: '/Contributing' }
]

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render() {
    const { Component, page } = this.props

    return (
      <Container>
        <ThemeProvider>
          <Layout
            {...this.props}
            components={components}
            routes={routes}
            sidebar={<SideNav />}
            footer={<Pagination />}
          >
            <Component {...page} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}
