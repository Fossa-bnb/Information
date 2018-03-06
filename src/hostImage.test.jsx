import React from 'react';
import HostImage from '../client/app/components/HostImage';

describe('<HostImage /> Component', () => {
  it('should render hostImage', () => {
    const wrapper = shallow(<HostImage room="" />);
    expect(wrapper.is('img')).toEqual(true);
  });
});
