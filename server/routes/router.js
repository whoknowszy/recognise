var express=require('express');
var router=express.Router();
var get=require('./get_time');
router.get('/getdate/:str',get);

const test=require('../../test/test')
router.get('/',test)
module.exports=router;