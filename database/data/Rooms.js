const faker = require('faker');

const rooms = [];

// create fake room data using faker
for (let i = 1; i < 101; i += 1) {
  rooms.push({
    id: i,
    title: faker.company.catchPhrase(),
    city: faker.address.city(),
    hostLocation: `${faker.address.city()} ${faker.address.country()}`,
    hostName: faker.name.firstName(),
    hostDateJoined: `${faker.date.month()} ${faker.random.number({ min: 2008, max: 2017 })}`,
    hostWarning: faker.hacker.phrase(),
    hostImageUrl: faker.image.avatar(),
    mapUrl: faker.image.city(),
    roomType: faker.company.catchPhraseDescriptor(),
    hostLanguage: faker.lorem.word(),
    hostResponseTime: faker.company.bsAdjective(),
    bedType: faker.company.catchPhraseDescriptor(),
    essDescrip: faker.lorem.sentence(5),
    heatDescrip: faker.lorem.sentence(4),
    airDescrip: faker.lorem.sentence(4),
    petDescrip: faker.lorem.sentence(8),
    breakfastDescrip: faker.lorem.sentence(6),
    roomDescription: faker.lorem.paragraphs(3),
    spaceDescription: faker.lorem.paragraph(5),
    guestAccessDescription: faker.lorem.paragraph(5),
    interactionDescription: faker.lorem.paragraph(),
    otherDescription: faker.lorem.paragraph(),
    houseRulesDescription: faker.lorem.paragraph(4),
    cancelPolicyDescription: faker.lorem.paragraph(5),
    neighborhoodDescription: faker.lorem.paragraph(5),
    hostDescription: faker.lorem.paragraphs(),
    room: faker.random.number({ min: 1, max: 50 }),
    bed: faker.random.number({ min: 1, max: 50 }),
    bath: faker.random.number({ min: 1, max: 50 }),
    guest: faker.random.number({ min: 1, max: 100 }),
    hostReviews: faker.random.number({ min: 1, max: 10000 }),
    hostResponseRate: faker.random.number({ min: 1, max: 100 }),
    essentials: faker.random.boolean(),
    wifi: faker.random.boolean(),
    shampoo: faker.random.boolean(),
    closetDrawers: faker.random.boolean(),
    tv: faker.random.boolean(),
    heating: faker.random.boolean(),
    airConditioning: faker.random.boolean(),
    breakfast: faker.random.boolean(),
    deskWorkspace: faker.random.boolean(),
    petFriendly: faker.random.boolean(),
    carbonDetector: faker.random.boolean(),
    firstAid: faker.random.boolean(),
    fireExtinguisher: faker.random.boolean(),
    smokeDetector: faker.random.boolean(),
    hostVerified: faker.random.boolean(),
  });
}


// Data array containing seed data - documents organized by Model
// Format needed for mongoose-seed library.
const data = [
  {
    model: 'Room',
    documents: rooms,
  },
];

module.exports = data;
