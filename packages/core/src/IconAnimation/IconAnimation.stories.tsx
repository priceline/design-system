import React from 'react'
import { IconAnimation } from '..'
import { Calendar } from 'pcln-icons'

export default {
  title: 'IconAnimation',
  component: IconAnimation,
}

export const Default = () => (
  <IconAnimation animation='default'>
    <Calendar />
  </IconAnimation>
)

export const WithFade = () => (
  <IconAnimation animation='fade'>
    <Calendar />
  </IconAnimation>
)

export const WithColorChange = () => (
  <IconAnimation animation='red'>
    <Calendar />
  </IconAnimation>
)

export const WithSpin = () => (
  <IconAnimation animation='spin'>
    <Calendar />
  </IconAnimation>
)

export const WithNoProp = () => (
  <IconAnimation>
    <Calendar color='green' />
  </IconAnimation>
)
