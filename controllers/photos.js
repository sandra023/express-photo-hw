const express = require('express')
const router = express.Router();
const Photo = require('../models/photos')

router.get('/', async (req,res) => {
    try {
        const photos = await Photo.find();
        res.render('photos/index.ejs', {
            photos: photos
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/new', (req,res) => {
   res.render('photos/new.ejs')
})





module.exports = router