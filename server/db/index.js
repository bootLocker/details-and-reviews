let mongoose = require('mongoose');
let mongoUri = 'mongodb://localhost/reviews';
mongoose.promise = global.Promise;

var db = mongoose.connect(mongoUri)
  .then(() => {
    console.log('Database connected');
  });

module.exports = db;