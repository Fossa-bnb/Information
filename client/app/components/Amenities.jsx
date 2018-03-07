import React from 'react';

const Amenities = (props) => {
  const amenitiesArray = props.amenities.amenitiesList;
  // amenities[0] - amenities Name
  // amenities[1] - ammenites exsists
  // amenities[2] - ammenities popUp message

  return (
    <div>
      <h2>Amenities</h2>
      <div>
        {
          amenitiesArray.map((amenity) => {
            let popUpDescrip = '';
            // not all of the amenities have popUp descriptions
            if (amenity[2] !== undefined) {
              // if has a popUp description
              popUpDescrip = amenity[2];
            }
            if (amenity[1] === true) {
              // popUpDescrip tag renders a pop up with text when hovered over the item.
              return <li tittle={popUpDescrip}>{ amenity[0] } </li>;
            }
            return <li title={popUpDescrip}><s> { amenity[0] } </s> </li>;
          })
        }
      </div>
    </div>
  );
};


export default Amenities;
