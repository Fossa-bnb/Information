import React from 'react';

const RoomHeader = (props) => {
  const bathWords = props.roomHeader.bath === 1 ? 'bath' : 'baths';
  const roomWords = props.roomHeader.room === 1 ? 'room' : 'rooms';
  const bedWords = props.roomHeader.bed === 1 ? 'bed' : 'beds';
  return (
    <div>
      <div>{ props.roomHeader.roomType }</div>
      <h1>{ props.roomHeader.title }</h1>
      <div>{ props.roomHeader.city }</div>
      <br />
      <li>{ `${props.roomHeader.guest} guests` }</li>
      <li>{ `${props.roomHeader.bed} ${bedWords}` }</li>
      <li>{ `${props.roomHeader.bath} ${bathWords}` }</li>
      <li>{ `${props.roomHeader.room} ${roomWords}` }</li>
      <li>{ `${props.roomHeader.bedType}` }</li>
    </div>
  );
};

export default RoomHeader;
