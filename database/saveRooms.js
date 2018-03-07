const Room = require('./roomSchema.js');

const saveRooms = (incomingRoom) => {
  const fakeRoom = new Room({
    id: incomingRoom.id,
    title: incomingRoom.title,
    city: incomingRoom.city,
    hostLocation: incomingRoom.hostLocation,
    hostName: incomingRoom.hostName,
    hostDateJoined: incomingRoom.hostDateJoined,
    hostWarning: incomingRoom.hostWarning,
    hostImageUrl: incomingRoom.hostImageUrl,
    mapUrl: incomingRoom.mapUrl,
    roomType: incomingRoom.roomType,
    hostLanguage: incomingRoom.hostLanguage,
    hostResponseTime: incomingRoom.hostResponceTime,
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
    cancelPolicyDescription: incomingRoom.cancelPolicyDescription,
    neighborhoodDescription: incomingRoom.neighborhoodDescription,
    hostDescription: incomingRoom.hostDescription,
    room: incomingRoom.room,
    bed: incomingRoom.bed,
    bath: incomingRoom.bath,
    guest: incomingRoom.guest,
    hostReviews: incomingRoom.hostReviews,
    hostResponseRate: incomingRoom.hostResponceRate,
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
    hostVerified: incomingRoom.hostVarified,
  });
  fakeRoom.save((err, fakeroom) => {
    if (err) console.error(err);
    if (fakeroom) console.log('Saved Room: ', fakeroom.id);
  });
};

module.exports = saveRooms;
