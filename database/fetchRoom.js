const Room = require('./roomSchema.js');

const fetchRoom = (roomId, callback) => {
  Room.find({ id: roomId })
    .exec((err, room) => {
      if (err) {
        console.log('Fetch Room Error:', err);
      } else {
        callback(null, room);
      }
    });
};

module.exports = fetchRoom;
