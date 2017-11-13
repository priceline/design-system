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

const Btn = Button.withComponent('a')

const Landing = props => (
  <Box p={[2, 4]}>
    <BackgroundImage
      height="512px"
      image="http://source.unsplash.com/featured/1600x900/?travel"
    />
    <Container maxWidth={768}>
      <PageTitle>Priceline One</PageTitle>
      <Text fontSize={3} mb={2}>
        {props.pkg.description}
      </Text>
      <Text fontSize={0}>v{props.pkg && props.pkg.version}</Text>
      <Divider my={4} />
      <Flex wrap mx={-2} align="center">
        <Pre m={2}>npm install pcln-design-system</Pre>
        <Btn
          m={2}
          href="https://github.com/pricelinelabs/design-system-sketch/releases/latest"
          children="Sketch Download"
        />
      </Flex>
    </Container>
  </Box>
)

export default Landing
