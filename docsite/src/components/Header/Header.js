import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, Heading } from 'pcln-design-system'

import { Container } from '../Container'

export const HeaderInner = styled(Flex)`
  flex-flow: nowrap row;
`

const HeaderLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.white};

  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const Header = ({ title }) => (
  <Box bg="blue">
    <Container>
      <HeaderInner>
        <HeaderLink to="/">
          <Heading.h1 color="white" m={3}>
            {title}
          </Heading.h1>
        </HeaderLink>
      </HeaderInner>
    </Container>
  </Box>
)

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
}

Header.defaultProps = {
  title: null,
}

export { Header }
