const mongoose = require('mongoose');
const Rooms = require('./roomSchema.js');

mongoose.connect('mongodb://localhost/airbnbInfo');

const fetchRoom = (roomId, callback) => {
  Rooms.find({ id: roomId })
    .exec((err, room) => {
      if (err) return handleError(err);
      callback(room);
    });
};

module.exports = fetchRoom;
