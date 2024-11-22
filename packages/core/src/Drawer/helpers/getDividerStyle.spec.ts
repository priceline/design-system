import { getDividerStyle } from './getDividerStyle'

describe('Drawer divider toggle helper unit test', () => {
  test('If showDivider, return boxShadow', () => {
    const boxShadow = {
      'box-shadow': '10px 10px',
    }
    const res = getDividerStyle({ showDivider: true, boxShadow })
    expect(res).toBe(boxShadow)
  })

  test('If !showDivider, return {}', () => {
    const boxShadow = {
      'box-shadow': '10px 10px',
    }
    const res = getDividerStyle({ showDivider: false, boxShadow })
    expect(res).toBe({})
  })
})
