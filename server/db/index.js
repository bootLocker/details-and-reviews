let mongoose = require('mongoose');
let mongoUri = 'mongodb://database/reviews';
mongoose.promise = global.Promise;

var db = mongoose.connect(mongoUri)
  .then(() => {
    console.log('Database connected');
  });

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

module.exports = { Answer, Question, Container, db };

// module.exports = db;