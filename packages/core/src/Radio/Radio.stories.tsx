import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import { Radio, Label, Button } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { getPaletteColor } from '../utils'

const bold = (props) => (props.bold ? { fontWeight: props.theme.fontWeights.bold } : null)
const medium = (props) => (props.medium ? { fontWeight: props.theme.fontWeights.medium } : null)

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
  ${bold}
  ${medium}
`
const RadioLabelDisabled = styled(Label)`
  cursor: not-allowed;
  color: ${getPaletteColor('border.base')};
`
const RadioLabel = styled(Label)`
  cursor: pointer;
  color: ${getPaletteColor('text.light')};

  &:hover {
    div[data-name='unchecked'] {
      color: ${getPaletteColor('primary.base')};
    }
    div[data-name='checked'] {
      > svg {
        color: ${getPaletteColor('primary.dark')};
      }
    }
  }
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
              <Radio checked={item === selection} name='mySelection' value={item} disabled={disabled} />
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
    <RadioLabel fontSize='14px'>
      <Radio checked />
      <LabelText>selected</LabelText>
    </RadioLabel>
    <RadioLabel fontSize='14px'>
      <Radio />
      <LabelText>not selected</LabelText>
    </RadioLabel>
    <RadioLabelDisabled fontSize='14px'>
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </RadioLabelDisabled>
  </div>
)

// @ts-ignore
export const _MockForm = () => <MockForm />

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <RadioLabel fontSize='14px'>
          <Radio checked />
          <LabelText>selected</LabelText>
        </RadioLabel>
        <Button onClick={onClick} mt={4}>
          Click to focus radio via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

export const FontWeight = () => (
  <div onChange={action('changed')}>
    <RadioLabel fontSize='14px'>
      <Radio checked />
      <LabelText bold>font weight - bold</LabelText>
    </RadioLabel>
    <RadioLabel fontSize='14px'>
      <Radio checked />
      <LabelText medium>font weight - medium</LabelText>
    </RadioLabel>
  </div>
)
