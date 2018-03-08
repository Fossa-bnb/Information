import React from 'react';
import RoomHeader from '../client/app/components/RoomHeader';

describe('<RoomHeader /> Component', () => {
  it('should render a div', () => {
    const wrapper = shallow(<RoomHeader roomHeader="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the title in the room header', () => {
    const roomHeader = { title: 'Room off the bay...' };
    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <h1>Room off the bay...</h1>,
    ])).toEqual(true);
  });
  it('renders the Room Type in the room header', () => {
    const roomHeader = { roomType: 'Full House' };
    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <div>Full House</div>,
    ])).toEqual(true);
  });
  it('renders the city in the room header', () => {
    const roomHeader = { city: 'Vallejo' };
    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <div>Vallejo</div>,
    ])).toEqual(true);
  });
  it('renders the room summery lists in the header', () => {
    const roomHeader = {
      guest: 10,
      bed: 12,
      bath: 3,
      room: 7,
      bedType: 'queen',
    };

    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <li>10 guests</li>,
      <li>12 beds</li>,
      <li>3 baths</li>,
      <li>7 rooms</li>,
      <li>queen</li>,
    ])).toEqual(true);
  });
  it('renders the singular tense of summery lists in the header if the value is 1', () => {
    const roomHeader = {
      bed: 1,
      bath: 1,
      room: 1,
    };

    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <li>1 bed</li>,
      <li>1 bath</li>,
      <li>1 room</li>,
    ])).toEqual(true);
  });
});

