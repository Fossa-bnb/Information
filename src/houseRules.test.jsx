import React from 'react';
import HouseRules from '../client/app/components/HouseRules';

describe('<HouseRules /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HouseRules room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the house rules paragraph given', () => {
    const room = { houseRules: 'House rules are...' };
    const wrapper = shallow(<HouseRules room={room} />);
    // need to figure out how to test this componit
    expect(wrapper.find('p').text()).toEqual('House rules are...');
  });
});
