const express=require('express');
const matrialController = require('../controllers/matrial');
const router =express.Router();
router.post('/createMatrial',matrialController.createMatrial);
router.get('/allMatrial',matrialController.allMatrial)
router.get('/singleMatrial/:id',matrialController.singleMatrial)
router.delete('/deleteMatrial/:id',matrialController.deleteMatrial)
router.put('/updateCategorie/:id',matrialController.updateMatrial)
module.exports={
    routes:router
}