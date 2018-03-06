import React from 'react';
import RenderDOM from 'react-dom';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomID: props.room.id,
      room: {}
    };
  }

  fetchRoom (roomID) {
    this.setState({
      this.state.room: {} // will fix to do a fetch request to get this object
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

RenderDOM.render(<App roomId={{ id: 1 }} />, document.getElementById('app2'));
