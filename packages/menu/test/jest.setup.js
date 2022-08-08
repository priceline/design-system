import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
