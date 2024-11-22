import { dragToDismissAnimation, getDragToDismissAnimation } from './getDragToDismissAnimation'

describe('Drawer header drag helper function unit test', () => {
  const onCollapse = () => {}
  test('Disable header drag animation when snappeable', () => {
    let res = getDragToDismissAnimation({ isDraggable: true, snapHeights: [1, 2, 3], onCollapse })
    expect(res).toBe({})
  })

  test('Enable header drag animation when non-snappeable', () => {
    let res = getDragToDismissAnimation({ isDraggable: true, snapHeights: null, onCollapse })
    expect(res).toBe(dragToDismissAnimation(onCollapse))
  })
})
