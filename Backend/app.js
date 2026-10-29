const dotenv = require('dotenv');
dotenv.config()
const express = require ('express');
const cors = require('cors');
const app = express();
const connectToMongo = require('./db/db')
const cookieParser = require('cookie-parser');

const userRoutes = require('./routs/user.routs')
app.use(express.json())
app.use(cookieParser())

app.use(cors())
app.use(express.urlencoded({ extended: true }))

connectToMongo();
app.get('/', (req, res) => {
    res.send('Welcome to the Backend');
})
app.use('/users', userRoutes);


module.exports = app;