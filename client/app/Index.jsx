import React from 'react';
import RenderDOM from 'react-dom';
import Amenites from './components/Amenities';
import CancelPolicy from './components/CancelPolicy';
import HostImage from './components/HostImage';
import HouseRules from './components/HouseRules';
import RoomDescription from './components/RoomDescription';
import RoomHeader from './components/RoomHeader';
import SleepingArrangments from './components/SleepingArrangments';

const App = () => (
  <div>
    <h1>My Room</h1>
    <RoomHeader />
    <HostImage />
    <RoomDescription />
    <Amenites />
    <SleepingArrangments />
    <HouseRules />
    <CancelPolicy />


  </div>
);

RenderDOM.render(<App />, document.getElementById('app'));
