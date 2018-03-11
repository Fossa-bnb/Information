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
      <div className="roomType">Full House</div>,
    ])).toEqual(true);
  });
  it('renders the city in the room header', () => {
    const roomHeader = { city: 'Vallejo' };
    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <div>Vallejo</div>,
    ])).toEqual(true);
  });
  it('renders the room summery sections in the header', () => {
    const roomHeader = {
      guest: 10,
      bed: 12,
      bath: 3,
      room: 7,
      bedType: 'queen',
    };

    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <section>10 guests</section>,
      <section>12 beds</section>,
      <section>3 baths</section>,
    ])).toEqual(true);
  });
  it('renders the singular tense of summery sections in the header if the value is 1', () => {
    const roomHeader = {
      bed: 1,
      bath: 1,
      room: 1,
    };

    const wrapper = mount(<RoomHeader roomHeader={roomHeader} />);
    expect(wrapper.contains([
      <section>1 bed</section>,
      <section>1 bath</section>,
      <section>1 room</section>,
    ])).toEqual(true);
  });
});

