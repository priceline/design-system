import React from 'react'
import { Heading } from './Heading'

const description =
  'A type of the <Text> component' +
  ' using HTML h1-h6 element for setting section headings,' +
  ' supporting all <Text> props'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export const HeadingComponent = () => <Heading m={3}>Heading component</Heading>

export const UsingDotNotationWithH1H6 = () => (
  <section>
    <Heading.h1>Heading h1</Heading.h1>
    <Heading.h2>Heading h2</Heading.h2>
    <Heading.h3>Heading h3</Heading.h3>
    <Heading.h4>Heading h4</Heading.h4>
    <Heading.h5>Heading h5</Heading.h5>
    <Heading.h6>Heading h6</Heading.h6>
  </section>
)

export const WithTextShadows = () => (
  <section>
    <Heading.h1 enableTextShadow>Heading h1</Heading.h1>
    <Heading.h2 enableTextShadow>Heading h2</Heading.h2>
    <Heading.h3 enableTextShadow>Heading h3</Heading.h3>
    <Heading.h4 enableTextShadow>Heading h4</Heading.h4>
    <Heading.h5 enableTextShadow>Heading h5</Heading.h5>
    <Heading.h6 enableTextShadow>Heading h6</Heading.h6>
  </section>
)

export const UsingTextProps = () => (
  <section>
    <Heading textAlign='left' bold fontSize={6} color='green'>
      Heading Left
    </Heading>
    <Heading textAlign='center' medium fontSize={5} color='blue'>
      Heading Center
    </Heading>
    <Heading textAlign='right' regular fontSize={4} color='orange'>
      Heading Right
    </Heading>
  </section>
)

export const ColorSchemes = () => (
  <section>
    <Heading.h1 colorScheme='primary'>Heading Left</Heading.h1>
    <Heading.h2 colorScheme='secondaryLight'>Heading Left</Heading.h2>
    <Heading.h3 colorScheme='cautionLight'>Heading Left</Heading.h3>
    <Heading.h4 colorScheme='heading'>Heading Left</Heading.h4>
    <Heading.h4 colorScheme='headingBase'>Heading Left</Heading.h4>
    <Heading.h5 colorScheme='headingLight'>Heading Left</Heading.h5>
    <Heading.h6 colorScheme='headingOnPrimaryLight'>Heading Left</Heading.h6>
  </section>
)
