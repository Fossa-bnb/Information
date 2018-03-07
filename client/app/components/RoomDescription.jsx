import React from 'react';

const RoomDescription = props => (
  <div>
    <p>{ props.roomInfo.roomDescription }</p>
    <div className="boldText">The space</div>
    <p>{ props.roomInfo.spaceDescription }</p>
    <div className="boldText">Interaction with guests</div>
    <p>{ props.roomInfo.interactionDescription }</p>
    <div className="boldText">Guest access</div>
    <p>{ props.roomInfo.guestAccessDescription }</p>
    <div className="boldText">Other things to note</div>
    <p>{ props.roomInfo.otherDescription }</p>
    <hr />
  </div>
);

export default RoomDescription;
