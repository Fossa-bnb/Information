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
      location: this.state.room.hostLocation,
      name: this.state.room.hostName,
      dateJoined: this.state.room.hostDateJoined,
      email: this.state.room.hostEmail,
      language: this.state.room.hostLanguage,
      responceTime: this.state.room.hostResponceTime,
      description: this.state.room.hostDescription,
      reviews: this.state.room.hostReviews,
      responceRate: this.state.room.hostResponceRate,
      varified: this.state.room.hostVarified,
    };
    const neighborhood = {
      description: this.state.room.neighborhoodDescription,
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
