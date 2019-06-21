const express = require('express');
const router = express.Router();

//Post

router.get('/', (req, res)=>res.send('Quotes route'));

module.exports = router;