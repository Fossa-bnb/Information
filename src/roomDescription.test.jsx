import React from 'react';
import RoomDescription from '../client/app/components/RoomDescription';

describe('<RoomDescription /> Component', () => {
  it('should render a div ', () => {
    const wrapper = shallow(<RoomDescription roomInfo="" />);
    expect(wrapper.is('div')).toEqual(true);
  });
  it('renders the Room description paragraph', () => {
    const roomInfo = { roomDescription: 'Room description is...' };
    const wrapper = mount(<RoomDescription roomInfo={roomInfo} />);
    expect(wrapper.contains([
      <p>Room description is...</p>,
    ])).toEqual(true);
  });
  it('renders The Space description paragraph', () => {
    const roomInfo = { spaceDescription: 'Space description is...' };
    const wrapper = mount(<RoomDescription roomInfo={roomInfo} />);
    expect(wrapper.contains([
      <p>Space description is...</p>,
    ])).toEqual(true);
  });
  it('renders the Interaction description paragraph', () => {
    const roomInfo = { interactionDescription: 'Interaction description is...' };
    const wrapper = mount(<RoomDescription roomInfo={roomInfo} />);
    expect(wrapper.contains([
      <p>Interaction description is...</p>,
    ])).toEqual(true);
  });
  it('renders the Guest Access description paragraph', () => {
    const roomInfo = { guestAccessDescription: 'Guest description is...' };
    const wrapper = mount(<RoomDescription roomInfo={roomInfo} />);
    expect(wrapper.contains([
      <p>Guest description is...</p>,
    ])).toEqual(true);
  });
  it('renders the Other Things description paragraph', () => {
    const roomInfo = { otherDescription: 'Other description is...' };
    const wrapper = mount(<RoomDescription roomInfo={roomInfo} />);
    expect(wrapper.contains([
      <p>Other description is...</p>,
    ])).toEqual(true);
  });
});
