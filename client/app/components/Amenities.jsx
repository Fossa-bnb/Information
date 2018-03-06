import React from 'react';

const Amenities = (props) => {
  const listItem = props.room.wifi === true ? 'Wifi' : '';
  return (
    <div>
      <h1>Amenities Component</h1>
      <li>{ listItem }</li>
    </div>
  );
};


export default Amenities;
