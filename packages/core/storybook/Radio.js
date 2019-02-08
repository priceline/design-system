import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Radio, Label } from '../src'

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`

storiesOf('Radio', module).add('3 states', () => (
  <div onChange={action('changed')}>
    <Label fontSize="14px">
      <Radio checked />
      <LabelText>selected</LabelText>
    </Label>
    <Label fontSize="14px">
      <Radio />
      <LabelText>not selected</LabelText>
    </Label>
    <Label fontSize="14px">
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </Label>
  </div>
))
