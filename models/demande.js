const mongoose=require('mongoose');
const demandeSchema=mongoose.Schema({
  id:{
    type:String
  },
  
   socite:{
     type:String
   },

  
      
      type:{
                type:String
                      },
      quantity:{
          type:Number
      },
      
      
      date:{
          type:Date,
          default:Date.now
      },
      status:{
        type:String,
        default:"En attente"
    }


   
  
})
const Demande = mongoose.model('Demande',demandeSchema);

exports.Demande=Demande