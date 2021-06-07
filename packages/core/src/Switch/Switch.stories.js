import React from 'react'
import { Label } from '../Label'
import Switch from './Switch'

export default {
  title: 'Switch',
  component: Switch,
}

export const Basic = () => (
  <Label>
    Switch <Switch id='switch' mt={2} />
  </Label>
)
