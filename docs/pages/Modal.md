# Modal

Use `Modal` to create an a11y-friendly modal dialog.

_Note: ModalDemo is a simple class for demonstration that maintains an `isOpen` variable in its state._

```.jsx
<ModalDemo>
    <Modal
      header={<Heading.h1>Modal Title</Heading.h1>}
      width={["200px", "300px"]}
      enableOverflow
    >
        <Text>Modal Content</Text>
    </Modal>
</ModalDemo>
```

## Props

| Prop                 | Type           | Description                                                                                           |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| `isOpen`             | boolean        | Controls display status of modal                                                                      |
| `onClose`            | function       | Executed when modal is closed                                                                         |
| `bg`                 | string         | Color of dialog background                                                                            |
| `zIndex`             | number         | z-index of dialog                                                                                     |
| `imgMode`            | boolean        | Add padding to the modal dialog when `true`                                                           |
| `width`              | ArrayOf.string | Width of the modal at Design System's responsive breakpoints                                          |
| `disableCloseButton` | ArrayOf.string | There will be a floating close button. When enabledOverflow = true, it's there by default.            |
| `enableOverflow`     | boolean        | When enabled, the modal will extend over the screen based on content, otherwise it will follow height |
| `height`             | ArrayOf.string | Responsive height, when enableOverflow={true}, it's not in use                                        |

## Prevent Background Scrolling

Use the [ScrollLock](/ScrollLock) helper
to prevent the background content from scrolling when the modal is open.
