# Dropdown Components

Use the `<Dropdown />`, `<DropdownButton />`, `<DropdownMenu />` and `<DropdownItem />` components to compose a dropdown button with a menu and item, with ARIA support.

```jsx
  <Dropdown>
    <DropdownButton open>
      # Items
    </DropdownButton>
    <DropdownMenu activeDescendantIndex={1}>
      <DropdownItem itemIndex={1} isSelected>
        Item 1
      </DropdownItem>
      <DropdownItem itemIndex={2}>
        Item 2
      </DropdownItem>
      <DropdownItem itemIndex={3}>
        Item 3
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
```

## `<Dropdown />`

Prop | Type | Description
---|---|---
flexDirection | string | Set `flex-direction` CSS rule

* Extends `Flex` with all `Flex` prop support.

## `<DropdownButton />`

Prop | Type | Description
---|---|---
id | string | Set `id` attribute
ariaHaspopup | string | Set `aria-haspopup` attribute
ariaControls | string | Set `aria-controls` attribute
ariaExpanded | string | Set `aria-expanded` attribute; only "true" or "false" are valid values

* Extends `OutlineButton` with original `OutlineButton` prop support.

## `<DropdownMenu />`

Prop | Type | Description
---|---|---
id | string | Set `id` attribute
role | string | Set `role` attribute
tabIndex | number | Set `tabindex` attribute
ariaLabelledBy | string | Set `aria-labelledby` attribute
ariaActiveDescendantIndex | string | Set `aria-activedescendant` attribute
overflow | string | Set `overflow` & `-webkit-overflow-scrolling` CSS rules
height | string | Set `height` css rule

* Extends `Card` with `ul` tag, with original `Card` prop support.

## `<DropdownItem />`

Prop | Type | Description
---|---|---
itemIndex | number | Support `id` attribute with correct item index
role | string | Set `role` attribute
tabIndex | number | Set `tabindex` attribute
listStyle | string | Set `list-style` CSS rule
isSelected | boolean | Support hover styles

### Built-In ARIA Support

* `<DropdownButton />` - e.g. `id="dropdownButton"`, `type="button"` `aria-haspopup="true"`, `aria-controls="dropdownMenu"`, `aria-expanded="true"` or `aria-expanded="false"`

* `<DropdownMenu />` - e.g. `id="dropdownMenu"`, `role="menu"`, `tabindex="0"`, `aria-labelledby="dropdownButton"`, `aria-activedescendant="mi1"`

* `<DropdownItem />` - e.g. `id="mi1"`, `role="menuitem"`, `tabindex="-1"`
