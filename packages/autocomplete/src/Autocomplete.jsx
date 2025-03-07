import React from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import {
  Flex,
  Card,
  Label as PclnLabel,
  Input as PclnInput,
  getPaletteColor,
  deprecatedColorValue,
} from 'pcln-design-system'
import { themeGet } from '@styled-system/theme-get'

export const AutocompleteContext = React.createContext()

export const withAutocomplete = (Component, mapProps) =>
  // eslint-disable-next-line react/display-name
  React.forwardRef((props, ref) => (
    <AutocompleteContext.Consumer
      // eslint-disable-next-line react/no-children-prop
      children={(state) => <Component ref={ref} {...props} {...mapProps({ ...props, ...state })} />}
    />
  ))

export const Label = withAutocomplete(PclnLabel, ({ getLabelProps }) => getLabelProps())
Label.isLabel = true

export const Input = withAutocomplete(PclnInput, ({ getInputProps }) => getInputProps())
Input.isField = true

const MenuCard = styled(Card).attrs(
  ({ height = '256px', borderWidth = 0, boxShadowSize = 'lg', mt = 1, borderRadius = 'xl', ...props }) => ({
    height,
    borderWidth,
    boxShadowSize,
    mt,
    borderRadius,
    ...props,
  })
)`
  background-color: ${getPaletteColor('background.lightest')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: ${(props) => props.height};
  overflow-y: auto;
`
MenuCard.propTypes = {
  bg: deprecatedColorValue(),
}

const MenuRoot = React.forwardRef((props, ref) => <MenuCard {...props} innerRef={ref} />)
MenuRoot.displayName = 'Autocomplete_MenuRoot'

export const Menu = ({ children, ...props }) => (
  <AutocompleteContext.Consumer
    // eslint-disable-next-line react/no-children-prop
    children={({ match, isOpen, getMenuProps, inputValue }) => (
      <MenuRoot
        {...getMenuProps({
          ...props,
          isOpen,
        })}
        // eslint-disable-next-line react/no-children-prop
        children={
          isOpen
            ? React.Children.toArray(children)
                .filter((el) => match(el.props.item, inputValue))
                .map((el, index) => React.cloneElement(el, { index }))
            : false
        }
      />
    )}
  />
)

const ItemRoot = styled(Flex).attrs(({ alignItems = 'center', ...props }) => ({
  alignItems,
  ...props,
}))`
  cursor: pointer;
  &[aria-selected='true'] {
    background-color: ${getPaletteColor('primary.light')};
  }
  &[data-highlighted] {
    color: ${themeGet('colors.white')};
    background-color: ${getPaletteColor('primary.base')};
    & svg {
      color: ${getPaletteColor('background.lightest')};
    }
  }
`
export const Item = (props) => (
  <AutocompleteContext.Consumer
    children={({ item, getItemProps, highlightedIndex }) => (
      <ItemRoot
        {...getItemProps({
          item,
          px: 2,
          py: 1,
          'data-highlighted': highlightedIndex === props.index ? true : undefined,
          ...props,
        })}
      />
    )}
  />
)

export const Autocomplete = ({ children, match = () => true, style, ...props }) => {
  return (
    <Downshift
      {...props}
      children={(state) => (
        <div style={{ position: 'relative', ...style }}>
          <AutocompleteContext.Provider value={{ match, ...props, ...state }} children={children} />
        </div>
      )}
    />
  )
}

Autocomplete.Label = Label
Autocomplete.Input = Input
Autocomplete.Menu = Menu
Autocomplete.Item = Item
