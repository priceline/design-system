import React from 'react'
import { storiesOf } from '@storybook/react'
import Carousel from '../src'
import { Image } from 'pcln-design-system'

const images = [
  'https://via.placeholder.com/150/abcdef/111111?text=1',
  'https://via.placeholder.com/150/abcdef/111111?text=2',
  'https://via.placeholder.com/150/abcdef/111111?text=3',
  'https://via.placeholder.com/150/abcdef/111111?text=4',
  'https://via.placeholder.com/150/abcdef/111111?text=5',
  'https://via.placeholder.com/150/abcdef/111111?text=6',
  'https://via.placeholder.com/150/abcdef/111111?text=7',
  'https://via.placeholder.com/150/abcdef/111111?text=8',
  'https://via.placeholder.com/150/abcdef/111111?text=9',
  'https://via.placeholder.com/150/abcdef/111111?text=10',
  'https://via.placeholder.com/150/abcdef/111111?text=11',
  'https://via.placeholder.com/150/abcdef/111111?text=12',
  'https://via.placeholder.com/150/abcdef/111111?text=13',
  'https://via.placeholder.com/150/abcdef/111111?text=14',
  'https://via.placeholder.com/150/abcdef/111111?text=15',
  'https://via.placeholder.com/150/abcdef/111111?text=16',
  'https://via.placeholder.com/150/abcdef/111111?text=17'
]

const items = images.map((image, index) => <Image key={index} src={image} />)

const story = storiesOf('Carousel', module)
  .add('Swipe Only', () => {
    return <Carousel>{items}</Carousel>
  })

  .add('With Arrows', () => {
    return <Carousel shouldShowArrows>{items}</Carousel>
  })

  .add('No Props', () => {
    return <Carousel />
  })

export default story
