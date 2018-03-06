import React from 'react';
import RoomHeader from '../client/app/components/RoomHeader';

describe('<RoomHeader /> Component', () => {
  it('should render a title', () => {
    const wrapper = shallow(<RoomHeader room="" />);
    expect(wrapper.is('h1')).toEqual(true);
  });
  it('renders the room header li item given', () => {
    const room = { guests: 2 };
    const wrapper = shallow(<RoomHeader room={room} />);
    expect(wrapper.find('li').text()).toEqual('2');
  });
});
