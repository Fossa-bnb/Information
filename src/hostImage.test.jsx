import React from 'react';
import HostImage from '../client/components/hostImage';

describe('<HostImage /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<HostImage />);
    expect(wrapper.is('div')).toEqual(true);
  });
});
