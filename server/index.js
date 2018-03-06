const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const App = express();

// mongoose.connect()

App.use(bodyParser.json());

App.use(express.static(`${__dirname}/../client`));

App.listen(3003, () => {
  console.log('listening on port 3003');
});
