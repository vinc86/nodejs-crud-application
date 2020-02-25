const express = require('express');
const bodyParser = require('body-parser');

//db
const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://vincenzo:test@cluster0-uostm.mongodb.net/test?retryWrites=true&w=majority';
const param = { useUnifiedTopology: true, useNewUrlParser: true }

//initialize express app
const port = 3000;
const app = express();

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const product = require('./routes/product.route');
app.use('/products', product);


//connect to db

mongoose.connect(dbUrl, param, (err)=>{
    if(err){console.error("Error: " + err);}
    console.log("Connected to db");
});

app.listen(3000, (err)=>{
    if(err){
        console.error(`Error connection on port ${port}: `, err);
    } 
    console.log(`Listening on port: ${port}`);
})


