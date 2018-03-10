import React from 'react';
import styles from './styles.css';

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
      <img className="icons" src="./icons/people.png" alt={'Guest'} />
      <div>{ `${props.roomHeader.guest} guests` }</div>
      <img className="icons" src="./icons/local_hotel.png" alt={'Bed'} />
      <div>{ `${props.roomHeader.bed} ${bedWords}` }</div>
      <img className="icons" src="./icons/hot_tub.png" alt={'Bath'} />
      <div>{ `${props.roomHeader.bath} ${bathWords}` }</div>
      <img className="icons" src="./icons/account_balance.png" alt={'Room'} />
      <div>{ `${props.roomHeader.room} ${roomWords}` }</div>
      <div>{ `${props.roomHeader.bedType}` }</div>
    </div>
  );
};

export default RoomHeader;
