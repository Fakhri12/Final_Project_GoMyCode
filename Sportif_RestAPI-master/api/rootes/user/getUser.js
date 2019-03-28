import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.get('/getUser', function(req,res) {

  userModel.find(req.body).then(function(users){
    res.send(users);
}).catch((err) => {
  res.send('error')
});
});

router.get('/getUser/:id', function(req,res) {
  userModel.findOne(req.body.id).then(function(user){
    res.send(user);
}).catch((err) => {
  res.send('error')
});
});


export default router;
