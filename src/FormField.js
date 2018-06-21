import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Box from './Box'
import Flex from './Flex'
import Select from './Select'
import Icon from './Icon'
import Label from './Label'
import Input from './Input'
import theme from './theme'

const Root = styled(Box)`
  & ${Box} {
    pointer-events: none;
  }
`

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

const getFieldStyles = showLabel => {
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

const noop = () => {}

const formElements = [Input, Select]

const isFormElement = element => formElements.includes(element)

class FormField extends React.Component {
  static defaultProps = {
    // for backwards-compatibility
    onChange: noop,
    theme: theme
  }

  // for backwards-compatibility
  handleChange = onChange => e => {
    this.props.onChange(e)
    if (typeof onChange !== 'function') return
    onChange(e)
  }

  hasValue = () => {
    const { children } = this.props
    return React.Children.toArray(children).reduce(
      (a, child) =>
        a || (child && isFormElement(child.type) && child.props.value),
      false
    )
  }

  render() {
    const { label, icon, children, onChange, ...props } = this.props

    let FieldChild
    let position = -1
    let LabelChild
    let BeforeIcon
    let AfterIcon
    let fieldId
    let fieldPlaceholder
    let iconAdjustment

    React.Children.forEach(children, (child, index) => {
      if (!child) {
        return
      }

      const { type, props } = child

      if (type === Label) {
        LabelChild = child
      }

      if (type === Input || type === Select) {
        position = index
        FieldChild = child
        fieldId = props.id
        // For aria-label when Label child is not rendered
        fieldPlaceholder = props.placeholder
      }

      if (type === Icon) {
        if (position < 0) {
          BeforeIcon = child
          iconAdjustment = props.size - 24
        } else {
          AfterIcon = child
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
    if (!FieldChild) {
      FieldChild = <Input />
    }

    const showLabel =
      LabelChild && LabelChild.props.hidden
        ? false
        : this.props.alwaysShowLabel || (LabelChild && this.hasValue())

    return (
      <Root>
        {showLabel &&
          React.cloneElement(LabelChild, {
            pl: BeforeIcon ? 40 : 2,
            mt: '6px',
            style: labelStyles,
            htmlFor: fieldId
          })}
        <Flex align="center" width={1} mt={0}>
          {BeforeIcon && (
            <Box
              mr={-4}
              ml={`${8 - iconAdjustment}px`}
              mt={showLabel ? '-12px' : '2px'}
            >
              {BeforeIcon}
            </Box>
          )}
          {React.cloneElement(FieldChild, {
            'aria-label':
              !showLabel && fieldPlaceholder ? fieldPlaceholder : null,
            mt: showLabel && -20,
            pl: BeforeIcon ? 40 : 2,
            pr: AfterIcon && 40,
            style: getFieldStyles(showLabel),
            width: 1,
            innerRef: elem => {
              this.fieldRef = elem
            },
            // for backwards compatibility
            onChange: this.handleChange(FieldChild.props.onChange),
            ...props
          })}
          {AfterIcon && (
            <Box ml={-4} mt={showLabel ? -12 : 2}>
              {AfterIcon}
            </Box>
          )}
        </Flex>
      </Root>
    )
  }
}

FormField.propTypes = {
  alwaysShowLabel: PropTypes.bool,
  children: function(props, propName, componentName) {
    const prop = props[propName]
    let count = 0
    let position = 0
    let labelCount = 0
    let firstIconPosition = -1
    let secondIconPosition = 999
    let iconCount = 0
    React.Children.forEach(prop, function(child, index) {
      if (child === null) return
      switch (child.type) {
        case Input:
          position = index
          count++
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

    if (!count) {
      return new Error(
        `No 'Input or Select' child found for '${componentName}'. Please update your component to use the compound version of this component and pass an Input or Select component as the child`
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
      (firstIconPosition > position || secondIconPosition < position)
    ) {
      return new Error(
        `If 2 'Icons' are provided, the 'Field' component must be positioned between them as children of '${componentName}'`
      )
    }
  }
}

export default FormField
