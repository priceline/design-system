# pcln-popver

Smart Popover component

```sh
npm i pcln-popover
```

```jsx
import Popover from 'pcln-popover'
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
  ariaLabel='Test PopOver'
  overlayOpacity={0.3}
  width={350}
  bg='lightBlue'
  borderColor='borderGray'
  idx={1}
>
  <Button>Popover</Button>
</PopOver>
```
