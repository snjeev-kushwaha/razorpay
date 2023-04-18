const app = require('./app');
require('dotenv').config();
const connectDb = require('./config/db');
const Razorpay = require('razorpay')

const instance = new Razorpay({
    key_id: process.env.ROZER_API_KEY,
    key_secret: process.env.ROZER_API_SECRET,
});

connectDb()
// const server = app.listen
app.listen(process.env.PORT, (err) => {
    console.log(`server is connected on port http://localhost:${process.env.PORT}`);
});

// module.exports = { instance }