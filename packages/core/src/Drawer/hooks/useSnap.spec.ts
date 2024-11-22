import { useSnap } from './useSnap'
import { renderHook } from '@testing-library/react'

describe('Drawer snap hook unit test', () => {
  test('Snap position initialized correctly', () => {
    const { result } = renderHook(() => useSnap(['0%', '20%', '30%']))
    const { snapPosition, handleSnap } = result.current
    expect(snapPosition).toBe('0%')
    handleSnap('', { offset: { y: 99 } })
    expect(snapPosition).toBe('0%')
  })
})
