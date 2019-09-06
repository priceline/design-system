# IconButton

The `IconButton` component is a `<button>` element with icon.

```.jsx
<IconButton
  name='flame'
  size={24}
  color='orange'
  title='Set on fire'
  onClick={() => {}}
/>
```

Be sure to include a `title` attribute for accessibility.

## Props

| Prop      | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| `name`    | string   | Icon component `name` prop          |
| `legacy`  | boolean  | Icon component `legacy` prop        |
| `color`   | string   | Icon color                          |
| `title`   | string   | HTML `title` attribute              |
| `onClick` | function | Sets a function to execute on click |

### Related

- [Icon](/Icon)
- [CloseButton](/CloseButton)
