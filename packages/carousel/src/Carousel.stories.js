import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Card, Image, Text } from 'pcln-design-system'
import { Carousel } from './Carousel'

const SLIDE_COUNT = 10

export default {
  title: 'pcln-carousel / Carousel',
  component: Carousel,
  argTypes: {
    visibleSlides: {
      control: { type: 'number' },
      min: 1,
      max: SLIDE_COUNT,
    },
    naturalSlideHeight: {
      control: { type: 'number' },
      min: 1,
    },
    showDots: {
      control: { type: 'boolean' },
    },
    showForwardBackBtns: {
      control: { type: 'boolean' },
    },
    children: {
      table: { disable: true },
    },
    infinite: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'radio' },
      defaultValue: 'horizontal',
    },
    isIntrinsicHeight: {
      defaultValue: true,
    },
  },
}

const BasicTemplate = (args) => (
  <Carousel {...args}>
    {Array.from(Array(SLIDE_COUNT), (_, idx) => (
      <Card height='300px' color='primary.light'>
        <Flex border='primary' key={idx}>
          Slide {idx}
        </Flex>
      </Card>
    ))}
    child - item - item - item - item
  </Carousel>
)

export const Basic = BasicTemplate.bind({})
Basic.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
}

const VerticalTemplate = (args) => (
  <Flex width='300px' height='500px'>
    <Carousel {...args}>
      {Array.from(Array(SLIDE_COUNT), (_, idx) => (
        <Flex justifyContent='center' alignItems='center'>
          <Card color='primary.light' border='primary' key={idx} height='200px' width='200px' p={3}>
            Slide {idx}
          </Card>
        </Flex>
      ))}
    </Carousel>
  </Flex>
)

export const Vertical = VerticalTemplate.bind({})
Vertical.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  orientation: 'vertical',
  isIntrinsicHeight: false,
  naturalSlideHeight: 100,
}

const LayoutTemplate = (args) => (
  <Carousel {...args}>
    {Array.from(Array(6), (_, idx) => (
      <Card color='primary.light' height='100px' key={idx}>
        Slide {idx}
      </Card>
    ))}
  </Carousel>
)

export const Layout = LayoutTemplate.bind({})
Layout.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  layout: '25-50-25',
}

const TextSlide = ({ text, bold }) => {
  return (
    <Card height='100%' mx={2}>
      <Flex justifyContent='center' alignItems='center' height='100%'>
        <Text bold={bold}>{text}</Text>
      </Flex>
    </Card>
  )
}
TextSlide.propTypes = {
  bold: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

const RichContentTemplate = (args) => (
  <Carousel {...args}>
    <Card>
      <Text textAlign='center' bold mt={2}>
        Welcome to Priceline!
      </Text>
      <Flex justifyContent='center'>
        <Image src='https://cdn2.thecatapi.com/images/dnn.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/70f.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/a18.png' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/fSJGVIdLBK.jpg' p={3} height='150px' />
      </Flex>
    </Card>
    <TextSlide text='Best' />
    <TextSlide text='travel' />
    <TextSlide text='deal' />
    <TextSlide text='makers' />
    <TextSlide text='in' />
    <TextSlide text='the' />
    <TextSlide text='world!' />
  </Carousel>
)

export const RichContent = RichContentTemplate.bind({})
RichContent.args = {
  showDots: false,
  showForwardBackBtns: true,
  layout: '75-25',
}
