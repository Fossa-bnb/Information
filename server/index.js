const express = require('express');
const bodyParser = require('body-parser');
const fetchRoom = require('../database/fetchRoom');
const cors = require('cors');

require('dotenv').config();

const PORT = parseInt(process.env.PORT) || 3003;

const App = express();

App.use(cors());

App.use(bodyParser.json());

App.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

App.use('/', express.static(`${__dirname}/../client`));

App.get('/:id', (req, res) => {
  fetchRoom(req.params.id, (err, room) => {
    if (err) {
      console.log('ERROR - fetching room:');
    } else {
      res.send(room);
    }
  });
});

App.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
