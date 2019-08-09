# pcln-modal

React modal component

```sh
npm i pcln-modal
```

```jsx
import Modal from 'pcln-modal'
```

## Modal Component

```jsx
import { Modal } from 'pcln-modal'

<Modal
  isOpen={true} //boolean for control this status of modal
  onClose={someFunc} //func function for handle close the modal while click on the overlay
  bg="white" //modal background color
  zIndex={5} //zIndex
  imgMode={false} //default false, will add padding to the modal, if true, then there will be no padding
  width={['100px', '200px']} //responsive width the modal
  header={<SomeHeaderComponent />} //Component for header, could import predefined ones too
  disableCloseButton={true} //there will be a floating close button, when enabledOverflow = true, it's there by default
  enableOverflow={false} //when enabled, the modal will extend over the screen based on content, otherwise it will follow height
  height={['100px', '200px']} //responsive height, when enableOverflow={true}, it's not in use
  verticalAlignment="middle" // Aligns dialog body vertically - options = ['middle', 'top', 'bottom']
  overlayAnimation={null} // Accepts a function which overwrites default animation
  dialogAnimation={null} // Accepts a function which overwrites default animation
>
  <SomeChildComponent />
</Modal>
```

## ScrollLock helper

This helper class will prevent background scroll when modal is open. **However, there can be only one instance of this helper is working in a page since it messes with body style**

```javascript
import { ScrollLock } from 'pcln-modal'

class SomeWrapper extends React.component {
  constructor(props) {
    super(props)
    this.scrollLock = new ScrollLock()
  }

  openModalFunc() {
    this.scrollLock.on()
    this.setState({
      modalOpen: true
    })
  }

  closeModalFunc() {
    this.scrollLock.off()
    this.setState({
      modalOpen: false
    })
  }
}
```

## Overwriting Animations

For its animations, this Modal currently uses `react-transition-group`. This means that the following hooks are exposed during the animation life cycle: [ `entering`, `entered`, `exiting`, `exited`]

We can then use these states to write custom animations, like so:

```javascript
const MY_ANIMATION = transitionState => `
  transform: scale(0.5);
  transition: transform .5s cubic-bezier(0.50, 0.00, 0.25, 1.00);
  ${transitionState === 'entering' ? `transform: scale(0.5);` : ''}
  ${transitionState === 'entered' ? `transform: scale(1);` : ''}
  ${transitionState === 'exiting' ? `transform: scale(0.5);` : ''}
  ${transitionState === 'exited' ? `transform: scale(0.5);` : ''}
`
```
