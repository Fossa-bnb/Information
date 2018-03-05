import React from 'react';
import Amenities from '../client/components/ammenities';

describe('<Amenities /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
