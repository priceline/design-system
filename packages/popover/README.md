# pcln-popover

Smart Popover component

```sh
npm i pcln-popover
```

```jsx
// TODO: triage explicit import path
import Popover from 'pcln-popover/dist/index.js'
```

```jsx
  <Popover
    renderContent={({handleClose}) => (
      <div>
        <p>Hello there!</p>
        <button onClick={handleClose}>Click on me to close popover!</button>
      </div>
    ))}
    placement='top'
    ariaLabel='Test Popover'
    overlayOpacity={0.3}
    width={350}
    bg='lightBlue'
    borderColor='borderGray'
    zIndex={-1}
    isOpen={false} // popover will always be open if true
    openOnMount={false} // popover will be open on mount, but can be closed
  >
    <Button>Popover</Button>
  </PopOver>
```
