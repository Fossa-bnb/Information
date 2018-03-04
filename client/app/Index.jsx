import React from 'react';
import RenderDOM from 'react-dom';

const App = () => (
  <p>This Rendered</p>
);

RenderDOM.render(<App />, document.getElementById('app'));
