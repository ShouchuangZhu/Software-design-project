const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/items')
router.get('/', (req,res)=>{
    Item.find().then(items => res.json(items))
});

//Create item
router.post('/', (req, res)=>{
    const newItem = new Item({
        username: req.body.username
    })
    newItem.save().then(item => res.json(item));
})

//delete item
router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({
        success: true
    })))
    .catch(error => res.status(404).json({success: false}))
})

module.exports = router;