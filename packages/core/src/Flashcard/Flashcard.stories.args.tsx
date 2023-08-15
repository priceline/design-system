import type { IFlashcardProps } from '..'
import { borderRadii, Grid, paletteColors, shadows } from '..'

import type { ArgTypes } from '@storybook/react'
import React from 'react'
import { flashCardRotations } from './Flashcard.styled'

export const argTypes: Partial<ArgTypes<IFlashcardProps>> = {
  backside: { table: { disable: true } },
  backsideBg: { control: { type: 'select' }, options: paletteColors },
  bg: { control: { type: 'select' }, options: paletteColors },
  borderRadius: { control: { type: 'select' }, options: Object.keys(borderRadii) },
  boxShadowSize: { control: { type: 'select' }, options: Object.keys(shadows) },
  children: { table: { disable: true } },
  duration: { control: { type: 'number' } },
  open: { control: { type: 'boolean' } },
  perspective: { control: { type: 'number' } },
  rotation: { control: { type: 'select' }, options: flashCardRotations },
}

export const defaultArgs: Partial<IFlashcardProps> = {
  backside: <Grid p={5}>Back</Grid>,
  backsideBg: 'secondary.light',
  bg: 'primary.light',
  borderRadius: 'xl',
  children: <Grid p={5}>Front</Grid>,
  duration: 0.5,
  perspective: 200,
  rotation: 'y',
}
