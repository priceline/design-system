import React from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import { Radio, Label, Button } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

const bold = (props) => (props.bold ? { fontWeight: props.theme.fontWeights.bold } : null)
const medium = (props) => (props.medium ? { fontWeight: props.theme.fontWeights.medium } : null)

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
  ${bold}
  ${medium}
`
const StyledLabelDisabled = styled(Label)`
  cursor: not-allowed;
  color: ${(props) => props.theme.colors.borderGray};
`
const StyledLabel = styled(Label)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};
  div[data-name='checked'] ~ span {
    color: ${(props) => props.theme.colors.blue};
  }

  &:hover {
    div[data-name='unchecked'] {
      color: ${(props) => props.theme.colors.blue};
      ~ span {
        color: ${(props) => props.theme.colors.blue};
      }
    }
    div[data-name='checked'] {
      ~ span {
        color: ${(props) => props.theme.colors.darkBlue};
      }
      > svg {
        color: ${(props) => props.theme.colors.darkBlue};
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
    <StyledLabel fontSize='14px'>
      <Radio checked />
      <LabelText>selected</LabelText>
    </StyledLabel>
    <StyledLabel fontSize='14px'>
      <Radio />
      <LabelText>not selected</LabelText>
    </StyledLabel>
    <StyledLabelDisabled fontSize='14px'>
      <Radio disabled />
      <LabelText>disabled</LabelText>
    </StyledLabelDisabled>
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
        <StyledLabel fontSize='14px'>
          <Radio checked />
          <LabelText>selected</LabelText>
        </StyledLabel>
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
    <StyledLabel fontSize='14px'>
      <Radio checked />
      <LabelText bold>font weight - bold</LabelText>
    </StyledLabel>
    <StyledLabel fontSize='14px'>
      <Radio checked />
      <LabelText medium>font weight - medium</LabelText>
    </StyledLabel>
  </div>
)
