const mongoose = require('mongoose')

const BookRideSchema = new mongoose.Schema({
    name: {type: String, required: true},
    contact: {type: Number, required: true},
    city: {type: String, default: "balmatta"},
    address: {type: String, required: true},
    company: {type: String, default: "hidustanPetroleum"},
    litre: {type: Number, required: true},
    category: {type: String, required: true},
    paymentMethod: {type: String, default: "cashOnDelivery"},
    total: {type: Number, required: true},
    status: {type: String, default: "pending"}
})

module.exports = mongoose.model("services", BookRideSchema)