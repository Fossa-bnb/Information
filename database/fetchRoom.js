const mongoose = require('mongoose');
const Room = require('./roomSchema.js');

mongoose.connect('mongodb://localhost/airbnbInfo');

const fetchRoom = (roomId, callback) => {
  Room.find({ id: roomId })
    .exec((err, room) => {
      if (err) return handleError(err);
      callback(room);
    });
};

module.exports = fetchRoom;
