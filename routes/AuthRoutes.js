const router = require('express').Router()
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

// register
router.post('/register', async (req, res) => {
    const emailCheck = await User.findOne({email: req.body.email})
    if (emailCheck) {
        return res.status(304).json("Email already exist!")
    }
 
    const newUser = new User({
        ...req.body,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET)
    })
 
    try {
        const savedUser = await newUser.save()

        const accessToken = jwt.sign({
            id: savedUser._id,
            email: savedUser.email,
            isAdmin: savedUser.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1d"}
        )

        return res.status(200).json(accessToken)
    } catch (err) {
        return res.status(500).json(err)
    }
})

// login
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        return res.status(404).json("User not found!")
    }

    const decryptedPassword = await CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET).toString(CryptoJS.enc.Utf8)
    if (decryptedPassword !== req.body.password) {
        return res.status(401).json("Incorrect password!")
    }

    try {
        const accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1d"}
        )

        return res.status(200).json(accessToken)
    } catch (err) {
        return res.status(500).json(err)
    }
})
 
// admin login  
router.post('/admin-login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        return res.status(404).json("User not found!")
    }

    if (!user.isAdmin) {
        return res.status(401).json("Your not authorized to access")
    }

    const decryptedPassword = await CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET).toString(CryptoJS.enc.Utf8)
    if (decryptedPassword !== req.body.password) {
        return res.status(401).json("Incorrect password!")
    }

    try {
        const accessToken = jwt.sign({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {expiresIn: "1d"}
        )

        return res.status(200).json(accessToken)
    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router
