const mongoose=require('mongoose');
const jwt =require('jsonwebtoken');
const config=require('config');
const Joi = require('joi');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    tel:{
        type:Number,
        required:true
    },
    adr:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    acountType:{
        type:String,
        default:"vendeur"
    },
    status:{
        type:String,
        default:"Nouveau"
    },
    dateDecreation:{
        type:String,
        default: new Date().toISOString().replace('T', ' ').substring(0, 19)

    }
});
userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this.id},config.get('jwtPrivateKey'));
    return token;
}
const User =mongoose.model('User',userSchema);
 
exports.User=User
 