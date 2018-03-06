import React from 'react';

const RoomHeader = props => (
  <div>
    <h1>RoomHeader Component</h1>
    <li>{ props.room.guests }</li>
  </div>
);

export default RoomHeader;
