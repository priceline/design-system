import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {Heading } from '../src'
import { fontSizes, colors } from '../src/theme'

const description = 'A type of the <Text> component' +
  ' using HTML h1-h6 element for setting section headings,' +
  ' extending all <Text> properties'

storiesOf('Heading', module)
  .add('Heading component', withInfo({
    inline: true,
    text: description
  })(() => (
    <Heading m={3}>Heading component</Heading>
  )))
  .add('Using dot-notation with h1-h6', () => (
    <section>
      <Heading.h1>Heading h1</Heading.h1>
      <Heading.h2>Heading h2</Heading.h2>
      <Heading.h3>Heading h3</Heading.h3>
      <Heading.h4>Heading h4</Heading.h4>
      <Heading.h5>Heading h5</Heading.h5>
      <Heading.h6>Heading h6</Heading.h6>
    </section>
  ))
  .add('Using <Text> properties', () => (
    <section>
      <Heading align='left' fontSize={fontSizes[6]} color={colors['green']}>
        Heading Left
      </Heading>
      <Heading align='center' fontSize={fontSizes[5]} color={colors['blue']}>
        Heading Center
      </Heading>
      <Heading align='right' fontSize={fontSizes[4]} color={colors['orange']}>
        Heading Right
      </Heading>
    </section>
  ))
