const { resolve, reject } = require('promise');
const collections = require('../config/collections');
var db = require('../config/connection');
const async = require('hbs/lib/async');
const { response } = require('../app');

module.exports={
    addReview:(movieId,movieTitle,userName,userReview)=>{
        let reviewObj={
            movieId:movieId,
            movieTitle:movieTitle,
            userName:userName,
            userReview:userReview
        }
        return new Promise((resolve,reject)=>{
            db.get().collection(collections.REVIEWS_COLLECION).insertOne(reviewObj).then((response)=>{
                resolve({data:reviewObj});
            })
        })
    }
}