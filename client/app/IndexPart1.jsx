import React from 'react';
import RenderDOM from 'react-dom';
import Amenities from './components/Amenities';
import CancelPolicy from './components/CancelPolicy';
import HostImage from './components/HostImage';
import HouseRules from './components/HouseRules';
import RoomDescription from './components/RoomDescription';
import RoomHeader from './components/RoomHeader';
import fetchDB from '../database/fetchRoom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomID: props.room.id,
      room: {}
    };
  }

  fetchRoom(roomObj) {
    this.setState({
      room: roomObj,
    });
  }


  render() {
    const newRoom = fetchDB(this.state.roomID, this.fetchRoom.bind(this));

    return (
      <div>
        <RoomHeader room={newRoom} />
        <HostImage room={newRoom} />
        <RoomDescription room={newRoom} />
        <Amenities room={newRoom} />
        <HouseRules room={newRoom} />
        <CancelPolicy room={newRoom} />
      </div>
    );
  }
}

RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app'));
