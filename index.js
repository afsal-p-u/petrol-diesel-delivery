const express = require('express')
const cors = require('cors')
require('dotenv').config()

const db = require('./db')

const authRoutes = require('./routes/AuthRoutes')
const orderRoutes = require('./routes/Order')
const priceRoutes = require('./routes/Prices')

const app = express()
app.use(cors())
app.use(express.json())
db()

app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/prices', priceRoutes)

const port = 5000 || 8000
app.listen(port, console.log('Server Running on Port: ' + port))
