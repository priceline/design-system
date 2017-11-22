# `<Dropdown />`, `<DropdownButton />`, `<DropdownMenu />` and `<DropdownItem />`

Use the `<Dropdown />`, `<DropdownButton />`, `<DropdownMenu />` and `<DropdownItem />` components to compose a Dropdown button with a menu and item, with ARIA support.

```jsx
  <Dropdown>
    <DropdownButton open>
      # Items
    </DropdownButton>
    <DropdownMenu activeDescendantIndex={1}>
      <DropdownItem itemIdenx={1} isSelected>
        Item 1
      </DropdownItem>
      <DropdownItem itemIdenx={2}>
        Item 2
      </DropdownItem>
      <DropdownItem itemIdenx={3}>
        Item 3
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
```

`<DropdownButton />`

Prop | Type | Description
---|---|---
open | boolean | Support "aria-expanded" attribute

`<DropdownMenu />`

Prop | Type | Description
---|---|---
activeDescendantIndex | number | Support "aria-activedescendant" attribute

`<DropdownItem />`

Prop | Type | Description
---|---|---
itemIdenx | number | Support "id" attribute with correct item index

###### Built-In ARIA Support

`<DropdownButton />` - aria-haspopup, aria-controls, aria-expanded
`<DropdownMenu />` - role="menu", aria-labelledby, aria-activedescendant, tabindex
 `<DropdownItem />` - role="menuitem", tabindex
