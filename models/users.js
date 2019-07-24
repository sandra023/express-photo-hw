const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.Schema('User', userSchema)
module.exports = User