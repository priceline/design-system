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
flexDirection | string | Set `flex-direction` css rule

* Extends `Flex` with all `Flex` prop support.

## `<DropdownButton />`

Prop | Type | Description
---|---|---
open | boolean | Support `aria-expanded` attribute with either `true` or `false` value

* Extends `OutlineButton` with original `OutlineButton` prop support.

## `<DropdownMenu />`

Prop | Type | Description
---|---|---
height | number or string | Set `height` css rule with `px`
activeDescendantIndex | number | Support `aria-activedescendant` attribute with value convention as `mi{activeDescendantIndex}`

* Extends `Card` with `ul` tag, with original `Card` prop support.

## `<DropdownItem />`

Prop | Type | Description
---|---|---
itemIndex | number | Support `id` attribute with correct item index
isSelected | boolean | Support hover styles

### Built-In ARIA Support

* `<DropdownButton />` - e.g. `id="dropdownButton"`, `type="button"` `aria-haspopup="true"`, `aria-controls="dropdownMenu"`, `aria-expanded="true"` or `aria-expanded="false"`

* `<DropdownMenu />` - e.g. `id="dropdownMenu"`, `role="menu"`, `tabindex="0"`, `aria-labelledby="dropdownButton"`, `aria-activedescendant="mi1"`

* `<DropdownItem />` - e.g. `id="mi1"`, `role="menuitem"`, `tabindex="-1"`
