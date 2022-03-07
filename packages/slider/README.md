# pcln-slider

React range slider component

```sh
npm i pcln-slider
```

```jsx
import Slider from 'pcln-slider'
```

```jsx
<Slider min={0} max={0} value={value} onChange={handleChange} />
```

_Note: `<Slider>` relies on values from `theme`, so it must be a descendent of `<ThemeProvider>` in order to work properly. Otherwise, you might experience errors like this:_

```
Uncaught TypeError: Cannot read property '3' of undefined
```

## Props

Uses the same props as [rc-slider][].

[rc-slider]: https://github.com/react-component/slider

