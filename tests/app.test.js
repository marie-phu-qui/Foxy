import React from 'react'
import {shallow, render, mount} from 'enzyme'

import App from '../client/components/App'
import Login from '../client/components/Login'

test(`<App /> contains 'Refresh page'`, () => {
  const expected = 'Refresh Page'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})


// test('Refresh action on the quote when button is clicked', () => {
//   // Arrange
//   const spy = jest.fn()
//   const signin = ['herschel']
//   const expected = 1

//   // Act
//   const wrapper = mount(<List things={wombats} moreWombatInfo={spy} />)
//   const li = wrapper.find('li').first()
//   li.simulate('click')
//   const actual = spy.mock.calls.length

//   // Assert
//   expect(actual).toBe(expected)
// })

test('<App /> includes a <Login /> component', () => {
  // Arrange

  const expected = true

  // Act
  const wrapper = mount(<Login />);
  expect(wrapper.find('#header')).to.have.lengthOf(1);

  // Assert
  expect(actual).toBe(expected)
})