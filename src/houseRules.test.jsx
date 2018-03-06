import React from 'react';
import HouseRules from '../client/components/houseRules';

describe('<HouseRules /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HouseRules />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
