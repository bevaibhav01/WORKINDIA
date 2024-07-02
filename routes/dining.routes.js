
const express = require("express");
const router = express.Router();
const {addPlaceHandler}=require('../config/database')
const {searchQuery}=require('../config/database')

router.post('/dining-place/create',addPlaceHandler);
router.get('/dining-place/:name',searchQuery);


module.exports=router