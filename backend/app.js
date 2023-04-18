const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const { paymentRoute } = require('./routes/paymentRoute')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/api', paymentRoute)

app.get('/api/getkey', (req, res) => {
    res.status(200).json({ key: process.env.ROZER_API_KEY })
})

module.exports = app