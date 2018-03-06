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
        <HostInfo room={this.state.room} />
        <Neighborhood room={this.state.room} />
      </div>
    );
  }
}


RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app2'));
