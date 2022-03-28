const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    email: String,
    name: String,
    description: String,
    image: String
})

const Technology = mongoose.model('Technology', technologySchema);

module.exports = Technology;