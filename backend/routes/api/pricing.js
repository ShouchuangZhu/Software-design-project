const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check')
const Pricing = require('../../models/Pricing');


// pricing
router.post('/', [auth, 
    [check('gallonRequested', 'gallonRequested is required').not().isEmpty(), 
     check('date', 'date is required').not().isEmpty(),   
     check('deliveryAddress1', 'Please enter delivery address').isLength({max: 100}).not().isEmpty(),
     check('deliveryAddress2', 'Please enter delivery address').isLength({max: 100}),
     check('city', 'city is required').isLength({max:100}).not().isEmpty(),
     check('zipcode', 'zipcode is required').isLength({min:5, max:9}).not().isEmpty(),
     check('state', 'state is required').isLength({min:2, max: 2}).not().isEmpty(),
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
         deliveryAddress1,
         deliveryAddress2,
         city,
         zipcode,
         state,
     } = req.body;

 
     //Build pricing object
    let pricingFields = {};
     pricingFields.user = req.user.id;
     if (gallonRequested) pricingFields.gallonRequested = gallonRequested;
     if (date) pricingFields.date = date;
     if (deliveryAddress1) pricingFields.deliveryAddress1 = deliveryAddress1;
     if (deliveryAddress2) pricingFields.deliveryAddress2 = deliveryAddress2;
     if (city) pricingFields.city = city;
     if (zipcode) pricingFields.zipcode = zipcode;
     if (state) pricingFields.state = state;
     
     try {
        let pricing = await Pricing.findOne({ user: req.user.id });
        //Update
        if(pricing){
        
            pricing = await Pricing.findOneAndUpdate({ user: req.user.id });
            return res.json(pricing);
        };
        
        //Create
    
        pricing = new Pricing(pricingFields);
        await pricing.save();
        res.json(pricing);
 
     } catch(err) {
         console.error(err.message);
         res.status(500).send('Server Error');
     }
     
 
 });


 router.get('/', auth, async (req, res)=>{
    try {
        const pricing = await Pricing.findOne({ user: req.user.id });
        pricing.price = 1.5;
        pricing.totalAmountDue = pricing.gallonRequested * pricing.price;
        if(!pricing){
            return res.status(400).json({msg: 'This user does not have a pricing'});
        }
        res.json([pricing.price, pricing.totalAmountDue]);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

 module.exports = router;