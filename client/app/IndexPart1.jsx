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
      amenitiesList: [
        ['Essentials', this.state.room.essentials, this.state.room.essDescrip],
        ['Wifi', this.state.room.wifi],
        ['Shampoo', this.state.room.shampoo],
        ['Closet/Drawers', this.state.room.closetDrawers],
        ['TV', this.state.room.tv],
        ['Heating', this.state.room.heating, this.state.room.heatDescrip],
        ['Air Conditioning',this.state.room.airConditioning, this.state.room.airDescrip],
        ['Breakfast', this.state.room.breakfast, this.state.room.breakfastDescrip],
        ['Desk/Workspace', this.state.room.deskWorkspace],
        ['Pet Friendly', this.state.room.petFriendly, this.state.room.petDescrip],
        ['Carbon Detector', this.state.room.carbonDetector],
        ['First Aid', this.state.room.firstAid],
        ['Fire Extinguisher', this.state.room.fireExtinguisher],
        ['Smoke Detector', this.state.room.smokeDetector],
      ],
    };
    const roomHeader = {
      title: this.state.room.title,
      city: this.state.room.city,
      roomType: this.state.room.roomType,
      room: this.state.room.room,
      bed: this.state.room.bed,
      bath: this.state.room.bath,
      guest: this.state.room.guest,
      bedType: this.state.room.bedType,
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
        <CancelPolicy cancelPolicy={this.state.room.cancelPolicyDescription} />
      </div>
    );
  }
}

RenderDOM.render(<App id={4} />, document.getElementById('app'));
