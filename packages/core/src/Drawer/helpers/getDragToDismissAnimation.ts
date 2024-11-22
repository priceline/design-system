/**
 * Handles header collapse/expand behavior on button click
 */

export const dragToDismissAnimation = (onDragEnd) => {
  return {
    drag: 'y',
    dragConstraints: { top: 0, bottom: 0 },
    dragElastic: { top: 0, bottom: 0.3 },
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },

    /* istanbul ignore next */
    onDragEnd: (event, info) => {
      if (info.offset.y > 200) {
        onDragEnd()
      }
    },
  }
}

export const getDragToDismissAnimation = ({ isDraggable, snapHeights, onCollapse }) =>
  isDraggable && !snapHeights ? dragToDismissAnimation(onCollapse) : {}
