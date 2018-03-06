import React from 'react';
import HostImage from '../client/app/components/HostImage';

describe('<HostImage /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HostImage room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the host image', () => {
    const room = { hostImage: 'hostImage.jpg' };
    const wrapper = shallow(<HostImage room={room} />);
    // need to figure out how to test this componit
    expect(wrapper.find('img').text()).toEqual('hostImage.jpg');
  });
});
