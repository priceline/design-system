
# Button

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

```.jsx
<Button>
  Hello
</Button>
```

Prop | Type | Description
---|---|---
radius | string | custom button radius in pixel
size | string | sets button size to small, medium or large
width | number string or array | sets button width

### Sizes

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

### Colors

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

### OutlineButton

```.jsx
<OutlineButton>
  OutlineButton
</OutlineButton>
```
