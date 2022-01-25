import React from 'react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { withPerformance } from 'storybook-addon-performance'

import viewports from './viewports'

import { ThemeProvider, Box, createTheme } from 'pcln-design-system'
const baseTheme = createTheme()

export const decorators = [
  (Story) => <ThemeProvider>{Story()}</ThemeProvider>,
  (Story) => <Box p={4}>{Story()}</Box>,
  withPerformance,
]

export const parameters = {
  a11y: {
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},

    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'section508', 'best-practice', 'experimental'],
      },
    },
  },

  backgrounds: {
    default: 'background.lightest',
    values: [
      {
        name: 'background.lightest',
        value: baseTheme.palette.background.lightest,
      },
      {
        name: 'background.light',
        value: baseTheme.palette.background.light,
      },
      {
        name: 'background.base',
        value: baseTheme.palette.background.base,
      },
      {
        name: 'background.dark',
        value: baseTheme.palette.background.dark,
      },
      {
        name: 'background.darkest',
        value: baseTheme.palette.background.darkest,
      },
    ],
  },

  // this hides a bunch of noise from `addon-actions` from the rendered JSX
  jsx: { functionValue: (fn: () => unknown) => fn.name || 'func' },

  viewport: {
    viewports: {
      ...viewports,
      ...INITIAL_VIEWPORTS,
    },
  },

  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
}
