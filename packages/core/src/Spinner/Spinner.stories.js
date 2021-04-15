import React from 'react'
import { Hotels } from 'pcln-icons'
import Spinner from './Spinner'

export default {
  title: 'Spinner',
  component: Spinner,
}

export const Default = () => <Spinner />

export const WithIcon = () => <Spinner icon={<Hotels />} />

export const Small = () => <Spinner size='small' icon={<Hotels />} />

export const Large = () => <Spinner size='large' icon={<Hotels />} />

export const OverrideWidthAndHeight = () => (
  <Spinner width='240px' height='240px' icon={<Hotels size={70} />} />
)

export const OverrideIconColor = () => (
  <Spinner color='secondary' icon={<Hotels color='error' />} />
)

export const Responsive = () => (
  <Spinner icon={<Hotels />} size={['small', null, 'medium', null, 'large']} />
)
