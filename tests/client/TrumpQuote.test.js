import React from 'react'
import {shallow} from 'enzyme'
import '../setup.js'; // Setup Enzyme & Adapter

import TrumpQuote from '../../client/components/TrumpQuote'

describe('<TrumpQuote />', () => {

  test('renders without crashing', () => {
    shallow(<TrumpQuote />);
  });
})