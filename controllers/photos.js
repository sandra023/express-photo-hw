const express = require('express')
const router = express.Router();
const Photo = require('../models/photos')

router.get('/', (req,res) => {
    Photo.find({}, (err, photos) => {
        console.log(photos, "array of photos index route")
        if (err) {
            res.send(err)
        } else {
            res.render('./photos/index.ejs', {
                photos: photos
            })
        }
    })
})

module.exports = router