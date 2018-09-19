import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Refresh Page'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})
