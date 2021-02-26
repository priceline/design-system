# Popover

Use `Modal` to create an a11y-friendly popover dialog with configurable positioning.

## Usage

```.jsx
<Popover
  renderContent={() => <Text p={4}>CONTENT HERE</Text>}
  placement='top'
  ariaLabel='Demo Popover'
  idx={1}
  width={370}
  overlayOpacity={0.3}
  trapFocus={true}
>
  <Button>Popover</Button>
</Popover>
```

## Props

| Prop             | Type           | Description                                                                     |
| ---------------- | -------------- | ------------------------------------------------------------------------------- |
| `idx`            | string, number | Set `z-index` of popover dialog                                                 |
| `renderContent`  | node           | Children to render in the popover                                               |
| `ariaLabel`      | string         | Apply an `aria-label` to the content of the popover dialog                      |
| `overlayOpacity` | string         | Opacity of the overlay rendered behind the popover dialog                       |
| `placement`      | string         | Where to position the popover relative to its trigger. Can be one of the values |
| `trapFocus`      | boolean        | Should the popover trap focus inside its content when open                      |
| `width`          | number         | Width of the popover dialog, pixels                                             |
| `isOpen`         | boolean        | Render the popover dialog                                                       |
| `openOnMount`    | boolean        | Open the popover dialog when the trigger mounts                                 |
| `children`       | node           | Render a component that opens the popover dialog on click                       |
| `onOpen`         | function       | Callback executed when the popover opens                                        |
| `onClose`        | function       | Callback executed when the popover closes                                       |
| `hideOverlay`    | boolean        | Do not render the semi-opaque overlay behind the popover                        |

### Placement values

Popover supports the same placement values as the underlying [Popper](https://popper.js.org/docs/v2/constructors/) library.

```typescript
type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'
```
