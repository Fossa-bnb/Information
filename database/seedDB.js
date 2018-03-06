const Rooms = require('./data/Rooms.js');
const saveRoom = require('./saveRooms.js');

Rooms.forEach((room) => {
  saveRoom(room);
});
