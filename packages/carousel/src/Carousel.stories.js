import { Flex } from 'pcln-design-system'
import { Carousel } from './Carousel'

export default {
  title: 'pcln-carousel / Carousel',
  component: Carousel,
}

export const Basic = () => {
  return (
    <Carousel visibleSlides={2}>
      <Flex>Slide 1</Flex>
      <Flex>Slide 2</Flex>
      <Flex>Slide 3</Flex>
    </Carousel>
  )
}
