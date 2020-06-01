import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import { Layout, Pagination } from 'mdx-docs'
import { ThemeProvider, Box } from 'pcln-design-system'
import components from '../src/components'
import docsTheme from '../src/theme'
import navigation from '../src/navigation'
import SideNav from '../src/SideNav'

const basepath = process.env.NODE_ENV === 'production' ? '/design-system' : ''

const routes = navigation.reduce(
  (a, item) => [...a, ...(item.links || [item])],
  []
)

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return { page }
  }

  render() {
    const { Component, page } = this.props

    return (
      <ThemeProvider>
        <Head>
          <title>Priceline One Design System</title>
        </Head>
        <Layout
          {...this.props}
          components={components}
          theme={docsTheme}
          basepath={basepath}
          routes={routes}
          sidebar={
            <Box py={4}>
              <SideNav />
            </Box>
          }
          footer={<Pagination />}
        >
          <Component {...page} />
        </Layout>
      </ThemeProvider>
    )
  }
}
