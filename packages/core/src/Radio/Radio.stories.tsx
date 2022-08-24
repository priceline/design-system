import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import { Radio, Label, Button } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`

// @ts-ignore
class MockForm extends React.Component {
  private setState
  private state

  public constructor(props) {
    super(props)
    this.state = {
      selection: 1,
      options: [0, 1, 2, 3],
      disabled: false,
    }
  }

  private updateSelection = (event) => {
    this.setState({
      selection: Number(event.target.value),
    })
  }

  private toggleDisabled = () => {
    this.setState((prevState) => ({
      disabled: !prevState.disabled,
    }))
  }

  public render() {
    const { disabled, selection, options } = this.state
    return (
      <div>
        <div onChange={this.updateSelection}>
          {options.map((item, idx) => (
            <Label fontSize='14px' key={idx}>
              <Radio checked={item === selection} name={'mySelection'} value={item} disabled={disabled} />
              <LabelText>{item}</LabelText>
            </Label>
          ))}
        </div>
        <Button mt={3} onClick={this.toggleDisabled}>
          Toggle disabled state
        </Button>
      </div>
    )
  }
}

export default {
  title: 'Radio',
  component: Radio,
}

export const _3States = () => (
  <div onChange={action('changed')}>
    <Label fontSize='14px'>
      <Radio checked />
      <LabelText>selected</LabelText>
    </Label>
    <Label fontSize='14px'>
      <Radio />
      <LabelText>not selected</LabelText>
    </Label>
    <Label fontSize='14px'>
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </Label>
  </div>
)

_3States.story = {
  name: '3 states',
}

// @ts-ignore
export const _MockForm = () => <MockForm />

_MockForm.story = {
  name: 'Mock form',
}

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <Label fontSize='14px'>
          <Radio checked />
          <LabelText>selected</LabelText>
        </Label>
        <Button onClick={onClick} mt={4}>
          Click to focus radio via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}
