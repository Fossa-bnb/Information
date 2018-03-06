import React from 'react';
import RoomHeader from '../client/app/components/RoomHeader';

describe('<RoomHeader /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<RoomHeader roomHeader="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the room header guest count list item', () => {
    const roomHeader = { guests: 2 };
    const wrapper = shallow(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.find('li').text()).toEqual('2');
  });
});
