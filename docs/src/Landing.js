import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Card,
  BackgroundImage,
  Heading,
  Text,
  Button,
  Divider,
  Icon
} from 'pcln-design-system'
import PageTitle from './PageTitle'
import Pre from './Pre'
import Markdown from './Markdown'
import Container from './Container'

// This will require a fix in the Button component
Button.a = Button.withComponent('a').extend`
  line-height: 1.5;
  height: auto !important;
`

Button.a.defaultProps = {
  py: 9.5
}

const Banner = styled(Flex)`
  min-height: 50vh;
  background-image: linear-gradient(45deg, #07f, #0df);

  /* Note: this should be removed after mergining #177 */
  text-align: left;
`

const Landing = props => {
  const gettingStarted = props.content.find(c => c.name === 'GettingStarted')
    .content
  return (
    <Box>
      <Banner align="center" justify="flex-start">
        <Container>
          <PageTitle mt={0} color="white">
            Priceline One
          </PageTitle>
          <Text fontSize={4} mb={2}>
            {props.pkg.description}
          </Text>
          <Text fontSize={2}>v{props.pkg && props.pkg.version}</Text>
        </Container>
      </Banner>
      <Container>
        <Flex wrap mx={-2} py={4} align="center">
          <Pre m={2}>npm install pcln-design-system</Pre>
          <Button.a
            m={2}
            href="https://github.com/pricelinelabs/design-system-sketch/releases/latest"
            children="Sketch Library Download"
          />
        </Flex>
        <Divider />
        <Box pb={5}>
          <Markdown children={gettingStarted} />
        </Box>
      </Container>
    </Box>
  )
}

export default Landing
