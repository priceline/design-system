import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { Radio, Label, Button } from '../src'

const LabelText = styled.span`
  vertical-align: middle;
  margin-left: 8px;
`

class MockForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: 1,
      options: [0, 1, 2, 3],
      disabled: false
    }
  }

  updateSelection = event => {
    this.setState({
      selection: Number(event.target.value)
    })
  }

  toggleDisabled = () => {
    this.setState(prevState => ({
      disabled: !prevState.disabled
    }))
  }

  render() {
    const { disabled, selection, options } = this.state
    return (
      <div>
        <div onChange={this.updateSelection}>
          {options.map((item, idx) => (
            <Label fontSize="14px" key={idx}>
              <Radio
                checked={item === selection}
                name={'mySelection'}
                value={item}
                disabled={disabled}
              />
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

storiesOf('Radio', module)
  .add('3 states', () => (
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
  .add('Mock form', () => <MockForm />)
