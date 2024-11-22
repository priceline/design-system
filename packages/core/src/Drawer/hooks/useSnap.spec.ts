import { useSnap } from './useSnap'

describe('Drawer snap hook unit test', () => {
  test('Snap position initialized correctly', () => {
    const { snapPosition } = useSnap(['0%', '20%', '30%'])
    expect(snapPosition).toEqual('0%')
  })
})
