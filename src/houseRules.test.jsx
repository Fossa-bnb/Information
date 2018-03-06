import React from 'react';
import HouseRules from '../client/app/components/HouseRules';

describe('<HouseRules /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HouseRules houseRules="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the house rules paragraph given', () => {
    const houseRules = 'House rules are...';
    const wrapper = shallow(<HouseRules houseRules={houseRules} />);
    expect(wrapper.find('p').text()).toEqual('House rules are...');
  });
});
