import { action } from '@storybook/addon-actions'
import { Calendar } from 'pcln-icons'
import React from 'react'
import { Button } from '../Button/Button'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { IconButton } from './IconButton'

export default {
  title: 'IconButton',
  component: IconButton,
}

export const Default = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    aria-label='Click to choose date'
    icon={<Calendar title='Choose date' />}
  />
)

export const WithColor = () => (
  <IconButton
    onClick={action('Clicked IconButton')}
    icon={<Calendar title='Choose date' color='primary' />}
  />
)

export const WithSize = () => (
  <IconButton onClick={action('Clicked IconButton')} icon={<Calendar title='Choose date' size={64} />} />
)

export const WithDisabled = () => (
  <IconButton onClick={action('Clicked IconButton')} icon={<Calendar title='Choose date' />} disabled />
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' size={64} />}
        />
        <br />
        <Button onClick={onClick} mt={4}>
          Click to focus button via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
