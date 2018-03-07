import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';
import HostImage from './components/HostImage';

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
      hostResponceTime: this.state.room.hostResponceTime,
      hostDescription: this.state.room.hostDescription,
      hostReviews: this.state.room.hostReviews,
      hostResponceRate: this.state.room.hostResponceRate,
      hostVarified: this.state.room.hostVarified,
      hostWarning: this.state.room.hostWarning,
    };
    const neighborhood = {
      neighborhoodDescription: this.state.room.neighborhoodDescription,
      mapUrl: this.state.room.mapUrl,
    };
    return (
      <div>
        <HostInfo hostInfo={hostInfo} />
        <HostImage hostImage={this.state.room.hostImageUrl} />
        <Neighborhood neighborhood={neighborhood} />
      </div>
    );
  }
}


RenderDOM.render(<App id={4} />, document.getElementById('app2'));
