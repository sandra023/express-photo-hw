const mongoose = require('mongoose')

const photoSchema = mongoose.Schema({
    title: String,
    url: String,
    // users: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }]
})

const Photo = mongoose.model('Photo', photoSchema)
module.exports = Photo