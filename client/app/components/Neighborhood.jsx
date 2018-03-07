import React from 'react';

const Neighborhood = props => (
  <div>
    <h2>The neighborhood</h2>
    <p>{ props.neighborhood.neighborhoodDescription }</p>
    <img src={props.neighborhood.mapUrl} alt="MapImage" />
    <div>Exact location information is provided after a booking is confirmed.</div>
    <br />
  </div>
);

export default Neighborhood;
