const express = require('express');
const router = express.Router();

//Post

router.get('/', (req, res)=>res.send('Auth route'));

module.exports = router;