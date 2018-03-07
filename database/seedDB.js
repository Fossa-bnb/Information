const Rooms = require('./data/Rooms.js');
const saveRoom = require('./saveRooms.js');
// const mongoose = require('mongoose');
// const Promise = require('bluebird');

Rooms.forEach((room) => {
  saveRoom(room);
});

// Tried to get the close to work, but having issues with the way I wrote it
// Will come back to this
// const rooms = [];
// Rooms.forEach((room) => {
//   rooms.push(saveRoom(room));
// });

// Promise.all(rooms).then(() => {
//   mongoose.disconnect(() => {
//     console.log('Seeded database');
//     console.log('Database connection closed');
//   });
// });

