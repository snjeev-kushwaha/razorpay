const express = require('express')

const paymentRoute = express.Router();

const { checkout, paymentVerification } = require('../controllers/paymentController');

paymentRoute.route('/checkout').post(checkout)

paymentRoute.route('/paymentverification').post(paymentVerification)

module.exports = { paymentRoute }