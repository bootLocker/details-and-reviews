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

  for (let i = 0; i < 100; i++) {
    let randomAgeRangeIndex = Math.floor(Math.random() * ageRangeOptions.length);

    let randomImages = [];

    let randomNumberOfImages = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfImages; j++) {
      randomImages.push(faker.image.imageUrl());
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

const shoes = [
  'Nike KD 13',
  'Nike Air Vapormax Plus',
  'Nike Air Max 270',
  'Jordan AJ 1 Mid',
  'adidas D.O.N. ISSUE #2'];

const createContainer = (shoe) => {
  const container = {};
  const underscoreShoe = shoe.replace(/[^\w\s]/gi, '').replace(/\s/g, '_');
  container.name = underscoreShoe.toLowerCase();
  return container;
};

const createQuestion = () => {
  const question = {};
  question.nickName = faker.internet.userName().toLowerCase();
  question.date = faker.date.past();
  question.query = faker.lorem.sentence().replace('.', '?');
  return question;
};

const createAnswer = () => {
  const answer = {};
  answer.nickName = faker.internet.userName().toLowerCase();
  answer.date = faker.date.past();
  answer.response = faker.lorem.sentences();
  answer.helpfulScore = Math.ceil(Math.random() * 3);
  answer.nonHelpfulScore = Math.floor(
    Math.random() * answer.helpfulScore
  );
  return answer;
};

const generateQuestions = () => {
  const questions = [];
  const questionProbability = Math.ceil(Math.random() * 10);
  if (questionProbability >= 5) {
    const numberOfQuestions = Math.floor(Math.random() * 30);
    for (let i = 0; i < numberOfQuestions; i += 1) {
      const questionObject = db.Question(createQuestion());
      questions.push(questionObject);
    }
  }
  return questions;
};

const generateAnswers = () => {
  const answers = [];
  const numberOfAnswers = Math.ceil(Math.random() * 3);
  for (let i = 0; i < numberOfAnswers; i += 1) {
    const answerObject = db.Answer(createAnswer());
    answers.push(answerObject);
  }
  return answers;
};

const seedDatabase = () => {
  shoes.forEach((shoe) => {
    const post = db.Container(createContainer(shoe));
    const questions = generateQuestions();
    questions.forEach((question) => {
      const replies = generateAnswers();
      question.answers = replies;
      post.questions.push(question);
    });
    post.save();
  });
};

seedDatabase();

seedFunc();