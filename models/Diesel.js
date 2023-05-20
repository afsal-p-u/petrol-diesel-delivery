const mongoose = require('mongoose')

const DieselSchema = new mongoose.Schema({
    diesel: {type: Number, required: true}
})

module.exports = mongoose.model('DieselSchema', DieselSchema)