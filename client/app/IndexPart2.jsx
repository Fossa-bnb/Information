import React from 'react';
import RenderDOM from 'react-dom';
import HostInfo from './components/HostInfo';
import Neighborhood from './components/Neighborhood';


const App = () => (
  <div>
    <h1>Further Info</h1>
    <HostInfo />
    <Neighborhood />
  </div>
);

RenderDOM.render(<App />, document.getElementById('app2'));
