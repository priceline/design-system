# ScrollLock

Use `ScrollLock` to prevent the body of the page from scrolling when `<Modal>` is open.

Note: There can be only one instance of this helper since it modifies CSS classes on `<body>`.

```
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
