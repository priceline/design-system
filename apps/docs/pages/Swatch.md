# Swatch

Use the `Swatch` component to render a group of colors. Clicking one of the color will execute `onClick` callback, that can be passed as a prop.

```.jsx
<Swatch colors={['#D50032']} />
```

```.jsx
<Swatch colors={['#D50032', '#1B7742', '#0033A0']} />
```

## Props

| Prop          | Type                     | Description                         |
| ------------- | ------------------------ | ----------------------------------- |
| `colors`      | array                    | Sets swatch colors                  |
| `onClick`     | function                 | Callback function that accepts selected color as parameter |