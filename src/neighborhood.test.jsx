import React from 'react';
import Neighborhood from '../client/app/components/Neighborhood';

describe('<Neighborhood /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Neighborhood neighborhood="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the neighborhood description paragraph given', () => {
    const neighborhood = 'neighborhood description...';
    const wrapper = shallow(<Neighborhood neighborhood={neighborhood} />);
    expect(wrapper.find('p').text()).toEqual('neighborhood description...');
  });
});
