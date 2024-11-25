import { dragToDismissAnimation, getDragToDismissAnimation } from './getDragToDismissAnimation'

describe('Drawer header drag helper function unit test', () => {
  const onCollapse = () => {}
  test('Disable header drag animation when snappeable', () => {
    const res = getDragToDismissAnimation({ isDraggable: true, snapHeights: [1, 2, 3], onCollapse })
    expect(res).toEqual({})
  })

  test('Enable header drag animation when non-snappeable', () => {
    const res = getDragToDismissAnimation({ isDraggable: true, snapHeights: null, onCollapse })
    expect(JSON.stringify(res)).toStrictEqual(JSON.stringify(dragToDismissAnimation(onCollapse)))
  })
})
