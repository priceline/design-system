import { ScrollLock } from '../src/index'

beforeEach(() => {
  global.scrollTo = jest.fn()
})

describe('ScrollLock', () => {
  test('when called on with document.head, createStyleTag should be called', () => {
    const scrollLock = new ScrollLock()
    scrollLock.createStyleTag = jest.fn()
    scrollLock.head = true
    scrollLock.on()
    expect(scrollLock.createStyleTag).toHaveBeenCalled()
  })

  test('when called on without document.head, createStyleTag should not be called', () => {
    const scrollLock = new ScrollLock()
    scrollLock.createStyleTag = jest.fn()
    scrollLock.head = false
    scrollLock.on()
    expect(scrollLock.createStyleTag).not.toHaveBeenCalled()
  })

  test('when called off with no tag should do nothing', () => {
    const scrollLock = new ScrollLock()
    const mockHead = {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    }
    scrollLock.head = mockHead
    scrollLock.off()
    expect(mockHead.removeChild).not.toHaveBeenCalled()
  })

  test('when called off with tag should removeChild', () => {
    const scrollLock = new ScrollLock()
    const mockHead = {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    }
    scrollLock.head = mockHead
    scrollLock.on()
    scrollLock.off()
    expect(mockHead.removeChild).toHaveBeenCalled()
  })
})
