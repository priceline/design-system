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

const image = `https://source.unsplash.com/bITjK6W2Alw/3200x1800`

const Landing = props => {
  const gettingStarted = props.content.find(c => c.name === 'GettingStarted')
    .content
  return (
    <Box>
      <BackgroundImage
        height="50vh"
        image={image}
        style={{
          backgroundPosition: '50% 100%',
          backgroundAttachment: 'fixed'
        }}
      />
      <Box p={[2, 4]}>
        <Container maxWidth={768}>
          <PageTitle>Priceline One</PageTitle>
          <Text fontSize={3} mb={2}>
            {props.pkg.description}
          </Text>
          <Text fontSize={1}>v{props.pkg && props.pkg.version}</Text>
          <Divider my={4} />
          <Flex wrap mx={-2} align="center">
            <Pre m={2}>npm install pcln-design-system</Pre>
            <Button.a
              m={2}
              href="https://github.com/pricelinelabs/design-system-sketch/releases/latest"
              children="Sketch Download"
              target="_blank"
              style={{ lineHeight: '40px', fontWeight: '500' }}
            />
          </Flex>
          <Box py={5}>
            <Markdown children={gettingStarted} />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Landing
