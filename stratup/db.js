'use strict';
const mongoose=require('mongoose');
const winston=require('winston');
module.exports = () => {
    mongoose.connect('mongodb://localhost/e-commerce-vol',{
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then(()=>winston.info('Mongo db Connected.....'));
}