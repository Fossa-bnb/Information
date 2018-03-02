const mongoose = require('mongoose');
const Rooms = require('./roomSchema.js');

mongoose.connect('mongodb://localhost/airbnbInfo');


const saveRooms = (incomingRoom) => {

  let fakeRoom = new Rooms({
    id: incomingRoom.id,
    title: incomingRoom.title,
    city: incomingRoom.city,
    hostLocation: incomingRoom.hostLocation,
    hostName: incomingRoom.hostName,
    hostDateJoind: incomingRoom.hostDateJoind,
    hostEmail: incomingRoom.hostEmail,
    hostImageUrl: incomingRoom.hostImageUrl,
    mapUrl: incomingRoom.mapUrl,
    type: incomingRoom.type,
    hostLanguage: incomingRoom.hostLanguage,
    hostResponceTime: incomingRoom.hostResponceTime,
    bedType: incomingRoom.bedType,
    bedArea: incomingRoom.bedArea,
    essDescrip: incomingRoom.essDescrip,
    heatDescrip: incomingRoom.hostDescription,
    airDescrip: incomingRoom.airDescrip,
    petDescrip: incomingRoom.petDescrip,
    breakfastDescrip: incomingRoom.breakfastDescrip,
    description: incomingRoom.description,
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

  fakeRoom.save((err, fakeroom) => {
    if (err) return console.error(err);
    if (fakeroom) return console.log('Saved Room: ', fakeroom.id);
  });
};

module.exports = saveRooms;
