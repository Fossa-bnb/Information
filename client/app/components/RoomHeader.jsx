import React from 'react';

const portNumber = process.env.PORT;
const host = process.env.HOST;
const localHost = (portNumber !== undefined) ? `http://${host}:${portNumber}/` : 'http://localhost:3003/';

const RoomHeader = (props) => {
  const bathWords = props.roomHeader.bath === 1 ? 'bath' : 'baths';
  const roomWords = props.roomHeader.room === 1 ? 'room' : 'rooms';
  const bedWords = props.roomHeader.bed === 1 ? 'bed' : 'beds';
  return (
    <div>
      <div className="roomType">{ props.roomHeader.roomType }</div>
      <h1>{ props.roomHeader.title }</h1>
      <div>{ props.roomHeader.city }</div>
      <br />
      <img className="icons" src={`${localHost}/icons/people.png`} alt='Guest' />
      <section>{ `${props.roomHeader.guest} guests` }</section>
      <img className="icons" src={`${localHost}/icons/local_hotel.png`} alt='Bed' />
      <section>{ `${props.roomHeader.bed} ${bedWords}` }</section>
      <img className="icons" src={`${localHost}/icons/hot_tub.png`} alt='Bath' />
      <section>{ `${props.roomHeader.bath} ${bathWords}` }</section>
      <img className="icons" src={`${localHost}/icons/account_balance.png`} alt='Room' />
      <section>{ `${props.roomHeader.room} ${roomWords}` }</section>
      <section>{ `${props.roomHeader.bedType}` }</section>
    </div>
  );
};

export default RoomHeader;
