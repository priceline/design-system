import React from 'react'

import { addDecorator, addParameters, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import viewports from './viewports'

import { ThemeProvider, Box } from '../packages/core/src'

const themeProviderDecorator = (story) => (
  <ThemeProvider>
    <Box px={5}>{story()}</Box>
  </ThemeProvider>
)

addParameters({
  viewport: {
    ...viewports,
  },
})

addParameters({
  a11y: {
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {
      runOnly: {
        type: 'tag',
        values: [
          'wcag2a',
          'wcag2aa',
          'wcag21a',
          'wcag21aa',
          'section508',
          'best-practice',
          'experimental',
        ],
      },
    },
  },
})

addDecorator(withA11y)

addDecorator(themeProviderDecorator)

configure(require.context('../packages', true, /stories.js$/), module)
