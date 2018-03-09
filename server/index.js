const express = require('express');
const bodyParser = require('body-parser');
const fetchRoom = require('../database/fetchRoom');
const cors = require('cors');

const App = express();

App.use(cors());

App.use(bodyParser.json());

App.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

App.use(express.static(`${__dirname}/../client`));

App.get('/:id', (req, res) => {
  fetchRoom(req.params.id, (err, room) => {
    if (err) {
      console.log('ERROR - fetching room:');
    } else {
      res.send(room);
    }
  });
});

App.listen(3003, () => {
  console.log('CORS-enabled web server listening on port 3003');
});
