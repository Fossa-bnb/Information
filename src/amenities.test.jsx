import React from 'react';
import Amenities from '../client/app/components/Amenities';

describe('<Amenities /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Amenities amenities="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the amenity wifi list item', () => {
    const amenities = { wifi: true, tv: false };
    const wrapper = shallow(<Amenities amenities={amenities} />);
    // this may be temporary
    expect(wrapper.find('li').text()).toEqual('Wifi');
  });
});
