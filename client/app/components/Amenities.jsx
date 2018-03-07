import React from 'react';

const Amenities = (props) => {
  const amenitiesArray = props.amenities.amenitiesList;

  return (
    <div>
      <h2>Amenities</h2>
      <div>
        {
          amenitiesArray.map((amenity) => {
            let title = '';
            if (amenity[2] !== undefined) {
              title = amenity[2];
            }
            if (amenity[1] === true) {
              return <li title={title}>{ amenity[0] } </li>;
            }
            return <li title={title}><s> { amenity[0] } </s> </li>;
          })
        }
      </div>
    </div>
  );
};


export default Amenities;
