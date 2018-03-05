import React from 'react';
import RoomHeader from '../client/components/roomHeader';

describe('<RoomHeader /> Component', () => {
  it('should render a title', () => {
    const wrapper = shallow(<RoomHeader />);
    expect(wrapper.is('h1')).toEqual(true);
  });
});