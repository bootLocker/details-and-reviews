const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/QA',
  { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to Phillip\'s mongoose'));

const answerSchema = mongoose.Schema({
  nickName: String,
  date: Date,
  response: String,
  helpfulScore: Number,
  nonHelpfulScore: Number,
});

const questionSchema = mongoose.Schema({
  nickName: String,
  date: Date,
  query: String,
  answers: [answerSchema],
});

const containerSchema = mongoose.Schema({
  name: { type: String, unique: true },
  questions: [questionSchema],
});

const Answer = mongoose.model('answer', answerSchema);
const Question = mongoose.model('question', questionSchema);
const Container = mongoose.model('container', containerSchema);

module.exports = { Answer, Question, Container };
