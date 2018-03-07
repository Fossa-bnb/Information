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

  componentDidMount() {
    const roomID = this.props.id;
    $.ajax({
      url: `/${roomID}`,
      method: 'GET',
      success: (roomObj) => {
        console.log(`SUCCESS - GET roomObj Part1: ${roomObj[0]}`);
        this.setState({
          room: roomObj[0],
        });
      },
      error: (err) => {
        console.log(`ERROR - Bad GET Part1: ${err}`);
      },
    });
  }


  render() {
    const amenities = {
      essDescrip: this.state.room.essDescrip,
      heatDescrip: this.state.room.heatDescrip,
      airDescrip: this.state.room.airDescrip,
      petDescrip: this.state.room.petDescrip,
      breakfastDescrip: this.state.room.breakfastDescrip,
      essentials: this.state.room.essentials,
      wifi: this.state.room.wifi,
      shampoo: this.state.room.shampoo,
      closetDrawers: this.state.room.closetDrawers,
      tv: this.state.room.tv,
      heating: this.state.room.heating,
      airConditioning: this.state.room.airConditioning,
      breakfast: this.state.room.breakfast,
      deskWorkspace: this.state.room.deskWorkspace,
      petFriendly: this.state.room.petFriendly,
      carbonDetector: this.state.room.carbonDetector,
      firstAid: this.state.room.firstAid,
      fireExtinguisher: this.state.room.fireExtinguisher,
      smokeDetector: this.state.room.smokeDetector,
    };
    const roomHeader = {
      title: this.state.room.title,
      city: this.state.room.city,
      roomType: this.state.room.roomType,
      rooms: this.state.room.rooms,
      bed: this.state.room.bed,
      bath: this.state.room.bath,
      guest: this.state.room.guest,
    };
    const roomInfo = {
      roomDescription: this.state.room.roomDescription,
      spaceDescription: this.state.room.spaceDescription,
      guestAccessDescription: this.state.room.guestAccessDescription,
      interactionDescription: this.state.room.interactionDescription,
      otherDescription: this.state.room.otherDescription,
    };

    return (
      <div>
        <RoomHeader roomHeader={roomHeader} />
        <HostImage hostImage={this.state.room.hostImageUrl} />
        <RoomDescription roomInfo={roomInfo} />
        <Amenities amenities={amenities} />
        <HouseRules houseRules={this.state.room.houseRulesDescription} />
        <CancelPolicy cancelPolicy={this.state.room.canclePolicyDescription} />
      </div>
    );
  }
}

RenderDOM.render(<App id={4} />, document.getElementById('app'));
