import React from 'react';
import RenderDOM from 'react-dom';
import Amenities from './components/Amenities';
import CancelPolicy from './components/CancelPolicy';
import HostImage from './components/HostImage';
import HouseRules from './components/HouseRules';
import RoomDescription from './components/RoomDescription';
import RoomHeader from './components/RoomHeader';
import SleepingArrangments from './components/SleepingArrangments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomID: props.room.id,
      room: {}
    };
  }

  fetchRoom (roomID) {
    this.setState({
      this.state.room =  {} // fill out later will use fetchRoom
    });
  }

  render() {
    return (
      <div>
        <RoomHeader room={room} />
        <HostImage room={room} />
        <RoomDescription room={room} />
        <Amenities room={room} />
        <HouseRules room={room} />
        <CancelPolicy room={room} />
      </div>
    );
  }
}

RenderDOM.render(<App roomID={{id: 1}} />, document.getElementById('app'));
