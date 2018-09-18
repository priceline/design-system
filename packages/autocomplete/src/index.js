import React from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import styled from 'styled-components'
import {
  Flex,
  Card,
  Label as PclnLabel,
  Input as PclnInput
} from 'pcln-design-system'
import { themeGet } from 'styled-system'

export const AutocompleteContext = React.createContext()

export class Autocomplete extends React.Component {
  static Label = Label
  static Input = Input
  static Menu = Menu
  static Item = Item

  static propTypes = {
    match: PropTypes.func
  }

  static defaultProps = {
    match: () => true
  }

  render() {
    const { children, ...props } = this.props

    return (
      <Downshift
        {...props}
        children={state => (
          <div>
            <AutocompleteContext.Provider
              value={{ ...props, ...state }}
              children={children}
            />
          </div>
        )}
      />
    )
  }
}

export const withAutocomplete = (Component, mapProps) =>
  React.forwardRef((props, ref) => (
    <AutocompleteContext.Consumer
      children={state => (
        <Component ref={ref} {...mapProps({ ...props, ...state })} {...props} />
      )}
    />
  ))

export const Label = withAutocomplete(PclnLabel, ({ getLabelProps }) =>
  getLabelProps()
)
Label.isLabel = true

export const Input = withAutocomplete(PclnInput, ({ getInputProps }) =>
  getInputProps()
)
Input.isField = true

export const Menu = ({ children, ...props }) => (
  <AutocompleteContext.Consumer
    children={({ match, isOpen, getMenuProps, inputValue }) =>
      isOpen ? (
        <Card
          {...getMenuProps()}
          {...props}
          borderWidth={0}
          boxShadowSize="lg"
          mt={1}
          children={React.Children.toArray(children)
            .filter(el => match(el.props.item, inputValue))
            .map((el, index) => React.cloneElement(el, { index }))}
        />
      ) : (
        false
      )
    }
  />
)

const ItemRoot = styled(Flex)`
  &[data-selected] {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.blue')};
    & svg {
      color: ${themeGet('colors.white')};
    }
  }
  &[data-highlighted] {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.blue')};
    & svg {
      color: ${themeGet('colors.white')};
    }
  }
`

ItemRoot.defaultProps = {
  alignItems: 'center'
}

export const Item = withAutocomplete(
  ItemRoot,
  ({
    item,
    index,
    getItemProps,
    selectedItem,
    highlightedIndex,
    children,
    ...props
  }) => ({
    px: 2,
    py: 1,
    ...getItemProps({ item, index, ...props }),
    children,
    'data-selected': selectedItem === item ? true : undefined,
    'data-highlighted': highlightedIndex === index ? true : undefined
  })
)
