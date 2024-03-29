import { Close as CloseIcon } from 'pcln-icons'
import React from 'react'
import { Absolute } from '../Absolute/Absolute'
import { Card } from '../Card/Card'
import { Flag } from '../Flag/Flag'
import { Image } from '../Image/Image'
import { Relative } from '../Relative/Relative'
import { Text } from '../Text/Text'

export default {
  title: 'Relative',
  component: Relative,
}

export const AroundAnImageAndAnAbsolutelyPositionedFlag = () => (
  <Relative width={1 / 2}>
    <Absolute top={8} left={0}>
      <Flag>Hello Flag</Flag>
    </Absolute>
    <Image src='https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg' />
  </Relative>
)

export const AroundTextAndAnAbsolutelyPositionedIcon = () => (
  <Card m={2}>
    <Relative p={4}>
      <Text mt={2} textAlign='justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et nisl dolor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec quis nisi ac est elementum consequat a eu risus. Phasellus id
        facilisis nulla. Aliquam vel semper enim, id lobortis dolor. Morbi sed leo at turpis rutrum posuere.
        Nullam tincidunt ex vitae mi sagittis, vel sollicitudin lectus viverra. Curabitur sit amet fringilla
        velit.
      </Text>
      <Absolute top='10px' right='10px'>
        <CloseIcon color='text.base' size={24} />
      </Absolute>
    </Relative>
  </Card>
)
