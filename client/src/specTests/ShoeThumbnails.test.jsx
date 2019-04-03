import React from 'react';
import ShoeThumbnails from '../components/ShoeThumbnails.jsx';
import { shallow, mount, render } from 'enzyme';


test('<ShoeThumbnails />', () => {
  const wrapper = shallow(<ShoeThumbnails />);
  expect(wrapper.exists()).toBe(true);
})