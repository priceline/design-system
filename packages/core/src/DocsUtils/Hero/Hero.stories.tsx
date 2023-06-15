import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { Hero, HeroProps } from '.'

const exampleProps: HeroProps = {
  img: 'https://source.unsplash.com/random/?superhero/',
  name: 'Hero',
  children: `Doloremque nisi excepturi. Dicta ut esse quas. Voluptatum ab veniam suscipit libero assumenda voluptate a mollitia. Ut ab consequuntur veritatis illum ullam minima pariatur sint quas. Necessitatibus doloribus natus voluptas.`,
}

type HeroStory = StoryObj<typeof Hero>
export const Usage: HeroStory = {
  render: (args) => <Hero {...exampleProps} {...args} />,
}

const meta: Meta<typeof Hero> = {
  title: 'Docs Utils/Hero',
  component: Hero,
}

export default meta
