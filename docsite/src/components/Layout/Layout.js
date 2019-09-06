import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'

import { Flex, Box, ThemeProvider, theme } from 'pcln-design-system'

import MarkdownComponents from '../mdx'

import { SideNav } from '../SideNav'

import Logo from '../Logo'

import { Header } from '../Header'
import { Container } from '../Container'
import { ResetStyle } from '../Reset'

const ColumnWrapper = styled(Flex)``
const LeftColumn = styled(Box)``
const MainColumn = styled(Box)`
  flex-grow: 1;
`

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={MarkdownComponents}>
      <StaticQuery
        query={siteTitleQuery}
        render={data => (
          <>
            <ResetStyle />

            <Helmet
              title={data.site.siteMetadata.title}
              meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
            >
              <html lang="en" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:500,700" />
            </Helmet>

            <Header title={data.site.siteMetadata.title} />
            <Container>
              <ColumnWrapper>
                <LeftColumn mr={5}>
                  <Logo />
                  <SideNav />
                </LeftColumn>
                <MainColumn>{children}</MainColumn>
              </ColumnWrapper>
            </Container>
          </>
        )}
      />
    </MDXProvider>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
