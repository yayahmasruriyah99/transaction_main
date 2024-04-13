const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.SERVER_PORT || 4000
const path = require('path')

const authRoutes = require('./routes/auth.route')
const userRoutes = require('./routes/user.route')
const informationRoutes = require('./routes/information.route')
const transactionRoutes = require('./routes/transaction.route')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(authRoutes)
app.use(userRoutes)
app.use(informationRoutes)
app.use(transactionRoutes)




app.listen(port, () => {
    console.log("Server running on Port " + port)
})