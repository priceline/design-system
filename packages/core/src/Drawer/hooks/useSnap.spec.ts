import { useSnap } from './useSnap'
import { renderHook } from '@testing-library/react'

describe('Drawer snap hook unit test', () => {
  const snapHeights = ['20%', '0%', '20%']
  const snapDimensions = ['100%', '100%', '100%']
  const { result } = renderHook(() => useSnap(snapHeights, snapDimensions, () => {}))
  const { snapPosition, handleSnap } = result.current
  test('Snap position initialized correctly', () => {
    // Start middle, scroll up and scroll down should be back to initial position
    expect(snapPosition).toBe('0%')
    // Scroll to top
    handleSnap({ pointerType: 'touch', type: 'pointerup' }, { offset: { y: 101 } })
    // Scroll back to middle
    handleSnap({ pointerType: 'touch', type: 'pointerup' }, { offset: { y: -101 } })
    // Expect it to be back in middle
    expect(snapPosition).toBe('0%')
  })

  test('Does not snap on pointer cancel events (e.g. scrolling through drawer content on iphone)', () => {
    // Start middle, and touch scroll on drawer content should not trigger an action
    expect(snapPosition).toBe('0%')
    // Scroll to top
    handleSnap({ pointerType: 'touch', type: 'pointercancel' }, { offset: { y: 101 } })
    // Expect no change
    expect(snapPosition).toBe('0%')
  })
})
