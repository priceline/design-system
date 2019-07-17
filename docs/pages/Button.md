# Button

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

```.jsx
<Button>
  Hello
</Button>
```

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

## Props

| Prop      | Type                                                      | Description                                |
| --------- | --------------------------------------------------------- | ------------------------------------------ |
| `radius`  | string                                                    | Custom button radius in pixel              |
| `size`    | string                                                    | Sets button size to small, medium or large |
| `width`   | number, string, or array                                  | Sets button width                          |
| `variant` | `primary`, `secondary`, `outline`, `disabled`, `negative` | The button variant                         |

## Variants

### primary

```.jsx
<Button>Primary Button</Button>
```

### secondary

```.jsx
<Button variant="secondary">Secondary Button</Button>
```

### outline

```.jsx
<Button variant="outline">Outline Button</Button>
```

### disabled

```.jsx
<Button variant="disabled">Disabled Button</Button>
```

### negative

```.jsx
<Button variant="negative">Negative Button</Button>
```
