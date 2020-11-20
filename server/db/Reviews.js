let mongoose = require('mongoose');

let reviewsSchema = new mongoose.Schema({
  shoeName: String,
  nickname: String,
  location: String,
  email: String,
  ageRange: String,
  gender: String,
  title: String,
  body: String,
  photos: [{type: String}],
  recommended: Boolean,
  overallRating: Number,
  qualityRating: Number,
  valueRating: Number,
  timeCreated: String,
  votes: Number,
  helpful: Boolean
});

let Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;