import React from 'react';
import Neighborhood from '../client/app/components/Neighborhood';

describe('<Neighborhood /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Neighborhood room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the neighborhood description paragraph given', () => {
    const room = { neighborhood: 'neighborhood description...' };
    const wrapper = shallow(<Neighborhood room={room} />);
    // need to figure out how to test this componit
    expect(wrapper.find('p').text()).toEqual('neighborhood description...');
  });
});
