const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check')
//Post
const User = require('../../models/User');
const Quote = require('../../models/Quote');

router.get('/quote', auth, async (req, res)=>{
    try {
        const quote = await Quote.findOne({ user: req.user.id }).populate('user', ['name']);

        if(!quote){
            return res.status(400).json({msg: 'This user does not have a quote'});
        }
        res.json(quote);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', [auth, [check('gallonRequested', 'gallonRequested is required').not().isEmpty(), 
                         check('date', 'date is required').not().isEmpty(),
                         check('price', 'price is required').not().isEmpty(),
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
        totalAmountDue
    } = req.body;

    //Build quote object
    const quoteFields = {};
    quoteFields.user = req.user.id;
    if (gallonRequested) quoteFields.gallonRequested = gallonRequested;
    if (date) quoteFields.date = date;
    if (price) quoteFields.price = price;
    if (totalAmountDue) quoteFields.totalAmountDue = totalAmountDue;

    try {
        let quote = await Quote.findOne({ user: req.user.id });
        //Update
        if(quote){
            quote = await Quote.findOneAndUpdate({ user: req.user.id }, { $set: quoteFields }, { new: true});
            return res.json(quote);
        };
        

        //Create
        quote = new Quote(quoteFields);
        await quote.save();
        res.json(quote);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});

//get quote
router.get('/', async (req, res)=>{
 try {
    const quotes = await Quote.find().populate('user', ['name']);
    res.json(quotes);
 } catch(err) {
    console.error(err.message);
    res.status(500).send('server error');
 }
})

module.exports = router;