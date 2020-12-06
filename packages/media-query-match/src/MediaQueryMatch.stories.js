import React from 'react'
import { withKnobs, optionsKnob } from '@storybook/addon-knobs'
import { Heading, Text } from 'pcln-design-system'
import { Container, Fixture } from '../storybookHelpers'

import MediaQueryMatch from '.'

const breakpointNames = {
  null: null,
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
}
const removeFalsy = (obj) => {
  const newObj = {}

  Object.keys(obj).forEach((prop) => {
    if (obj[prop]) {
      newObj[prop] = obj[prop]
    }
  })

  return newObj
}

export default {
  title: 'MediaQueryMatch',
  component: MediaQueryMatch,
  decorators: [withKnobs],
}

export const AllSizes = () => (
  <Container>
    <MediaQueryMatch minWidth='xs'>
      <Fixture bg='primary'>minWidth = &apos;xs&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='sm'>
      <Fixture bg='primary'>minWidth = &apos;sm&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='md'>
      <Fixture bg='primary'>minWidth = &apos;md&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='lg'>
      <Fixture bg='primary'>minWidth = &apos;lg&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='xl'>
      <Fixture bg='primary'>minWidth = &apos;xl&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='xxl'>
      <Fixture bg='primary'>minWidth = &apos;xxl&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='xs' maxWidth='sm'>
      <Fixture bg='alert'>minWidth = &apos;xs&apos;, maxWidth = &apos;sm&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='sm' maxWidth='md'>
      <Fixture bg='alert'>minWidth = &apos;sm&apos;, maxWidth = &apos;md&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='md' maxWidth='lg'>
      <Fixture bg='alert'>minWidth = &apos;md&apos;, maxWidth = &apos;lg&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='lg' maxWidth='xl'>
      <Fixture bg='alert'>minWidth = &apos;lg&apos;, maxWidth = &apos;xl&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch minWidth='xl' maxWidth='xxl'>
      <Fixture bg='alert'>minWidth = &apos;xl&apos;, maxWidth = &apos;xxl&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='xs'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;xs&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='sm'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;sm&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='md'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;md&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='lg'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;lg&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='xl'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;xl&apos;</Fixture>
    </MediaQueryMatch>

    <MediaQueryMatch maxWidth='xxl'>
      <Fixture bg='promoPrimary'>maxWidth = &apos;xxl&apos;</Fixture>
    </MediaQueryMatch>
  </Container>
)

export const TryIt = () => {
  const minWidth = optionsKnob('Minimum Width', breakpointNames, 'xs', {
    display: 'inline-radio',
  })
  const maxWidth = optionsKnob('Maximum Width', breakpointNames, 'xxl', {
    display: 'inline-radio',
  })

  const props = removeFalsy({ minWidth, maxWidth })

  return (
    <Container py={4} bg={'background.lightest'}>
      <Fixture>
        <Heading.h3>Try It!</Heading.h3>
        <Heading.h4>
          Use the Knobs panel below to change the props and use the breakpoints menu above to try your props
          on different viewports.
        </Heading.h4>
        <p>An primary colored box will appear below when matching:</p>
        <ul>
          {minWidth && <li>Selected minWidth = {minWidth}</li>}
          {maxWidth && <li>Selected maxWidth = {maxWidth}</li>}
        </ul>
      </Fixture>

      <MediaQueryMatch {...props}>
        <Fixture bg='primary'>
          <code>
            <Text>&lt;MediaQueryMatch</Text>
            {minWidth && <Text>&nbsp;&nbsp;minWidth=&apos;{minWidth}&apos;</Text>}
            {maxWidth && <Text>&nbsp;&nbsp;maxWidth=&apos;{maxWidth}&apos;</Text>}
            <Text>&gt;</Text>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;content</Text>
            <Text>&lt;MediaQueryMatch&gt;</Text>
          </code>
        </Fixture>
      </MediaQueryMatch>
    </Container>
  )
}
