# PlaceholderImage

The `PlaceholderImage` component is a styled `<image>` element with `max-width: 100%`.

```.jsx
<PlaceHolderImage
  height='100'
  width='100'
  blur
/>
```

```.jsx
<Box width='200'>
<PlaceholderImage
  height='250'
  width='300'
  chooseSrc='0'
/>
</Box>
```

## Props

| Prop         | Type    | Description                                |
| ------------ | ------- | ------------------------------------------ |
| `ariaHidden` | boolean | default `true`                             |
| `blur`       | boolean | Returns a blurred random image             |
| `chooseSrc`  | string  | accepts a string from `0` to `4`           |
| `display`    | string  | Sets the image `display` property          |
| `height`     | string  | Sets the image `height` property in pixels |
| `width`      | string  | Sets the image `width` property in pixels  |

## Image Sources

| String `0` to `4` | Src                                              | Description              |
| ----------------- | ------------------------------------------------ | ------------------------ |
| `0`               | `http://placeimg.com/${width}/${height}/any`     | Random photo             |
| `1`               | `http://placekitten.com/${width}/${height}`      | Random cat photo         |
| `2`               | `https://picsum.photos/${width}/${height}`       | Random photo             |
| `3`               | `https://source.unsplash.com/${width}x${height}` | Random photo             |
| `4`               | `https://www.fillmurray.com/${width}/${height}`  | Random Bill Murray photo |
