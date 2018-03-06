import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';


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
    const hostInfo = {
      hostLocation: this.state.room.hostLocation,
      hostName: this.state.room.hostName,
      hostDateJoined: this.state.room.hostDateJoined,
      hostEmail: this.state.room.hostEmail,
      hostLanguage: this.state.room.hostLanguage,
      hostResponceTime: this.state.room.hostResponceTime,
      hostDescription: this.state.room.hostDescription,
      hostReviews: this.state.room.hostReviews,
      hostResponceRate: this.state.room.hostResponceRate,
      hostVarified: this.state.room.hostVarified,
    };
    const neighborhood = {
      neighborhoodDescription: this.state.room.neighborhoodDescription,
      mapUrl: this.state.room.mapUrl,
    };
    return (
      <div>
        <HostInfo hostInfo={hostInfo} />
        <Neighborhood neighborhood={neighborhood} />
      </div>
    );
  }
}


RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app2'));
