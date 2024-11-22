import { useSnap } from './useSnap'
import { renderHook } from '@testing-library/react'

describe('Drawer snap hook unit test', () => {
  test('Snap position initialized correctly', () => {
    const { result } = renderHook(() => useSnap(['0%', '20%', '30%']))
    expect(result.current.snapPosition).toEqual('0%')
  })
})
