import { createMediaQueries } from './createMediaQueries'

describe('createMediaQueries', () => {
  test('returns the correct media queries', () => {
    const actual = createMediaQueries(['10px', '20px', '30px'])

    expect(actual).toEqual([
      '@media screen and (min-width:10px)',
      '@media screen and (min-width:20px)',
      '@media screen and (min-width:30px)',
    ])
  })
})
