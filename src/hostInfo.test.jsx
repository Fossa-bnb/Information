import React from 'react';
import HostInfo from '../client/app/components/HostInfo';

describe('<HostInfo /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HostInfo room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the host info paragraph given', () => {
    const room = { hostInfo: 'host info...' };
    const wrapper = shallow(<HostInfo room={room} />);
    expect(wrapper.find('p').text()).toEqual('host info...');
  });
});
