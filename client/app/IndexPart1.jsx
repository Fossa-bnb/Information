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
    const amenities = {
      essDescrip: this.props.room.essDescrip,
      heatDescrip: this.props.room.heatDescrip,
      airDescrip: this.props.room.airDescrip,
      petDescrip: this.props.room.petDescrip,
      breakfastDescrip: this.props.room.breakfastDescrip,
      essentials: this.props.room.essentials,
      wifi: this.props.room.wifi,
      shampoo: this.props.room.shampoo,
      closetDrawers: this.props.room.closetDrawers,
      tv: this.props.room.tv,
      heating: this.props.room.heating,
      airConditioning: this.props.room.airConditioning,
      breakfast: this.props.room.breakfast,
      deskWorkspace: this.props.room.deskWorkspace,
      petFriendly: this.props.room.petFriendly,
      carbonDetector: this.props.room.carbonDetector,
      firstAid: this.props.room.firstAid,
      fireExtinguisher: this.props.room.fireExtinguisher,
      smokeDetector: this.props.room.smokeDetector,
    };
    const roomHeader = {
      title: this.props.room.title,
      city: this.props.room.city,
      rooms: this.props.room.rooms,
      bed: this.props.room.bed,
      bath: this.props.room.bath,
      guest: this.props.room.guest,
    };
    const roomInfo = {
      roomDescription: this.props.room.roomDescription,
      spaceDescription: this.props.room.spaceDescription,
      guestAccessDescription: this.props.room.guestAccessDescription,
      interactionDescription: this.props.room.interactionDescription,
      otherDescription: this.props.room.otherDescription,
    };
    return (
      <div>
        <RoomHeader roomHeader={roomHeader} />
        <HostImage hostImage={this.state.room.hostImage} />
        <RoomDescription roomInfo={roomInfo} />
        <Amenities amenities={amenities} />
        <HouseRules houseRules={this.state.room.houseRules || ''} />
        <CancelPolicy cancelPolicy={this.state.room.cancelPolicy || ''} />
      </div>
    );
  }
}

RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app'));
