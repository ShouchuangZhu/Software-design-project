const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const items = require('./routes/api/items')
const app = express();

//Bodyparser Middleware

app.use(bodyParser.json());

const db = 'mongodb+srv://Zhu:zscxxx2008.@cluster0-8ajbt.mongodb.net/test?retryWrites=true&w=majority'

//mongo connection
mongoose.connect(db, {useNewUrlParser: true}).then(()=>{
    console.log('MongoDB Connected')
}).catch(error => console.log(error));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})