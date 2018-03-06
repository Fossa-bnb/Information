import React from 'react';
import RoomDescription from '../client/app/components/RoomDescription';

describe('<RoomDescription /> Component', () => {
  it('should render a div ', () => {
    const wrapper = shallow(<RoomDescription roomDescription="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the room description paragraph given', () => {
    const roomDescription = 'Room description is...';
    const wrapper = shallow(<RoomDescription roomDescription={roomDescription} />);
    expect(wrapper.find('p').text()).toEqual('Room description is...');
  });
});
