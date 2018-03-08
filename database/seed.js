
const seeder = require('mongoose-seed');
const data = require('./data/Rooms');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/airbnbInfo', () => {
  // Load Mongoose models
  seeder.loadModels([
    'roomModel.js',
  ]);
  // Clear specified collections
  seeder.clearModels(['Room'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
