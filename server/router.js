let router = require('express').Router();
let controller = require('./controller.js');

router.route('/')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

  module.exports = router;