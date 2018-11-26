import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { darken } from 'polished'
import theme from './theme'

import Flex from './Flex'
import Icon from './Icon'
import Heading from './Heading'

const SwitchItem = styled(Flex)`
  background-color: ${props =>
    props.selected ? props.theme.colors.primary : 'white'};
  cursor: pointer;
  border-width: 1.5px;
  border-radius: ${props =>
    props.start
      ? '4px 0px 0px 4px'
      : props.end
      ? '0px 4px 4px 0px'
      : undefined};
  border-color: ${props => props.theme.colors.primary};
  border-style: solid;

  &:hover {
    border-color: ${props => darken(0.075, props.theme.colors.primary)};
    background-color: ${props =>
      props.selected ? darken(0.075, props.theme.colors.primary) : 'white'};
  }
`

export default class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.start || 0
    }
  }

  _switch = index => {
    if (this.state.selected === index) return
    this.setState({ selected: index })
    if (this.props.onChange) this.props.onChange(index)
  }

  render() {
    const { icons, labels } = this.props
    const { selected } = this.state

    return (
      <Flex>
        <SwitchItem
          p={3}
          onClick={() => this._switch(0)}
          selected={this.state.selected === 0}
          start={true}
        >
          {icons ? (
            <Icon
              name={icons[0]}
              color={this.state.selected === 0 ? 'white' : theme.colors.primary}
            />
          ) : (
            <Heading
              fontSize={2}
              color={this.state.selected === 0 ? 'white' : theme.colors.primary}
            >
              {labels[0]}
            </Heading>
          )}
        </SwitchItem>
        <SwitchItem
          p={3}
          onClick={() => this._switch(1)}
          selected={this.state.selected === 1}
          end={true}
        >
          {icons ? (
            <Icon
              name={icons[1]}
              color={this.state.selected === 1 ? 'white' : theme.colors.primary}
            />
          ) : (
            <Heading
              fontSize={2}
              color={this.state.selected === 1 ? 'white' : theme.colors.primary}
            >
              {labels[1]}
            </Heading>
          )}
        </SwitchItem>
      </Flex>
    )
  }
}

Switch.displayName = 'Switch'

Switch.defaultProps = {
  labels: ['Yes', 'No'],
  onChange: index =>
    console.log(
      'No onChange function provided to Switch as a prop. Index:',
      index
    )
}

Switch.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  icons: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.function,
  start: PropTypes.number
}
