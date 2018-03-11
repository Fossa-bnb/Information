import React from 'react';

const Amenities = (props) => {
  const amenitiesArray = props.amenities.amenitiesList;
  // amenity[0] - ammenities Name
  // amenity[1] - ammenities exsists
  // amenity[2] - ammenities .png
  // amenity[3] - ammenities popUp message

  return (
    <div>
      <h2>Amenities</h2>
      <div>
        {
          amenitiesArray.map((amenity) => {
            let popUpDescrip = '';
            // not all of the amenities have popUp descriptions
            if (amenity[3] !== undefined) {
              // if has a popUp description
              popUpDescrip = amenity[3];
            }
            if (amenity[1] === true) {
              // popUpDescrip tag renders a pop up with text when hovered over the item.
              return (
                <div>
                  <img className="icons" src={amenity[2]} alt={amenity[0]} />
                  <section className="amenities" title={popUpDescrip}>{ amenity[0] } </section>
                </div>
              );
            }
            return (
              <div>
                <img className="icons" src={amenity[2]} alt={amenity[0]} />
                <section className="amenities" title={popUpDescrip}><s> { amenity[0] } </s> </section>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};


export default Amenities;
