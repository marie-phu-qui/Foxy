import React from 'react'
import {shallow, mount} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App'
import Login from '../../client/components/Login'

describe('<App />', () => {

  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('contains all : <Login/>" component on landing page', () => {
    const expected = '<Login />';
    const wrapper = shallow(<App />);
    console.log(wrapper.text())
    expect(wrapper.text()).toMatch(expected);
});

  test(`contains 'Refresh page'`, () => {
    const expected = 'Refresh Page'
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain(expected)
  })

  test(`I can see non registered content`, () => {
    const expected = '<Login />Refresh Page<Connect(ArticleWithFox) />Chat to me, sweetie!<ChatApp /><TrumpQuote /><Connect(Advertising) /><Connect(Comics) />'
    const wrapper = shallow(<App />)
    expect(wrapper.text()).toContain(expected)
  })

  test('includes a <Login /> component 2', () => {
  })
});
