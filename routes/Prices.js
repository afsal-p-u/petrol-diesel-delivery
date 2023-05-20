const router = require('express').Router()

const Petrol = require('../models/Petrol')
const Diesel = require('../models/Diesel')

// get current petrol price 
router.get('/pet', async (req, res) => {
    try {
        const currentPricePetrol = await Petrol.find()
        return res.status(200).json(currentPricePetrol)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get current diesel price 
router.get('/die', async (req, res) => {
    try {
        const currentPriceDiesel = await Diesel.find()
        return res.status(200).json(currentPriceDiesel)
    } catch (err) {
        return res.status(500).json(err) 
    }
})

// add petrol price
router.post('/pet', async (req, res) => {

    await Petrol.deleteMany()

    const price = new Petrol({
        ...req.body
    })

    try {
        const savedPrice = await price.save()
        return res.status(200).json(savedPrice)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// add diesel price
router.post('/die', async (req, res) => {

    await Diesel.deleteMany()

    const price = new Diesel({
        ...req.body
    })

    try {
        const savedPrice = await price.save()
        return res.status(200).json(savedPrice)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router  