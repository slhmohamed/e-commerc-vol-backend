const express=require('express');
const {  sendDemande,getDemand,getAll,getDeamndeAcepte} = require('../controllers/demandeController');
const auth = require('../middelware/auth');


const router =express.Router();
router.post('/sendDemande',sendDemande);

router.get('/getAll',getAll)

router.get('/getdemand/:id',getDemand)
router.get('/getDeamndeAcepte',getDeamndeAcepte)

module.exports={
    routes:router
}