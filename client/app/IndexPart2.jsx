import React from 'react';
import RenderDOM from 'react-dom';
import $ from 'jquery';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomID: this.props.roomID,
      room: {}
    };
  }

  fetchRoom () {
    const roomID = this.props.roomID;
    $.ajax({
      url: `/${roomID}`,
      method: 'GET',
      
    })



    this.setState({
      room: roomObj
    });
  }

  render() {
    return (
    <div>
      <HostInfo room={room} />
      <Neighborhood room={room} />
    </div>
    )
  }
};

RenderDOM.render(<App roomID={{ id: 1 }} />, document.getElementById('app2'));
