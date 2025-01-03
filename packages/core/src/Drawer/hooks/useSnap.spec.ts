import { useSnap } from './useSnap'
import { renderHook, act } from '@testing-library/react'

describe('useSnap', () => {
  const snapHeights = ['0%', '50%', '100%']
  const snapDimensions = { width: '100%', height: '100%' }
  const mockOnSnapPositionChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should handle scrolling down from MIDDLE to TOP', () => {
    const { result } = renderHook(() => useSnap(snapHeights, snapDimensions, mockOnSnapPositionChange))

    // First, scroll to bottom
    act(() => {
      result.current.handleSnap(
        { pointerType: 'touch', type: 'pointerup' },
        { offset: { y: 101 } }, // Simulating scroll down
      )
    })

    expect(result.current.snapPosition).toBe('100%')
    expect(mockOnSnapPositionChange).toHaveBeenCalledWith({
      prevSnapPosition: 'MIDDLE',
      currSnapPosition: 'BOTTOM',
    })

    // Then scroll back to middle
    act(() => {
      result.current.handleSnap({ pointerType: 'touch', type: 'pointerup' }, { offset: { y: -101 } })
    })

    expect(result.current.snapPosition).toBe('50%')
    expect(mockOnSnapPositionChange).toHaveBeenCalledWith({
      prevSnapPosition: 'BOTTOM',
      currSnapPosition: 'MIDDLE',
    })
  })

  it('should handle scrolling up from MIDDLE to BOTTOM', () => {
    const { result } = renderHook(() => useSnap(snapHeights, snapDimensions, mockOnSnapPositionChange))

    // First, scroll to top
    act(() => {
      result.current.handleSnap({ pointerType: 'touch', type: 'pointerup' }, { offset: { y: -101 } })
    })

    expect(result.current.snapPosition).toBe('0%')
    expect(mockOnSnapPositionChange).toHaveBeenCalledWith({
      prevSnapPosition: 'MIDDLE',
      currSnapPosition: 'TOP',
    })

    // Then scroll back to middle
    act(() => {
      result.current.handleSnap({ pointerType: 'touch', type: 'pointerup' }, { offset: { y: 101 } })
    })

    expect(result.current.snapPosition).toBe('50%')
    expect(mockOnSnapPositionChange).toHaveBeenCalledWith({
      prevSnapPosition: 'TOP',
      currSnapPosition: 'MIDDLE',
    })
  })
})
