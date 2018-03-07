import React from 'react';

const Amenities = (props) => {
  const amenitiesArray = props.amenities.amenitiesList;

  return (
    <div>
      <h2>Amenities</h2>
      <div>
        {
          amenitiesArray.map((amenity) => {
            if (amenity[1] === true) {
              return <li>{ amenity[0] } </li>;
            }
              return <li><s> { amenity[0] } </s> </li>;
          })
        }
      </div>
    </div>
  );
};


export default Amenities;
