import React from 'react';
import ShoeDisplayThumbnails from '../components/ShoeDisplayThumbnails.jsx';
import { shallow, mount, render } from 'enzyme';


test('<ShoeThumbnails />', () => {
  const wrapper = shallow(<ShoeDisplayThumbnails />);
  expect(wrapper.exists()).toBe(true);
})