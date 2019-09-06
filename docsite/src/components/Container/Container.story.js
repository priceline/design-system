import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { defaultParameters, documentationConfig } from '../../../.storybook/constants'
import { Container } from './index'

const story = storiesOf('Components|Container', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters)

story.add('Container Component', () => <Container isDebug />, documentationConfig)
