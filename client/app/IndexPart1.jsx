import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import Amenities from './components/Amenities';
import CancelPolicy from './components/CancelPolicy';
import HostImage from './components/HostImage';
import HouseRules from './components/HouseRules';
import RoomDescription from './components/RoomDescription';
import RoomHeader from './components/RoomHeader';
import styles from './components/styles.css';

const portNumber = process.env.PORT;
const host = process.env.HOST;
const localHost = (portNumber !== undefined) ? `http://${host}:${portNumber}/` : 'http://localhost:3003/';

class AppPart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };
  }

  componentDidMount() {
    const roomID = this.props.id;
    $.ajax({
      url: `${localHost}${roomID}`,
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
        ['Essentials', this.state.room.essentials, `${localHost}icons/local_laundry_service.png`, this.state.room.essDescrip],
        ['Wifi', this.state.room.wifi, `${localHost}icons/language.png`],
        ['Shampoo', this.state.room.shampoo, `${localHost}icons/bath.png`],
        ['Closet/Drawers', this.state.room.closetDrawers, `${localHost}icons/dns.png`],
        ['TV', this.state.room.tv, `${localHost}icons/live_tv.png`],
        ['Heating', this.state.room.heating, `${localHost}icons/whatshot.png`, this.state.room.heatDescrip],
        ['Air Conditioning', this.state.room.airConditioning, `${localHost}icons/ac_unit.png`, this.state.room.airDescrip],
        ['Breakfast', this.state.room.breakfast, `${localHost}icons/free_breakfast.png`, this.state.room.breakfastDescrip],
        ['Desk/Workspace', this.state.room.deskWorkspace, `${localHost}icons/folder.png`],
        ['Pet Friendly', this.state.room.petFriendly, `${localHost}icons/pets.png`, this.state.room.petDescrip],
        ['Carbon Detector', this.state.room.carbonDetector, `${localHost}icons/notifications_active.png`],
        ['First Aid', this.state.room.firstAid, `${localHost}icons/local_hospital.png`],
        ['Fire Extinguisher', this.state.room.fireExtinguisher, `${localHost}icons/toys.png`],
        ['Smoke Detector', this.state.room.smokeDetector, `${localHost}icons/smoke_free.png`],
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
      <div className="regText">
        <HostImage hostImage={this.state.room.hostImageUrl} />
        <RoomHeader roomHeader={roomHeader} />
        <RoomDescription roomInfo={roomInfo} />
        <Amenities amenities={amenities} />
        <HouseRules houseRules={this.state.room.houseRulesDescription} />
        <CancelPolicy cancelPolicy={this.state.room.cancelPolicyDescription} />
      </div>
    );
  }
}

window.InfoPart1 = AppPart1;
