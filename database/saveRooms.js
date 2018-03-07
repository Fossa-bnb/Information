const Room = require('./roomSchema.js');
// const Promise = require('bluebird');

const saveRooms = (incomingRoom) => {
  Room.remove({}, (err) => {
    if (err) {
      console.log('ERROR - Bad db remove: ', err);
    }
  });

  const fakeRoom = new Room({
    id: incomingRoom.id,
    title: incomingRoom.title,
    city: incomingRoom.city,
    hostLocation: incomingRoom.hostLocation,
    hostName: incomingRoom.hostName,
    hostDateJoind: incomingRoom.hostDateJoind,
    hostEmail: incomingRoom.hostEmail,
    hostImageUrl: incomingRoom.hostImageUrl,
    mapUrl: incomingRoom.mapUrl,
    roomType: incomingRoom.roomType,
    hostLanguage: incomingRoom.hostLanguage,
    hostResponceTime: incomingRoom.hostResponceTime,
    bedType: incomingRoom.bedType,
    bedArea: incomingRoom.bedArea,
    essDescrip: incomingRoom.essDescrip,
    heatDescrip: incomingRoom.hostDescription,
    airDescrip: incomingRoom.airDescrip,
    petDescrip: incomingRoom.petDescrip,
    breakfastDescrip: incomingRoom.breakfastDescrip,
    roomDescription: incomingRoom.roomDescription,
    spaceDescription: incomingRoom.spaceDescription,
    guestAccessDescription: incomingRoom.guestAccessDescription,
    interactionDescription: incomingRoom.interactionDescription,
    otherDescription: incomingRoom.otherDescription,
    houseRulesDescription: incomingRoom.houseRulesDescription,
    canclePolicyDescription: incomingRoom.canclePolicyDescription,
    neighborhoodDescription: incomingRoom.neighborhoodDescription,
    hostDescription: incomingRoom.hostDescription,
    rooms: incomingRoom.rooms,
    bed: incomingRoom.bed,
    bath: incomingRoom.bath,
    guest: incomingRoom.guest,
    hostReviews: incomingRoom.hostReviews,
    hostResponceRate: incomingRoom.hostResponceRate,
    essentials: incomingRoom.essentials,
    wifi: incomingRoom.wifi,
    shampoo: incomingRoom.shampoo,
    closetDrawers: incomingRoom.closetDrawers,
    tv: incomingRoom.tv,
    heating: incomingRoom.heating,
    airConditioning: incomingRoom.airConditioning,
    breakfast: incomingRoom.breakfast,
    deskWorkspace: incomingRoom.deskWorkspace,
    petFriendly: incomingRoom.petFriendly,
    carbonDetector: incomingRoom.carbonDetector,
    firstAid: incomingRoom.firstAid,
    fireExtinguisher: incomingRoom.fireExtinguisher,
    smokeDetector: incomingRoom.smokeDetector,
    hostVarified: incomingRoom.hostVarified,
  });

  // const saveRoomAsync = (room2Save) => {
  //   return new Promise((resolve, reject) => {
  //     room2Save.save((err) => {
  //       if (err) reject(err);
  //       else resolve();
  //     });
  //   });
  // };

  // saveRoomAsync(fakeRoom);


  fakeRoom.save((err, fakeroom) => {
    if (err) console.error(err);
    if (fakeroom) console.log('Saved Room: ', fakeroom.id);
  });
};

module.exports = saveRooms;
