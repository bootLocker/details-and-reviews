const faker = require('Faker');
const db2 = require('./index.js');

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
      const questionObject = db2.Question(createQuestion());
      questions.push(questionObject);
    }
  }
  return questions;
};

const generateAnswers = () => {
  const answers = [];
  const numberOfAnswers = Math.ceil(Math.random() * 3);
  for (let i = 0; i < numberOfAnswers; i += 1) {
    const answerObject = db2.Answer(createAnswer());
    answers.push(answerObject);
  }
  return answers;
};

const seedDatabase = () => {
  shoes.forEach((shoe) => {
    const post = db2.Container(createContainer(shoe));
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
