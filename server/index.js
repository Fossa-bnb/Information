const express = require('express');
const bodyParser = require('body-parser');
const fetchRoom = require('../database/fetchRoom');

const App = express();

App.use(bodyParser.json());

App.use(express.static(`${__dirname}/../client`));

App.get('/:roomID', (req, res) => {
  fetchRoom(req.params.roomID, (err, room) => {
    if (err) {
      console.log(`ERROR - fetching room: ${err}`);
    } else {
      res.send(room);
    }
  });
});

App.listen(3003, () => {
  console.log('listening on port 3003');
});
