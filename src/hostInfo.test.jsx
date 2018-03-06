import React from 'react';
import HostInfo from '../client/app/components/HostInfo';

describe('<HostInfo /> Component', () => {
  it('should render a title', () => {
    const wrapper = shallow(<HostInfo />);
    expect(wrapper.is('h1')).toEqual(true);
  });
  it('renders the host info paragraph given', () => {
    const room = { hostInfo: 'host info...' };
    const wrapper = shallow(<HostInfo room={room} />);
    // need to figure out how to test this componit
    expect(wrapper.find('p').text()).toEqual('host info...');
  });
});
