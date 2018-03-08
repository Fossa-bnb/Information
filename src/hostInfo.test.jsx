import React from 'react';
import HostInfo from '../client/app/components/HostInfo';

describe('<HostInfo /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HostInfo hostInfo="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the host info paragraph given', () => {
    const hostInfo = { hostDescription: 'host info' };
    const wrapper = shallow(<HostInfo hostInfo={hostInfo} />);
    expect(wrapper.find('p').text()).toEqual('host info');
  });
  it('renders the Other Things description paragraph', () => {
    const hostInfo = { hostVerified: true };
    const wrapper = mount(<HostInfo hostInfo={hostInfo} />);
    expect(wrapper.contains([
      <div>Verified</div>,
    ])).toEqual(true);
  });
});
