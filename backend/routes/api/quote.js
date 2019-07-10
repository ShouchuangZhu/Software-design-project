const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check')
//Post
const User = require('../../models/User');
const Quote = require('../../models/Quote');
const Pricing = require('../../models/Pricing')


router.post('/', [auth, 
   [check('gallonRequested', 'gallonRequested is required').not().isEmpty(), 
    check('date', 'date is required').not().isEmpty(),
    check('price', 'price is required').not().isEmpty(),
    check('deliveryAddress1', 'Please enter delivery address').isLength({max: 100}).not().isEmpty(),
    check('deliveryAddress2', 'Please enter delivery address').isLength({max: 100}),
    check('city', 'city is required').isLength({max:100}).not().isEmpty(),
    check('zipcode', 'zipcode is required').isLength({min:5, max:9}).not().isEmpty(),
    check('state', 'state is required').isLength({min:2, max: 2}).not().isEmpty(),
    check('totalAmountDue', 'totalAmountDue is required').not().isEmpty(),
                         ]
                 ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
            }
    const {
        gallonRequested,
        date,
        price,
        deliveryAddress1,
        deliveryAddress2,
        city,
        zipcode,
        state,
        totalAmountDue
    } = req.body;

    //Build quote object
    const quoteFields = {};
    quoteFields.user = req.user.id;
    if (gallonRequested) quoteFields.gallonRequested = gallonRequested;
    if (date) quoteFields.date = date;
    if (price) quoteFields.price = price;
    if (deliveryAddress1) quoteFields.deliveryAddress1 = deliveryAddress1;
    if (deliveryAddress2) quoteFields.deliveryAddress2 = deliveryAddress2;
    if (city) quoteFields.city = city;
    if (zipcode) quoteFields.zipcode = zipcode;
    if (state) quoteFields.state = state;
    if (totalAmountDue) quoteFields.totalAmountDue = totalAmountDue;

    try {
        let quote = await Quote.findOne({ user: req.user.id });

        //Create
        quote = new Quote(quoteFields);
        await quote.save();
        res.json(quote);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});




//get quote history
router.get('/', auth, async (req, res)=>{
 try {
    const quotes = await Quote.find({user: req.user.id});
    res.json(quotes);
 } catch(err) {
    console.error(err.message);
    res.status(500).send('server error');
 }
})

module.exports = router;