import { useSnap } from './useSnap'
import { renderHook } from '@testing-library/react'

describe('Drawer snap hook unit test', () => {
  test('Snap position initialized correctly', () => {
    const { result } = renderHook(() => useSnap(['0%', '20%', '30%'], ['100%', '100%', '100%']))
    const { snapPosition, handleSnap } = result.current
    expect(snapPosition).toBe('0%')

    // Scroll all the way up, and back down should return to original position
    // To middle
    handleSnap('', { offset: { y: 0 } })
    handleSnap('', { offset: { y: 101 } })

    // To top
    handleSnap('', { offset: { y: 101 } })

    // Back to middle
    handleSnap('', { offset: { y: -101 } })

    // Back to bottom
    handleSnap('', { offset: { y: -101 } })
    expect(snapPosition).toBe('0%')
  })
})
