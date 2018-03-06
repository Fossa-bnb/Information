import React from 'react';
import Amenities from '../client/app/components/Amenities';

describe('<Amenities /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Amenities rooms="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the amenity li item given', () => {
    const room = { wifi: true };
    const wrapper = shallow(<Amenities room={room} />);
    // need to figure out how to test this componit
    console.log(wrapper.debug());
    expect(wrapper.find('li').text()).toEqual('Wifi');
  });
});
