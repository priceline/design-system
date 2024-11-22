import { getEnterAnimation } from './getEnterAnimation'

describe('Entrance animation unit test', () => {
  test('Return no animation if disabled', () => {
    let res = getEnterAnimation({ disableEnterAnimation: true, isMobile: true, placement: 'top' })
    expect(res).toBeFalsy()
  })

  test('Return animation if enabled', () => {
    let res = getEnterAnimation({ disableEnterAnimation: true, isMobile: true, placement: 'top' })
    expect(res).toBeTruthy()
  })
})
