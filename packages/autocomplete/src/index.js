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
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: ${props => props.height};
  overflow-y: auto;
`

MenuCard.defaultProps = {
  bg: 'white',
  height: '256px',
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
        {...getMenuProps({
          ...props,
          isOpen
        })}
        children={
          isOpen
            ? React.Children.toArray(children)
                .filter(el => match(el.props.item, inputValue))
                .map((el, index) => React.cloneElement(el, { index }))
            : false
        }
      />
    )}
  />
)

const ItemRoot = styled(Flex)`
  cursor: pointer;
  &[aria-selected='true'] {
    background-color: ${themeGet('colors.lightBlue')};
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
    children={({ item, getItemProps, highlightedIndex }) => (
      <ItemRoot
        {...getItemProps({
          item,
          px: 2,
          py: 1,
          'data-highlighted':
            highlightedIndex === props.index ? true : undefined,
          ...props
        })}
      />
    )}
  />
)

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
    const { children, style, ...props } = this.props

    return (
      <Downshift
        {...props}
        children={state => (
          <div style={{ position: 'relative', ...style }}>
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
