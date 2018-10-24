import React from 'react'
import {shallow, render, mount} from 'enzyme'

import App from '../client/components/App'
import Login from '../client/components/Login'
import ArticleWithFox from '../client/components/ArticleWithFox';

test(`<App /> contains 'Refresh page'`, () => {
  const expected = 'Refresh Page'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})

test('<App /> includes a <Login /> component', () => {
  // Arrange
  const expected = `<Login>
  <div id=\"login\">
    <h4 className=\"title-form\">
      Psssst.... Wanna see something cool ?
    </h4>
    <form onSubmit={[Function: onSubmit]}>
      <div id=\"register\">
        <input id=\"name\" name=\"users\" type=\"text\" placeholder=\"your pretty name\" />
        <input id=\"password\" name=\"password\" type=\"text\" placeholder=\"your secret code\" />
        <button id=\"signin\" value=\"submit\">
          I am new - be nice
        </button>
      </div>
    </form>
  </div>
</Login>`
  // Act
  const wrapper = mount(<Login />);
  const actual = wrapper.debug();
  // Assert
  expect(actual).toEqual(expected)
})


test('<ArticleWithFox /> has a foxImage state', () => {
  // Arrange
  const expected = true
  // Act
  const wrapper = shallow(<ArticleWithFox />);
  expect(wrapper.state().foo).to.equal(10);

})
