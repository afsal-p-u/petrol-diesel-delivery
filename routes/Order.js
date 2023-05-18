const router = require('express').Router()
const Order = require('../models/Order')

// new order
router.post('/new', async (req, res) => {
    // const statusCheck = await Order.findOne({status: "pending"})
    // if (statusCheck) {
    //     return res.status(400).json("You have an uncompleted services!")
    // }
    
    const newOrder = new Order({
        ...req.body 
    })
    
    try {
        const savedOrder = await newOrder.save()
        return res.status(200).json(savedOrder)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get current orders
router.get('/', async (req, res) => {
    try {
        const current = await Order.find({status: "pending"})
        return res.status(200).json(current)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// cancel order
router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        return res.status(200).json("Deleted Successfully")
    } catch (err) {
        return res.status(500).json(err)
    }
})


// admin
// get all status pending orders
router.get('/uncompleted', async (req, res) => {
    try {
        const uncompleted = await Order.find({status: "pending"})
        return res.status(200).json(uncompleted)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// mark as completed order
router.put('/:id', async (req, res) => {
    try {
        const modifiedItem = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(modifiedItem)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// get completed orders
router.get('/completed', async (req, res) => {
    try {
        const completedList = await Order.find({status: "completed"}).sort({id: -1}).limit(5)
        return res.status(200).json(completedList)
    } catch (err) {
        return res.status(200).json(err)
    }
})



module.exports = router