import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Refresh Page'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})


// test('Refresh action on the quote when button is clicked', () => {
//   // Arrange
//   const spy = jest.fn()
//   const wombats = ['herschel']
//   const expected = 1

//   // Act
//   const wrapper = mount(<List things={wombats} moreWombatInfo={spy} />)
//   const li = wrapper.find('li').first()
//   li.simulate('click')
//   const actual = spy.mock.calls.length

//   // Assert
//   expect(actual).toBe(expected)
// })