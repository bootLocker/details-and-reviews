let router = require('express').Router();
let controller = require('./controller.js');

router.route('/reviews')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

router.route('/questions/:name')
  .get(controller.getQuestions);

module.exports = router;