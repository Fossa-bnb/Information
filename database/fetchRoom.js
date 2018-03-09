const Room = require('./data/roomModel');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnbInfo');

const fetchRoom = (roomId, callback) => {
  Room.find({ id: roomId })
    .exec((err, room) => {
      if (err) {
        console.log('Fetch Room Error:');
      } else {
        callback(null, room);
      }
    });
};

module.exports = fetchRoom;
