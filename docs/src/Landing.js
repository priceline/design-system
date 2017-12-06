import React from 'react'
import {
  Flex,
  Box,
  Container,
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

Button.a = Button.withComponent('a')

const Landing = props => {
  const gettingStarted = props.content.find(c => c.name === 'GettingStarted')
    .content
  return (
    <Box>
      <Box
        px={[2, 4]}
        height="50vh"
        style={{
          background: 'linear-gradient(45deg, #07f 40%, #0af 100%)'
        }}
      >
        <Flex
          align="center"
          style={{
            height: '50vh',
            textAlign: 'left'
          }}
        >
          <Container
            maxWidth={960}
            style={{
              width: '100%'
            }}
          >
            <PageTitle mt={0} color="white">
              Priceline One
            </PageTitle>
            <Text fontSize={4} mb={2}>
              {props.pkg.description}
            </Text>
            <Text fontSize={2}>v{props.pkg && props.pkg.version}</Text>
          </Container>
        </Flex>
      </Box>
      <Box p={[2, 4]}>
        <Container maxWidth={960}>
          <Flex wrap mx={-2} my={4} align="center">
            <Pre m={2}>npm install pcln-design-system</Pre>
            <Button.a
              m={2}
              href="https://github.com/pricelinelabs/design-system-sketch/releases/latest"
              children="Sketch Library Download"
              target="_blank"
              style={{ lineHeight: '40px' }}
            />
          </Flex>
          <Divider />
          <Box py={2}>
            <Markdown children={gettingStarted} />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Landing
