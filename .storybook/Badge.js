import React from 'react'
import { storiesOf } from '@storybook/react'
import { Badge } from '../src'

storiesOf('Badge', module)
  .add('default', () => (
    <Badge>
      DEFAULT
    </Badge>
  ))
  .add('information', () => (
    <Badge type='information'>
      INFORMATION
    </Badge>
  ))
  .add('information-light', () => (
    <Badge type='information-light'>
      INFORMATION
    </Badge>
  ))
  .add('success', () => (
    <Badge type='success'>
      SUCCESS
    </Badge>
  ))
  .add('success-light', () => (
    <Badge type='success-light'>
      SUCCESS
    </Badge>
  ))
  .add('warning', () => (
    <Badge type='warning'>
      WARNING
    </Badge>
  ))
  .add('warning-light', () => (
    <Badge type='warning-light'>
      WARNING
    </Badge>
  ))
  .add('attention', () => (
    <Badge type='attention'>
      ATTENTION
    </Badge>
  ))
  .add('attention-light', () => (
    <Badge type='attention-light'>
      ATTENTION 
    </Badge>
  ))