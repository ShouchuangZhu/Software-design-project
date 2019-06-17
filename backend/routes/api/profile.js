const express = require('express');
const router = express.Router();

//Post

router.get('/', (req, res)=>res.send('Profile route'));

module.exports = router;