const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_TOKEN
})

router.get('/pricing', checkAuth ,(req, res) => {
    var user = req.user
    res.render('pricing', {NavTitle: 'Pricing' , user})
})

router.post('/order', (req, res) => {
    let amount = req.body.amount;
    let option = {
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt#1"
    }
    instance.orders.create(option, (err, order) => {
        res.send(order)
    })
})

module.exports = router