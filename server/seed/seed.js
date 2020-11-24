let db = require('../db/');
let Reviews = require('../db/Reviews.js');
let faker = require('faker');

let seedFunc = () => {
  let ageRangeOptions = [
    '17 or under',
    '18 to 24',
    '25 to 34',
    '35 to 44',
    '45 to 54',
    '55 to 64',
    '65 or over'
  ];

  let shoeNames = ['adidas-d-o-n-issue-2-mens', 'jordan-aj-1-mid-mens', 'nike-air-max-270-mens', 'nike-kd-13-mens'];

  let seedObjects = [];

  for (let i = 0; i < 1017; i++) {
    let randomAgeRangeIndex = Math.floor(Math.random() * ageRangeOptions.length);

    let randomImages = [];

    let randomNumberOfImages = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfImages; j++) {
      randomImages.push(faker.image.imageUrl());
    }

    let pros = [];

    let randomNumberOfPros = Math.floor(Math.random() * 5);
    for (let j = 0; j < randomNumberOfPros; j++) {
      pros.push(faker.lorem.word());
    }

    let cons = [];
    let randomNumberOfCons = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfCons; j++) {
      cons.push(faker.lorem.word());
    }

    let randomShoeIndex = Math.floor(Math.random() * shoeNames.length);

    let seedObject = {
      shoeName: shoeNames[randomShoeIndex],
      nickname: faker.name.findName(),
      location: faker.address.city(),
      email: faker.internet.email(),
      ageRange: ageRangeOptions[randomAgeRangeIndex],
      gender: faker.name.gender(),
      title: faker.lorem.words(),
      body: faker.lorem.paragraph(),
      photos: randomImages,
      pros: pros,
      cons: cons,
      recommended: faker.random.boolean(),
      overallRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      qualityRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      valueRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      timeCreated: faker.date.past(),
      votes: Math.floor(Math.random() * 8),
      helpful: faker.random.boolean()
    };

    seedObjects.push(seedObject);
  }

  Reviews.deleteMany({})
    .then(() => {
      Reviews.create(seedObjects)
        .then(() => {
          console.log('Seeded');
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

seedFunc();