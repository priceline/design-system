import { useSnap } from './useSnap'
import { renderHook } from '@testing-library/react'

describe('Drawer snap hook unit test', () => {
  test('Snap position initialized correctly', () => {
    const { result } = renderHook(() => useSnap(['0%', '20%', '30%'], ['100%', '100%', '100%']))
    const { snapPosition, handleSnap } = result.current
    expect(snapPosition).toBe('20%')

    // Start middle, scroll up and scroll down should be back to initial position
    // Scroll to top
    handleSnap('', { offset: { y: 101 } })
    // Scroll back to middle
    handleSnap('', { offset: { y: -101 } })

    expect(snapPosition).toBe('20%')
  })
})
