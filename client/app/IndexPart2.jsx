import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';
import HostImage from './components/HostImage';
import styles from './components/styles.css';

class AppPart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };
  }

  componentDidMount() {
    const roomID = this.props.id;
    $.ajax({
      url: `http://localhost:3003/${roomID}`,
      method: 'GET',
      success: (roomObj) => {
        console.log(`SUCCESS - GET roomObj Part2: ${roomObj[0]}`);
        this.setState({
          room: roomObj[0],
        });
      },
      error: (err) => {
        console.log(`ERROR - Bad GET Part2: ${err}`);
      },
    });
  }

  render() {
    const hostInfo = {
      hostLocation: this.state.room.hostLocation,
      hostName: this.state.room.hostName,
      hostDateJoined: this.state.room.hostDateJoined,
      hostLanguage: this.state.room.hostLanguage,
      hostResponseTime: this.state.room.hostResponseTime,
      hostDescription: this.state.room.hostDescription,
      hostReviews: this.state.room.hostReviews,
      hostResponseRate: this.state.room.hostResponseRate,
      hostVerified: this.state.room.hostVerified,
      hostWarning: this.state.room.hostWarning,
    };
    const neighborhood = {
      neighborhoodDescription: this.state.room.neighborhoodDescription,
      mapUrl: this.state.room.mapUrl,
    };
    return (
      <div className="regText">
        <HostImage hostImage={this.state.room.hostImageUrl} />
        <HostInfo hostInfo={hostInfo} />
        <Neighborhood neighborhood={neighborhood} />
      </div>
    );
  }
}

window.InfoPart2 = AppPart2;
