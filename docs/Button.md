
# Button

Use the `<Button />` component to render a primitive button.

```.jsx
<Button>
  Hello
</Button>
```

Prop | Type | Description
---|---|---
radius | string | custom button radius in pixel
size | string | sets button size to small, medium or large
fullWidth | boolean | sets button width to fullWidth

## Sizes

```.jsx
<div>
  <Button size='large' mr={2}>
    Large
  </Button>
  <Button size='medium' mr={2}>
    Medium
  </Button>
  <Button size='small'>
    Small
  </Button>
</div>
```

## Colors

```.jsx
<GreenButton>
  GreenButton
</GreenButton>
```

```.jsx
<RedButton>
  RedButton
</RedButton>
```

## OutlineButton

```.jsx
<OutlineButton>
  OutlineButton
</OutlineButton>
```
