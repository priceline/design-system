import { themeGet } from '@styled-system/theme-get'
import Downshift from 'downshift'
import { Card, Flex, Input as PclnInput, Label as PclnLabel, getPaletteColor } from 'pcln-design-system'
import React from 'react'
import styled from 'styled-components'

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

const StyledMenuCard = styled(Card)`
  background-color: ${getPaletteColor('background.lightest')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: ${(props) => props.height};
  overflow-y: auto;
`

const MenuCard = ({
  height = '256px',
  borderWidth = 0,
  boxShadowSize = 'lg',
  mt = 1,
  borderRadius = 'xl',
  ...props
}) => (
  <StyledMenuCard
    height={height}
    borderWidth={borderWidth}
    boxShadowSize={boxShadowSize}
    mt={mt}
    borderRadius={borderRadius}
    {...props}
  />
)

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

const StyledItemRoot = styled(Flex)`
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

const ItemRoot = ({ alignItems = 'center', ...props }) => (
  <StyledItemRoot alignItems={alignItems} {...props} />
)

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

/**
 * A typeahead input component built on Downshift for accessible autocomplete behavior.
 *
 * Compound component with `Autocomplete.Label`, `Autocomplete.Input`, `Autocomplete.Menu`,
 * and `Autocomplete.Item` subcomponents. The `match` prop filters items as the user types.
 * The dropdown menu overlays content below it and highlights items on hover/keyboard navigation.
 */
export const Autocomplete = ({ children, style, match = () => true, ...props }) => {
  return (
    <Downshift
      {...props}
      children={(state) => (
        <div style={{ position: 'relative', ...style }}>
          <AutocompleteContext.Provider value={{ ...props, match, ...state }} children={children} />
        </div>
      )}
    />
  )
}

Autocomplete.Label = Label
Autocomplete.Input = Input
Autocomplete.Menu = Menu
Autocomplete.Item = Item
