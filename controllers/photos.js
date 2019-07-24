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

router.post('/', async (req,res) => {
    try{ 
        const newPhoto = await Photo.create(req.body)
        console.log(newPhoto)
        res.redirect('photos')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/:id', async (req,res) => {
    try{ 
        const photo = await Photo.findById(req.params.id)
        res.render('photos/show.ejs', {
            photo: photo
        })
        photo: photo
    }catch(err){
        console.log(err)
        res.send(err)
    }
})



module.exports = router