import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Absolute, Card, Flag, Icon, Image, Relative, Text } from '../src'

const TallCard = styled(Card)`
  height: 420px;
`

const SmallAbsolute = styled(Absolute)`
  height: 100px;
`

const MediumAbsolute = styled(Absolute)`
  height: 200px;
`

const LargeAbsolute = styled(Absolute)`
  height: 300px;
`

const ExtraLargeAbsolute = styled(Absolute)`
  height: 400px;
`

storiesOf('Absolute', module)
  .add('Over an image', () => (
    <Relative width={1 / 2}>
      <Absolute top={8} left={0}>
        <Flag>Hello Flag</Flag>
      </Absolute>
      <Image src="https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg" />
    </Relative>
  ))
  .add('Positioning an icon', () => (
    <Card m={2}>
      <Relative p={4}>
        <Text mt={2} textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          nisl dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec quis nisi ac est elementum consequat a eu risus. Phasellus id
          facilisis nulla. Aliquam vel semper enim, id lobortis dolor. Morbi sed
          leo at turpis rutrum posuere. Nullam tincidunt ex vitae mi sagittis,
          vel sollicitudin lectus viverra. Curabitur sit amet fringilla velit.
        </Text>
        <Absolute top="10px" right="10px">
          <Icon name="close" color="Gray" size={24} />
        </Absolute>
      </Relative>
    </Card>
  ))
  .add('Multiple absolutely positioned boxes', () => (
    <TallCard pb={3}>
      <Relative p={3}>
        <ExtraLargeAbsolute
          pl={2}
          top={0}
          right={0}
          zIndex={1}
          width={400}
          bg="#085397"
        >
          <Text.span fontSize={1} bold>
            z-index 1
          </Text.span>
        </ExtraLargeAbsolute>
        <LargeAbsolute
          pl={2}
          top={0}
          right={0}
          zIndex={2}
          width={300}
          bg="#f2633a"
        >
          <Text.span fontSize={1} bold>
            z-index 2
          </Text.span>
        </LargeAbsolute>
        <MediumAbsolute
          pl={2}
          top={0}
          right={0}
          zIndex={3}
          width={200}
          bg="#0a84c1"
        >
          <Text.span fontSize={1} bold>
            z-index 3
          </Text.span>
        </MediumAbsolute>
        <SmallAbsolute
          pl={2}
          top={0}
          right={0}
          zIndex="4"
          width={100}
          bg="#3c910e"
        >
          <Text.span fontSize={1} bold>
            z-index 4
          </Text.span>
        </SmallAbsolute>
      </Relative>
    </TallCard>
  ))
