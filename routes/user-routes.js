const express=require('express');
const { addUser,curentUser,getAll ,  deleteUser,
    UpdateStatus} = require('../controllers/userController');
const auth = require('../middelware/auth');


const router =express.Router();
router.post('/register',addUser);

router.get('/getAll',getAll)

router.get('/curentUser/:id',curentUser)

router.delete('/delete/:id',deleteUser)

router.put('/update/:id',UpdateStatus)

module.exports={
    routes:router
}