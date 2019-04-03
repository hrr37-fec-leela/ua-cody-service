import React from 'react';
import ShoeDisplay from '../components/ShoeDisplay.jsx';
import { shallow, mount, render } from 'enzyme';


test('<ShoeDisplay />', () => {
  const wrapper = shallow(<ShoeDisplay />);
  expect(wrapper.exists()).toBe(true);
})