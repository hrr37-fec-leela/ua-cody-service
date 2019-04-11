import React from 'react';
import ShoeDisplay from '../components/ShoeDisplay.jsx';
import { shallow, mount, render } from 'enzyme';

describe('<ShoeDisplay />', () => {

  it('no unintentional changes to ShoeDisplay component', () => {
    const ShoeDisplayComponent = shallow(<ShoeDisplay />);
    expect(ShoeDisplayComponent).toMatchSnapshot();
  });

});