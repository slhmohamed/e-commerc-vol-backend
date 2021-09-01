const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/user');


const addUser = async (req, res, next) => {
   
     

    let user = await User.findOne({email: req.body.email}).exec();
    if(user) return res.status(400).send('User with this email already exist');

    user  = new User(_.pick(req.body, ['username', 'email','tel','adr', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    (await user).save();
    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
}

const curentUser= async (req, res, next) => {
    let user = await User.findById({_id:req.params.id}).exec();
    res.status(200).send({ status: true, result: user });
}

const getAll=async (req,res,next) => {
    let users=await User.find().select('-password');
    res.status(200).send({status:true,result:users})
}


const deleteUser =async(req,res,next)=>{
    const book = await User.findByIdAndRemove(req.params.id);
}

const UpdateStatus =async(req,res,next)=>{
 
    let user = await User.findByIdAndUpdate(req.params.id, {
        status:"Accepte",
       
    }, {new: true});

    console.log(user);
    res.send(user);
}

module.exports = {
    addUser,
    curentUser,
    getAll,
    deleteUser,
    UpdateStatus
} 