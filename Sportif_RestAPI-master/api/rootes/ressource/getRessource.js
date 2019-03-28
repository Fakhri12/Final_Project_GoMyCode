import express from 'express'
import ressourceModel from '../../../db/models/Ressource'
const { Router } = express;
const router = Router();

router.get('/getRessource', function(req,res) {
  // res.send("hello")
  ressourceModel.find(req.body).then(function(ressource){
    res.send(ressource);
}).catch((err) => {
  res.send('error')
});
});
export default router;