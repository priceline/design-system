# IconButton

The `IconButton` component is a transparent `<button>` element with an icon.

```.jsx
<IconButton
  title='Search button'
  onClick={() => {console.log('Search button clicked!')}}
  mr={2}
  icon={
    <Search
      color='primary'
      size={36}
    />
  }
/>
<IconButton
  disabled
  mr={2}
  icon={<Plus />}
/>
<IconButton
  variation='outline'
  icon={<Bookmark />}
/>
```

Be sure to include a `title` attribute for accessibility.

## Props

| Prop        | Type              | Description                                   |
| ----------- | ----------------- | --------------------------------------------- |
| `disabled`  | bool              | Disables the button and applies a light color |
| `icon`      | node              | Sets the button's svg icon                    |
| `onClick`   | function          | Sets a function to execute on click           |
| `title`     | string            | HTML `title` attribute                        |
| `variation` | `fill`, `outline` | The button variation                          |

### Related

- [CloseButton](/CloseButton)
- [Icon](/Icon)
