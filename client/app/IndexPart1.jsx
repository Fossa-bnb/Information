import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import Amenities from './components/Amenities';
import CancelPolicy from './components/CancelPolicy';
import HostImage from './components/HostImage';
import HouseRules from './components/HouseRules';
import RoomDescription from './components/RoomDescription';
import RoomHeader from './components/RoomHeader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };
  }

  fetchRoom() {
    const roomID = this.props.roomID;
    $.ajax({
      url: `/${roomID}`,
      method: 'GET',
      success: ({ roomObj }) => {
        console.log(`SUCCESS - GET roomObj: ${roomObj.id}`);
        this.setState({
          room: roomObj,
        });
      },
      error: (err) => {
        console.log(`ERROR - Bad GET: ${err}`);
      },
    });
  }


  render() {
    return (
      <div>
        <RoomHeader room={this.state.room} />
        <HostImage room={this.state.room} />
        <RoomDescription room={this.state.room} />
        <Amenities room={this.state.room} />
        <HouseRules room={this.state.room} />
        <CancelPolicy room={this.state.room} />
      </div>
    );
  }
}

RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app'));
