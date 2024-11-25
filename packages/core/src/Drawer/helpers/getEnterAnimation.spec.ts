import { getEnterAnimation } from './getEnterAnimation'

describe('Entrance animation unit test', () => {
  test('Hide animation if ebaled', () => {
    const res = getEnterAnimation({ disableEnterAnimation: true, isMobile: true, placement: 'top' })
    expect(res).toBeFalsy()
  })

  test('Return animation if disabled', () => {
    const res = getEnterAnimation({ disableEnterAnimation: false, isMobile: true, placement: 'top' })
    expect(res).toBeTruthy()
  })
})
