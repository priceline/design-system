import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
