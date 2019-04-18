# pcln-popver

Smart Popover component

```sh
npm i pcln-popover
```

```jsx
import Slider from 'pcln-popover'
```

```jsx
<PopOver
  renderContent={({handleClose}) => (
    <div>
      <p>Hello there!</p>
      <button onClick={handleClose}>Click on me to close popover!</button>
    </div>
  ))}
  placement='top'
  ariaLabel={'Test PopOver'}
  idx={1}
>
  <Button>Popover</Button>
</PopOver>
```

## Props
