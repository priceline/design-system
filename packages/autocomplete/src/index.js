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
    const { children, render, ...props } = this.props

    return (
      <Downshift
        {...props}
        children={state => (
          <div>
            <AutocompleteContext.Provider
              value={{ ...props, ...state }}
              children={typeof render === 'function' ? render(state) : children}
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
        <Component ref={ref} {...props} {...mapProps({ ...props, ...state })} />
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

const MenuCard = styled(Card)`
  max-height: 256px;
  overflow-y: auto;
  opacity: ${props => (props.isOpen ? 1 : 0)};
`

MenuCard.defaultProps = {
  borderWidth: 0,
  boxShadowSize: 'lg',
  mt: 1
}

const MenuRoot = React.forwardRef((props, ref) => (
  <MenuCard {...props} innerRef={ref} />
))

export const Menu = ({ children, ...props }) => (
  <AutocompleteContext.Consumer
    children={({ match, isOpen, getMenuProps, inputValue }) => (
      <MenuRoot
        {...getMenuProps({ ...props, isOpen })}
        children={React.Children.toArray(children)
          .filter(el => match(el.props.item, inputValue))
          .map((el, index) => React.cloneElement(el, { index }))}
      />
    )}
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

export const Item = props => (
  <AutocompleteContext.Consumer
    children={({ item, getItemProps, selectedItem, highlightedIndex }) => (
      <ItemRoot
        {...getItemProps({
          item,
          px: 2,
          py: 1,
          'data-selected': selectedItem === item ? true : undefined,
          'data-highlighted':
            highlightedIndex === props.index ? true : undefined,
          ...props
        })}
      />
    )}
  />
)
