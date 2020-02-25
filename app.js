const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//initialize express app
const port = 3000;
const app = express();

app.listen(3000, (err)=>{
    if(err){
        console.error(`Error connection on port ${port}: `, err);
    } 
    console.log(`Listening on port: ${port}`);
})


