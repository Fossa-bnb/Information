import React from 'react';
import HostInfo from '../client/components/hostInfo';

describe('<HostInfo /> Component', () => {
  it('should render a title', () => {
    const wrapper = shallow(<HostInfo />);
    expect(wrapper.is('h1')).toEqual(true);
  });
});
