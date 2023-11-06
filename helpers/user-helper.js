const { resolve, reject } = require('promise');
const collections = require('../config/collections');
var db = require('../config/connection');
const async = require('hbs/lib/async');
const { response } = require('../app');
var objectId = require('mongodb').ObjectId

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
    },

    findReviews:(reqMovieId)=>{
        return new Promise(async(resolve,reject)=>{
            console.log(reqMovieId);
            let reviewCollection=await db.get().collection(collections.REVIEWS_COLLECION).find({movieId:reqMovieId}).toArray();
            // console.log(reviewCollection)
            resolve(reviewCollection);
        })
    }
}