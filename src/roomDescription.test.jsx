import React from 'react';
import RoomDescription from '../client/app/components/RoomDescription';

describe('<RoomDescription /> Component', () => {
  it('should render a div ', () => {
    const wrapper = shallow(<RoomDescription room="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the room description paragraph given', () => {
    const room = { roomDescription: 'Room description is...' };
    const wrapper = shallow(<RoomDescription room={room} />);
    // need to figure out how to test this componit
    expect(wrapper.find('p').text()).toEqual('Room description is...');
  });
});
