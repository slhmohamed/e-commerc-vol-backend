
const {Demande} = require('../models/demande');
const _ = require('lodash');
 sendDemande=async(req,res)=>{
     console.log(req.body);

    
 

    demande  = new Demande(_.pick(req.body, ['id','socite', 'type','quantity']));
 console.log(demande);
    (await demande).save();
   res.status(200).send(demande)
}


 
const getDemand=async(req,res,next)=>{
    demande=await Demande.find({id:req.params.id})

  res.status(200).send({status:true,result:demande})
}

const getAll=async (req,res,next) => {
  let users=await Demande.find();
  res.status(200).send({status:true,result:users})
}

const getDeamndeAcepte=async (req,res,next) => {
  let demandes=await Demande.find({status:"Accepte"  });
  res.status(200).send({status:true,result:demandes})
}

const updateStatus=async (req,res,next)=>{

}
module.exports={
    sendDemande ,
    getDemand,
    getAll,
    getDeamndeAcepte
}

