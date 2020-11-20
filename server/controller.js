let Reviews = require('./db/Reviews.js');

let controller = {
  get: (req, res) => {
    res.status(200).send('get');
  },

  post: (req, res) => {
    res.status(200).send('post');
  },

  delete: (req, res) => {
    res.status(200).send('delete');
  },
}

module.exports = controller;