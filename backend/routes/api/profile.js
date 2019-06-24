const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check')

const User = require('../../models/User');
const Profile = require('../../models/Profile');
//Get user profile, login required
router.get('/me', auth, async (req, res)=>{
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name']);

        if(!profile){
            return res.status(400).json({msg: 'This user does not have a profile'});
        }
        res.json(profile);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//POST request
//Update user profile
//secured

router.post('/', [auth, [check('address1', 'Address is required').isLength({max: 100}).not().isEmpty(), 
                         check('city', 'city is required').isLength({max:100}).not().isEmpty(),
                         check('zipcode', 'zipcode is required').isLength({min:5, max:9}).not().isEmpty(),
                         check('state', 'state is required').isLength({min:2, max: 2}).not().isEmpty(),
                         check('name', 'Name is required').isLength({max: 50}).not().isEmpty()]
                 ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
            }
    const {
        address1,
        address2,
        city,
        state,
        zipcode,
        fullname
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (address1) profileFields.address1 = address1;
    if (address2) profileFields.address2 = address2;
    if (city) profileFields.city = city;
    if (state) profileFields.state = state;
    if (zipcode) profileFields.zipcode = zipcode;
    if (fullname) profileFields.fullname = fullname;

    try {
        let profile = await Profile.findOne({ user: req.user.id });
        //Update
        if(profile){
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true});
            return res.json(profile);
        };
        

        //Create
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});

//get profile
router.get('/', async (req, res)=>{
 try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
 } catch(err) {
    console.error(err.message);
    res.status(500).send('server error');
 }
})

module.exports = router;