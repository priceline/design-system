import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import Label from './Label'
import Input from './Input'
import theme from './theme'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const labelStyles = {
  animation: fadeIn + ' 0.3s'
}

const getInputStyles = showLabel => {
  return showLabel
    ? {
        paddingTop: '20px',
        paddingBottom: '8px',
        transition: 'padding-top 0.1s, padding-bottom 0.1s'
      }
    : {
        paddingTop: '14px',
        paddingBottom: '14px',
        transition: 'padding-top 0.1s, padding-bottom 0.1s'
      }
}

class InputField extends React.Component {
  constructor(props) {
    super(props)

    let hasInitialValue

    React.Children.forEach(props.children, child => {
      if (child && child.type === Input) {
        hasInitialValue = !!child.props.value
      }
    })

    this.state = {
      showLabel: hasInitialValue
    }
  }

  onInputChange = event => {
    this.setState({
      showLabel: event.target.value
    })

    this.props.onChange(event)
  }

  render() {
    const { label, icon, children, onChange, ...props } = this.props

    let InputChild
    let inputPosition = -1
    let LabelChild
    let BeforeIcon
    let AfterIcon
    let inputId
    let inputPlaceholder
    let iconAdjustment

    React.Children.forEach(children, (child, index) => {
      if (child) {
        if (child.type === Label) {
          LabelChild = child
        }
        if (child.type === Input) {
          inputPosition = index
          InputChild = child
          inputId = child.props.id
          // For aria-label when Label child is not rendered
          inputPlaceholder = child.props.placeholder
        }
        if (child.type === Icon) {
          if (inputPosition < 0) {
            BeforeIcon = child
            iconAdjustment = child.props.size - Icon.defaultProps.size
          } else {
            AfterIcon = child
          }
        }
      }
    })

    // Handle old version on component's api
    if (icon) {
      AfterIcon = <Icon name={icon} />
    }
    if (label) {
      LabelChild = <Label>{label}</Label>
    }
    if (!InputChild) {
      InputChild = <Input />
    }

    const showLabel =
      this.props.alwaysShowLabel || (LabelChild && this.state.showLabel)

    return (
      <Box>
        {showLabel &&
          React.cloneElement(LabelChild, {
            pl: BeforeIcon ? 40 : 2,
            mt: '5px',
            style: labelStyles,
            htmlFor: inputId
          })}
        <Flex align="center" width={1} mt={0}>
          {BeforeIcon && (
            <Box mr={-4} ml={8 - iconAdjustment} mt={showLabel ? -12 : 2}>
              {BeforeIcon}
            </Box>
          )}
          {React.cloneElement(InputChild, {
            'aria-label':
              !showLabel && inputPlaceholder ? inputPlaceholder : null,
            mt: showLabel && -20,
            pl: BeforeIcon ? 40 : 2,
            pr: AfterIcon && 40,
            style: getInputStyles(showLabel),
            onChange: this.onInputChange,
            width: 1,
            innerRef: elem => {
              this.inputRef = elem
            },
            ...props
          })}
          {AfterIcon && (
            <Box ml={-4} mt={showLabel ? -12 : 2}>
              {AfterIcon}
            </Box>
          )}
        </Flex>
      </Box>
    )
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  alwaysShowLabel: PropTypes.bool,
  children: function(props, propName, componentName) {
    const prop = props[propName]
    let inputCount = 0
    let inputPosition = 0
    let labelCount = 0
    let firstIconPosition = -1
    let secondIconPosition = 999
    let iconCount = 0
    React.Children.forEach(prop, function(child, index) {
      if (child === null) return
      switch (child.type) {
        case Input:
          inputPosition = index
          inputCount++
          break
        case Icon:
          if (iconCount === 0) {
            firstIconPosition = index
          } else {
            secondIconPosition = index
          }
          iconCount++
          break
        case Label:
          labelCount++
          break
        default:
          return new Error(
            `'${child.type}' is not a valid child for '${componentName}'`
          )
      }
    })

    if (!inputCount) {
      return new Error(
        `No 'Input' child found for '${componentName}'. Please update your component to use the compound version of this component and pass an 'Input' component as the child`
      )
    }
    if (labelCount > 1) {
      return new Error(
        `Exactly 0 or 1 'Label' children should be supplied to '${componentName}'`
      )
    }
    if (iconCount > 2) {
      return new Error(
        `Up to 2 'Icon' children are supported by '${componentName}'`
      )
    }
    if (
      iconCount === 2 &&
      (firstIconPosition > inputPosition || secondIconPosition < inputPosition)
    ) {
      return new Error(
        `If 2 'Icons' are provided, the 'Input' component must be positioned between them as children of '${componentName}'`
      )
    }
  }
}

export default InputField
