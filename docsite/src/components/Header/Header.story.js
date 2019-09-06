import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { defaultParameters, documentationConfig } from '../../../.storybook/constants'
import { Header } from './index'

const props = {
  title: 'My Cool Component',
}

const story = storiesOf('Components|Header', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters)

story.add('Header Component', () => <Header {...props} />, documentationConfig)
