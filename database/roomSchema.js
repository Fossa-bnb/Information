const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnbInfo');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const roomSchema = mongoose.Schema({
  id: Number,
  title: String,
  city: String,
  hostLocation: String,
  hostName: String,
  hostDateJoind: String,
  hostEmail: String,
  hostImageUrl: String,
  mapUrl: String,
  type: String,
  hostLanguage: String,
  hostResponceTime: String,
  bedType: String,
  bedArea: String,
  essDescrip: String,
  heatDescrip: String,
  airDescrip: String,
  petDescrip: String,
  breakfastDescrip: String,
  description: String,
  spaceDescription: String,
  guestAccessDescription: String,
  interactionDescription: String,
  otherDescription: String,
  houseRulesDescription: String,
  canclePolicyDescription: String,
  neighborhoodDescription: String,
  hostDescription: String,
  rooms: Number,
  bed: Number,
  bath: Number,
  hostReviews: Number,
  hostResponceRate: Number,
  essentials: Boolean,
  wifi: Boolean,
  shampoo: Boolean,
  closetDrawers: Boolean,
  tv: Boolean,
  heating: Boolean,
  airConditioning: Boolean,
  breakfast: Boolean,
  deskWorkspace: Boolean,
  petFriendly: Boolean,
  carbonDetector: Boolean,
  firstAid: Boolean,
  fireExtinguisher: Boolean,
  smokeDetector: Boolean,
  hostVarified: Boolean,
});

const Rooms = mongoose.model('Roons', roomSchema);


module.exports = Rooms;
