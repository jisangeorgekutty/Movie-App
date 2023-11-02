var express = require('express');
const { route } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layouts/layout');
});

router.get('/reviews', (req, res, next) => {
  let movieId=req.query.id;
  let title=req.query.title;
  res.render('userview/review');
})


module.exports = router;
