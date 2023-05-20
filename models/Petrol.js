const mongoose = require('mongoose')

const PetrolSchema = new mongoose.Schema({
    petrol: {type: Number, required: true},
})

module.exports = mongoose.model('PetrolSchema', PetrolSchema)