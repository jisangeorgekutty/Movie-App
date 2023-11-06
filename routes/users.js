var express = require('express');
const { route } = require('../app');
var router = express.Router();
var userHelper = require('../helpers/user-helper');
const async = require('hbs/lib/async');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layouts/layout');
});

router.get('/reviews', async (req, res) => {
  let movieid = req.query.id;
  let title = req.query.title;
  let reviewData = await userHelper.findReviews(movieid);
  console.log(reviewData);
  res.render('userview/review', { movieId: movieid, movieTitle: title, reviewData });
})


router.post('/add-review',(req, res) => {
  let movieId = req.query.id;
  let movieTitle = req.query.title;
  let userName = req.body.Name;
  let userReview = req.body.Review;
  userHelper.addReview(movieId, movieTitle, userName, userReview).then(async(respose) => {
    let reviewData = await userHelper.findReviews(movieId);
    res.render('userview/review', { movieId: movieId, movieTitle: movieTitle, reviewData });
  })
})

module.exports = router;
