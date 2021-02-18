import React from 'react'
import { ProgressBar } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

const basicProps = [
  { color: 'warning' },
  { color: 'secondary' },
  { color: 'secondary' },
  { color: 'primary' },
]

const shortProps = [
  { color: 'secondary' },
  { color: 'secondary' },
  { color: 'secondary' },
  { color: 'secondary' },
]

const thickProps = [
  { color: 'primary' },
  { color: 'primary' },
  { color: 'primary' },
  { color: 'secondary' },
]

export const basicProgressBar = () => (
  <ProgressBar steps={basicProps} stepIndex={1}></ProgressBar>
)

export const shortProgressBar = () => (
  <ProgressBar steps={shortProps} stepIndex={4} stepWidth='100px'></ProgressBar>
)

export const thickProgressBar = () => (
  <ProgressBar steps={thickProps} stepIndex={3} stepHeight='10px'></ProgressBar>
)

basicProgressBar.story = {
  name: 'Basic',
}

shortProgressBar.story = {
  name: 'Short',
}

thickProgressBar.story = {
  name: 'Thick',
}
