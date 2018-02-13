
# Popover

Positioned layout component for creating popovers or dropdowns that render fullscreen on narrow viewport widths.

```jsx
<Popover
  open={props.open}
  onDismiss={e => props.closePopover()}>
  <Button
    aria-haspopup='true'
    onClick={e => props.openPopover()}>
    Popover trigger
  </Button>
  {props.open && (
    <Popover.Body>
      This is the body
    </Popover.Body>
  )}
</Popover>
```

On narrow viewports, the root Popover component will take up the full width and height of the screen
and sets `display: flex` with `flex-direction: column`.
The Popover.Body component uses `flex: 1 1 auto` to fill the remaining amount of space after the trigger element(s)
and uses `overflow: auto` for scrolling.


Both the Popover and Popover.Body components are extensions of the Box component
and accept the same margin, padding, and width props.

Prop | Type | Description
---|---|---
open | boolean (required) | changes positioning styles for when popover is open
onDismiss | function (required) | callback for clicks outside of the Popover element
top | string | CSS value for the `top` property – useful for compensating for fixed positioned headers

