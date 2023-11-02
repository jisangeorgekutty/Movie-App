var express = require('express');
const { route } = require('../app');
var router = express.Router();
var userHelper=require('../helpers/user-helper');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('layouts/layout');
});

router.get('/reviews', (req, res, next) => {
  let movieid=req.query.id;
  let title=req.query.title;
  res.render('userview/review',{movieId:movieid,movieTitle:title});
})

router.post('/add-review',(req,res)=>{
  let movieId=req.query.id;
  let movieTitle=req.query.title;
  let userName=req.body.Name;
  let userReview=req.body.Review;
  console.log(userName)
  console.log(userReview)
  userHelper.addReview(movieId,movieTitle,userName,userReview).then((respose)=>{

  })
})

module.exports = router;
