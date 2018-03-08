import React from 'react';
import Amenities from '../client/app/components/Amenities';

describe('<Amenities /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Amenities amenities={{ amenitiesList: [['', true]] }} />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('should dynamically render an given array', () => {
    const amenities = {
      amenitiesList: [
        ['Essentials', true, 'ToothBrush, HairBrush'],
        ['Wifi', false],
        ['Heating', true, 'Wood stove'],
      ],
    };
    const wrapper = shallow(<Amenities amenities={amenities} />);
    expect(wrapper.find('li')).toHaveProperty('length', amenities.amenitiesList.length);
  });
});
