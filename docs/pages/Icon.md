# Icon

Use the `Icon` component for SVG icons.

```.jsx
<Icon
  name='Flame'
  color='orange'
/>
```

## Accessibility for Icons

```.jsx
<Icon
  name='Chat'
  color='orange'
  title='Airplane Icon'
  titleId='unique-airplane-title-id'
  desc='Airplane Icon description'
  descId='unique-airplane-desc-id'
/>
```

`aria-hidden="true"` and `focusable="false"` are set by default to icons.
When a `title` prop is passed, `aria-hidden` is set to false.

In order to support older browsers, please pass in a `titleId`

To add a descripton, please pass in `desc` and `descId` .
`<desc id="{unique-desc-id}">{description}</desc>` is generated when `desc` and `descId` props are passed

## Props

| Prop      | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `name`    | string | Icon key name                   |
| `size`    | number | Width and height in pixels      |
| `color`   | string | A color key from `theme.colors` |
| `title`   | string | Title for to the icon           |
| `titleId` | string | Unique ID for the `<title>`     |
| `desc`    | string | Description for the icon        |
| `descId`  | string | Unique ID for the `<desc>`      |

For a full list of available icons, see [Iconography](/iconography).
