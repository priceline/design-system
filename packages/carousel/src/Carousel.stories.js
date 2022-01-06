import React from 'react'
import { Flex } from 'pcln-design-system'
import { Carousel } from './Carousel'

const SLIDE_COUNT = 20

export default {
  title: 'pcln-carousel / Carousel',
  component: Carousel,
  argTypes: {
    visibleSlides: {
      control: { type: 'number' },
      options: {
        min: 1,
        max: SLIDE_COUNT,
      },
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
  },
}

const Template = (args) => (
  <Carousel {...args}>
    {Array.from(Array(SLIDE_COUNT), (_, idx) => (
      <Flex>Slide {idx}</Flex>
    ))}
  </Carousel>
)

export const Basic = Template.bind({})
Basic.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
}
